"""
Show which challenges are completed and missing
"""
import os
from dotenv import load_dotenv
from supabase import create_client

load_dotenv("../.env")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

USER_ID = "e2b7fc7c-f7ae-4dea-8854-ab74c280fc0e"

ALL_CHALLENGES = [
    "odysseus", "penelope", "telemachus", "athena", "poseidon",
    "circe", "sirens", "calypso", "hermes", "hephaestus",
    "apollo", "artemis", "ares", "hades", "zeus"
]

print("\n" + "="*60)
print("📋 YOUR CHALLENGE PROGRESS")
print("="*60 + "\n")

# Get completed challenges
result = supabase.table("submissions").select("challenge_name").eq("user_id", USER_ID).execute()
completed = set(sub['challenge_name'] for sub in result.data)

print("✅ COMPLETED:")
for i, challenge in enumerate(ALL_CHALLENGES, 1):
    if challenge in completed:
        print(f"   {i:2}. {challenge.title()}")

print("\n❌ MISSING:")
for i, challenge in enumerate(ALL_CHALLENGES, 1):
    if challenge not in completed:
        print(f"   {i:2}. {challenge.title()}")

print("\n" + "="*60 + "\n")
