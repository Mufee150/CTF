import socket
import requests

# Test 1: DNS resolution for google.com
try:
    ip = socket.gethostbyname("google.com")
    print(f"✅ Can resolve google.com: {ip}")
except Exception as e:
    print(f"❌ Cannot resolve google.com: {e}")

# Test 2: Can Python make HTTP requests?
try:
    response = requests.get("https://www.google.com", timeout=5)
    print(f"✅ Can access google.com via HTTP: {response.status_code}")
except Exception as e:
    print(f"❌ Cannot access google.com: {e}")

# Test 3: Try Supabase
try:
    ip = socket.gethostbyname("wnkjwoffytizsfxfqnk.supabase.co")
    print(f"✅ Can resolve Supabase: {ip}")
except Exception as e:
    print(f"❌ Cannot resolve Supabase: {e}")

# Test 4: Alternative DNS servers
import dns.resolver
try:
    resolver = dns.resolver.Resolver()
    resolver.nameservers = ['8.8.8.8']  # Google DNS
    answers = resolver.resolve('wnkjwoffytizsfxfqnk.supabase.co', 'A')
    for answer in answers:
        print(f"✅ Using Google DNS, Supabase resolves to: {answer}")
except Exception as e:
    print(f"❌ Google DNS also failed: {e}")
    print("This suggests your ISP or computer is blocking Supabase domain")
