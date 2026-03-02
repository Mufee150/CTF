import os
from pathlib import Path
from dotenv import load_dotenv

# Load .env
dotenv_path = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(dotenv_path=dotenv_path)

SUPABASE_URL = os.environ.get("SUPABASE_URL")
print(f"Testing connection to: {SUPABASE_URL}")

# Test DNS resolution
import socket
try:
    hostname = SUPABASE_URL.replace("https://", "").replace("http://", "")
    print(f"Resolving hostname: {hostname}")
    ip = socket.gethostbyname(hostname)
    print(f"✅ DNS Resolution successful! IP: {ip}")
except Exception as e:
    print(f"❌ DNS Resolution FAILED: {e}")
    print("\nPossible causes:")
    print("1. VPN or firewall blocking DNS")
    print("2. Antivirus interfering")
    print("3. Network restrictions")
    print("4. Supabase project paused")
    exit(1)

# Test Supabase connection
try:
    from supabase import create_client
    SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")
    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
    print("✅ Supabase client created successfully!")
    
    # Try a simple query
    result = supabase.table("users").select("id").limit(1).execute()
    print(f"✅ Database query successful! Found {len(result.data)} users")
except Exception as e:
    print(f"❌ Supabase connection FAILED: {e}")
