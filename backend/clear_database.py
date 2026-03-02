"""
Clear all data from users and submissions tables
"""
import os
from dotenv import load_dotenv
from supabase import create_client

load_dotenv("../.env")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("\n" + "="*60)
print("🗑️  CLEARING ALL DATABASE TABLES")
print("="*60 + "\n")

# Get counts before deletion
users_before = supabase.table("users").select("*", count="exact").execute()
submissions_before = supabase.table("submissions").select("*", count="exact").execute()

print(f"Before deletion:")
print(f"  Users: {users_before.count if hasattr(users_before, 'count') else len(users_before.data)}")
print(f"  Submissions: {submissions_before.count if hasattr(submissions_before, 'count') else len(submissions_before.data)}")
print()

# Delete all submissions (must delete first due to foreign key)
print("Deleting all submissions...")
try:
    # Delete in batches to avoid issues
    result = supabase.table("submissions").select("id").execute()
    if result.data:
        for submission in result.data:
            supabase.table("submissions").delete().eq("id", submission['id']).execute()
        print(f"✅ Deleted {len(result.data)} submissions")
    else:
        print("✅ No submissions to delete")
except Exception as e:
    print(f"❌ Error deleting submissions: {e}")

# Delete all users
print("Deleting all users...")
try:
    result = supabase.table("users").select("id").execute()
    if result.data:
        for user in result.data:
            supabase.table("users").delete().eq("id", user['id']).execute()
        print(f"✅ Deleted {len(result.data)} users")
    else:
        print("✅ No users to delete")
except Exception as e:
    print(f"❌ Error deleting users: {e}")

print()

# Verify deletion
users_after = supabase.table("users").select("*", count="exact").execute()
submissions_after = supabase.table("submissions").select("*", count="exact").execute()

print(f"After deletion:")
print(f"  Users: {users_after.count if hasattr(users_after, 'count') else len(users_after.data)}")
print(f"  Submissions: {submissions_after.count if hasattr(submissions_after, 'count') else len(submissions_after.data)}")

print("\n✨ Database cleared! You can now start fresh.")
print("\nNext steps:")
print("1. Clear browser localStorage: Press F12 → Console → Type: localStorage.clear()")
print("2. Refresh browser (F5)")
print("3. Go to http://localhost:5173 and register again")

print("\n" + "="*60 + "\n")
