"""
Manually recalculate user progress
"""
import os
from dotenv import load_dotenv
from supabase import create_client

# Load environment
load_dotenv("../.env")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

USER_ID = "e2b7fc7c-f7ae-4dea-8854-ab74c280fc0e"

print("\n" + "="*60)
print("🔢 RECALCULATING USER PROGRESS")
print("="*60 + "\n")

# Count unique challenges for this user
result = supabase.table("submissions").select("challenge_name").eq("user_id", USER_ID).execute()

if result.data:
    unique_challenges = len(set(sub['challenge_name'] for sub in result.data))
    print(f"Found {unique_challenges} unique challenges completed\n")
    
    # Update user record
    is_finished = unique_challenges >= 15
    update_data = {
        "total_challenges_completed": unique_challenges,
        "is_finished": is_finished
    }
    
    if is_finished:
        # Get the timestamp of the last (15th) challenge
        all_submissions = supabase.table("submissions")\
            .select("timestamp")\
            .eq("user_id", USER_ID)\
            .order("timestamp", desc=False)\
            .execute()
        if len(all_submissions.data) >= 15:
            update_data["completed_at"] = all_submissions.data[14]['timestamp']
    
    supabase.table("users").update(update_data).eq("id", USER_ID).execute()
    
    print(f"✅ Updated progress!")
    print(f"   Challenges: {unique_challenges}/15")
    print(f"   Finished: {is_finished}\n")
else:
    print("No submissions found for this user\n")

# Show final status
user = supabase.table("users").select("*").eq("id", USER_ID).execute()
if user.data:
    u = user.data[0]
    print("📊 FINAL STATUS:")
    print(f"   Name: {u['name']}")
    print(f"   Email: {u['email']}")
    print(f"   Started: {u['started_at']}")
    print(f"   Challenges: {u['total_challenges_completed']}/15")
    print(f"   Finished: {u['is_finished']}")
    if u['completed_at']:
        print(f"   Completed: {u['completed_at']}")

print("\n" + "="*60 + "\n")
