"""
Fix old submissions by linking them to your user account
"""
import os
from dotenv import load_dotenv
from supabase import create_client

# Load environment
load_dotenv("../.env")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# Your user ID from registration
USER_ID = "e2b7fc7c-f7ae-4dea-8854-ab74c280fc0e"

print("\n" + "="*60)
print("🔧 LINKING OLD SUBMISSIONS TO YOUR ACCOUNT")
print("="*60 + "\n")

# Get all submissions without user_id
result = supabase.table("submissions").select("*").is_("user_id", "null").execute()

if not result.data:
    print("✅ No orphaned submissions found - all good!\n")
else:
    print(f"Found {len(result.data)} submissions without user_id\n")
    
    # Challenge number mapping
    CHALLENGE_NUMBERS = {
        "odysseus": 1, "penelope": 2, "telemachus": 3, "athena": 4,
        "poseidon": 5, "circe": 6, "sirens": 7, "calypso": 8,
        "hermes": 9, "hephaestus": 10, "apollo": 11, "artemis": 12,
        "ares": 13, "hades": 14, "zeus": 15
    }
    
    for submission in result.data:
        challenge_name = submission['challenge_name']
        challenge_num = CHALLENGE_NUMBERS.get(challenge_name, 0)
        
        try:
            # Update submission with user_id and challenge_number
            supabase.table("submissions").update({
                "user_id": USER_ID,
                "challenge_number": challenge_num
            }).eq("id", submission['id']).execute()
            
            print(f"✅ Linked: {challenge_name} (#{challenge_num})")
        except Exception as e:
            print(f"❌ Failed to link {challenge_name}: {e}")
    
    print(f"\n🎯 Updated {len(result.data)} submissions!")
    
    # Now check user progress
    user = supabase.table("users").select("*").eq("id", USER_ID).execute()
    if user.data:
        u = user.data[0]
        print(f"\n📊 Your Progress:")
        print(f"   Challenges Completed: {u['total_challenges_completed']}/15")
        print(f"   Finished: {u['is_finished']}")

print("\n" + "="*60 + "\n")
