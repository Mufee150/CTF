"""
Quick script to check if user tracking is working
"""
import os
from dotenv import load_dotenv
from supabase import create_client

# Load environment
load_dotenv("../.env")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("\n" + "="*60)
print("📊 CHECKING USER TRACKING STATUS")
print("="*60 + "\n")

# Check users table
print("👥 USERS:")
users_result = supabase.table("users").select("*").execute()
if users_result.data:
    for user in users_result.data:
        print(f"  • {user['name']} ({user['email']})")
        print(f"    - Started: {user['started_at']}")
        print(f"    - Challenges: {user['total_challenges_completed']}/15")
        print(f"    - Finished: {user['is_finished']}")
        print(f"    - User ID: {user['id']}")
        print()
else:
    print("  No users found!\n")

# Check submissions table
print("📝 SUBMISSIONS:")
submissions_result = supabase.table("submissions").select("*").order("timestamp").execute()
if submissions_result.data:
    for sub in submissions_result.data:
        user_id = sub.get('user_id', 'N/A')
        challenge_num = sub.get('challenge_number', 'N/A')
        print(f"  • {sub['challenge_name']} (#{challenge_num}) - {sub['code']}")
        print(f"    User ID: {user_id}")
        print(f"    Time: {sub['timestamp']}")
        print()
else:
    print("  No submissions found!\n")

# Check if trigger is working
print("🔧 TRIGGER STATUS:")
trigger_result = supabase.rpc("pg_get_triggerdef", {"oid": "update_user_progress_on_submission"}).execute()
print(f"  Checking if update_user_progress trigger exists...")

print("\n" + "="*60 + "\n")
