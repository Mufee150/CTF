-- EnigmaX: Decode the Unknown - Database Schema
-- Run this in Supabase SQL editor

-- Users table: stores participant registration details
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  phone text not null,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  total_challenges_completed int default 0,
  is_finished boolean default false
);

create index if not exists idx_users_email on users(email);
create index if not exists idx_users_completed on users(completed_at);

-- Submissions table: tracks each challenge completion
-- First, ensure the table exists with basic structure
create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  username text,  -- Made nullable for user_id based tracking
  challenge_name text not null,
  code text not null,
  timestamp timestamptz not null default now()
);

-- Make username nullable if it exists as NOT NULL (migration fix)
do $$
begin
  alter table submissions alter column username drop not null;
exception when others then
  null; -- Ignore if already nullable
end $$;

-- Add new columns if they don't exist (for migration from old CTF)
do $$ 
begin
  -- Add user_id column
  if not exists (
    select 1 from information_schema.columns 
    where table_name = 'submissions' and column_name = 'user_id'
  ) then
    alter table submissions add column user_id uuid references users(id) on delete cascade;
  end if;
  
  -- Add challenge_number column
  if not exists (
    select 1 from information_schema.columns 
    where table_name = 'submissions' and column_name = 'challenge_number'
  ) then
    alter table submissions add column challenge_number int default 0;
  end if;
end $$;

-- Create indexes
create index if not exists idx_submissions_user_id on submissions(user_id);
create index if not exists idx_submissions_username on submissions(username);

-- Prevent duplicates per (user_id, challenge_name) - only if user_id exists
drop index if exists uq_user_challenge;
create unique index if not exists uq_user_challenge
  on submissions (user_id, challenge_name) where user_id is not null;

-- Function to update user progress
create or replace function update_user_progress()
returns trigger as $$
declare
  total_completed int;
begin
  -- Only update if submission has a user_id
  if NEW.user_id is null then
    return NEW;
  end if;
  
  -- Count total challenges completed by this user
  select count(*) into total_completed
  from submissions
  where user_id = NEW.user_id;
  
  -- Update user record
  update users
  set total_challenges_completed = total_completed,
      completed_at = case when total_completed >= 15 then now() else completed_at end,
      is_finished = case when total_completed >= 15 then true else is_finished end
  where id = NEW.user_id;
  
  return NEW;
end;
$$ language plpgsql;

-- Trigger to auto-update user progress
drop trigger if exists trigger_update_user_progress on submissions;
create trigger trigger_update_user_progress
  after insert on submissions
  for each row execute function update_user_progress();

-- View: Leaderboard (fastest completion times)
create or replace view leaderboard as
select 
  u.name,
  u.email,
  u.phone,
  u.started_at,
  u.completed_at,
  u.total_challenges_completed,
  extract(epoch from (u.completed_at - u.started_at)) as time_taken_seconds,
  (u.completed_at - u.started_at) as duration
from users u
where u.is_finished = true
order by (u.completed_at - u.started_at) asc;

-- View: Current progress (all participants)
create or replace view participant_progress as
select 
  u.name,
  u.email,
  u.phone,
  u.started_at,
  u.total_challenges_completed,
  u.is_finished,
  case 
    when u.is_finished then extract(epoch from (u.completed_at - u.started_at))
    else extract(epoch from (now() - u.started_at))
  end as time_elapsed_seconds
from users u
order by u.total_challenges_completed desc, u.started_at asc;

