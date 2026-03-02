#!/usr/bin/env python3
"""
Challenge Hash Generator for CTF
Generates SHA256 hashes for all challenge flags
"""

import hashlib

# All challenge flags
CHALLENGES = {
    1: {"name": "odysseus", "flag": "homer", "code": "H"},
    2: {"name": "penelope", "flag": "infinityloop", "code": "g"},
    3: {"name": "telemachus", "flag": "seaquest", "code": "@"},
    4: {"name": "athena", "flag": "zeropointcore", "code": "%"},
    5: {"name": "poseidon", "flag": "fgezjkfm", "code": "Z"},
    6: {"name": "zeus", "flag": "47", "code": "$"},
    7: {"name": "hermes", "flag": "thisflagisincorrect", "code": "&"},
    8: {"name": "calypso", "flag": "20", "code": "Q"},
    9: {"name": "circe", "flag": "bruteforceme", "code": "*"},
    # New Challenges - General & Technical Mix
    10: {"name": "ares", "flag": "warcry", "code": "⚔️"},
    11: {"name": "hades", "flag": "484", "code": "💀"},
    12: {"name": "apollo", "flag": "helios", "code": "🎭"},
    13: {"name": "hephaestus", "flag": "forgefire", "code": "🔨"},
    14: {"name": "artemis", "flag": "ehfdcagb", "code": "🏹"},
}

def generate_hash(text):
    """Generate SHA256 hash for given text"""
    return hashlib.sha256(text.encode()).hexdigest()

def main():
    print("=" * 70)
    print("🔐 CTF Challenge Hash Generator")
    print("=" * 70)
    print()
    
    # Generate hashes
    hash_pairs = []
    code_pairs = []
    
    print("Challenge Details:")
    print("-" * 70)
    
    for num, challenge in CHALLENGES.items():
        name = challenge["name"]
        flag = challenge["flag"]
        code = challenge["code"]
        hash_value = generate_hash(flag)
        
        hash_pairs.append(f"{name}:{hash_value}")
        code_pairs.append(f"{name}:{code}")
        
        print(f"{num}. {name.capitalize():15} | Flag: {flag:20} | Code: {code}")
        print(f"   Hash: {hash_value}")
        print()
    
    print("=" * 70)
    print("\n📋 Environment Variable Format:")
    print("-" * 70)
    
    print("\nCHALLENGE_HASHES=\\")
    print(",".join(hash_pairs))
    
    print("\n\nCHALLENGE_CODES=\\")
    print(",".join(code_pairs))
    
    print("\n" + "=" * 70)
    print("\n✅ Copy the above values to your .env file")
    print("💡 Verify all hashes match your challenge pages")
    print()

if __name__ == "__main__":
    main()
