"""
Check if odysseus submission exists with user_id
"""
import os
from dotenv import load_dotenv
from supabase import create_client

load_dotenv("../.env")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

USER_ID = "e2b7fc7c-f7ae-4dea-8854-ab74c280fc0e"

print("\n" + "="*60)
print("🔍 CHECKING ODYSSEUS SUBMISSIONS")
print("="*60 + "\n")

# Check all odysseus submissions
result = supabase.table("submissions").select("*").eq("challenge_name", "odysseus").execute()

if result.data:
    print(f"Found {len(result.data)} Odysseus submission(s):\n")
    for sub in result.data:
        print(f"  ID: {sub['id']}")
        print(f"  User ID: {sub.get('user_id', 'None')}")
        print(f"  Time: {sub['timestamp']}")
        print()
else:
    print("❌ No Odysseus submissions found!\n")

# Check user progress
user = supabase.table("users").select("*").eq("id", USER_ID).execute()
if user.data:
    u = user.data[0]
    print("📊 Current User Status:")
    print(f"   Challenges: {u['total_challenges_completed']}/15")
    print(f"   Finished: {u['is_finished']}")

print("\n" + "="*60 + "\n")
