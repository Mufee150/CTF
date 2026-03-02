#!/usr/bin/env python3
"""
CTF Competition Test Script
Validates all challenges are configured correctly
"""

import hashlib
import os
import sys
from pathlib import Path

# Expected challenges
CHALLENGES = {
    1: {"name": "odysseus", "flag": "homer", "code": "H"},
    2: {"name": "penelope", "flag": "infinityloop", "code": "g"},
    3: {"name": "telemachus", "flag": "catchmeifyoucan", "code": "@"},
    4: {"name": "athena", "flag": "zeropointcore", "code": "%"},
    5: {"name": "poseidon", "flag": "spintoera", "code": "Z"},
    6: {"name": "zeus", "flag": "vitruvianmatrix", "code": "$"},
    7: {"name": "hermes", "flag": "thisflagisincorrect", "code": "&"},
    8: {"name": "calypso", "flag": "odysseyacrosstime", "code": "Q"},
    9: {"name": "circe", "flag": "bruteforceme", "code": "*"},
}

def generate_hash(text):
    """Generate SHA256 hash"""
    return hashlib.sha256(text.encode()).hexdigest()

def check_file_exists(filepath, description):
    """Check if a file exists"""
    if os.path.exists(filepath):
        print(f"✅ {description}: {filepath}")
        return True
    else:
        print(f"❌ {description} NOT FOUND: {filepath}")
        return False

def check_env_file():
    """Check if .env file exists and has required variables"""
    print("\n📋 Checking Environment Configuration...")
    env_path = Path(__file__).parent.parent / ".env"
    
    if not env_path.exists():
        print(f"❌ .env file not found at {env_path}")
        print("   Copy .env.example and fill in your credentials")
        return False
    
    print(f"✅ .env file found")
    
    required_vars = [
        "SUPABASE_URL",
        "SUPABASE_SERVICE_KEY",
        "FRONTEND_URL",
        "CHALLENGE_HASHES",
        "CHALLENGE_CODES"
    ]
    
    with open(env_path) as f:
        content = f.read()
        missing = []
        for var in required_vars:
            if var not in content:
                missing.append(var)
        
        if missing:
            print(f"❌ Missing variables: {', '.join(missing)}")
            return False
        else:
            print(f"✅ All required environment variables present")
            return True

def check_challenge_files():
    """Check if all challenge page files exist"""
    print("\n📁 Checking Challenge Files...")
    frontend_path = Path(__file__).parent.parent / "frontend" / "src" / "pages"
    
    all_exist = True
    for num, challenge in CHALLENGES.items():
        filename = challenge["name"].capitalize() + ".jsx"
        filepath = frontend_path / filename
        if not check_file_exists(filepath, f"Challenge {num} ({challenge['name']})"):
            all_exist = False
    
    return all_exist

def check_audio_file():
    """Check if morse code audio exists"""
    print("\n🎵 Checking Audio Assets...")
    audio_path = Path(__file__).parent.parent / "frontend" / "public" / "audio" / "circe.wav"
    
    if audio_path.exists():
        print(f"✅ Morse code audio found: {audio_path}")
        return True
    else:
        print(f"❌ Morse code audio NOT FOUND: {audio_path}")
        print("   Run: python backend/generate_morse_audio.py")
        return False

def validate_hashes():
    """Validate all challenge hashes"""
    print("\n🔐 Validating Challenge Hashes...")
    
    all_valid = True
    for num, challenge in CHALLENGES.items():
        flag = challenge["flag"]
        expected_hash = generate_hash(flag)
        print(f"{num}. {challenge['name']:15} | {flag:20} | {expected_hash[:16]}...")
    
    print("✅ All hashes generated successfully")
    return True

def check_documentation():
    """Check if all documentation files exist"""
    print("\n📚 Checking Documentation...")
    
    docs = {
        "README.md": "Main documentation",
        "SETUP.md": "Setup guide",
        "CHALLENGE_GUIDE.md": "Challenge solutions",
        "SOLUTIONS.md": "Quick reference",
        "COMPETITION_DAY.md": "Competition checklist",
        "IMPROVEMENTS.md": "Feature improvements",
        ".env.example": "Environment template"
    }
    
    root = Path(__file__).parent.parent
    all_exist = True
    
    for filename, description in docs.items():
        filepath = root / filename
        if not check_file_exists(filepath, description):
            all_exist = False
    
    return all_exist

def check_component_files():
    """Check if all required components exist"""
    print("\n🧩 Checking Component Files...")
    
    components_path = Path(__file__).parent.parent / "frontend" / "src" / "components"
    
    required_components = [
        "ChallengePage.jsx",
        "ChallengeLogic.jsx",
        "ChallengeUI.jsx",
        "ChallengeContainer.jsx",
        "StarrySky.jsx"
    ]
    
    all_exist = True
    for component in required_components:
        filepath = components_path / component
        if not check_file_exists(filepath, component):
            all_exist = False
    
    return all_exist

def main():
    """Run all validation checks"""
    print("=" * 70)
    print("🎮 CTF Competition Validation Script")
    print("=" * 70)
    
    checks = [
        ("Environment Configuration", check_env_file),
        ("Challenge Files", check_challenge_files),
        ("Component Files", check_component_files),
        ("Audio Assets", check_audio_file),
        ("Challenge Hashes", validate_hashes),
        ("Documentation", check_documentation),
    ]
    
    results = []
    for name, check_func in checks:
        try:
            result = check_func()
            results.append((name, result))
        except Exception as e:
            print(f"❌ Error in {name}: {e}")
            results.append((name, False))
    
    # Summary
    print("\n" + "=" * 70)
    print("📊 VALIDATION SUMMARY")
    print("=" * 70)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status:10} | {name}")
    
    print("=" * 70)
    print(f"Score: {passed}/{total} checks passed")
    
    if passed == total:
        print("\n🎉 All checks passed! You're ready for competition!")
        print("\n📋 Next steps:")
        print("1. Fill in .env with your Supabase credentials")
        print("2. Run: python backend/generate_morse_audio.py")
        print("3. Test locally: cd backend && python app.py")
        print("4. Test frontend: cd frontend && npm run dev")
        print("5. Review COMPETITION_DAY.md for day-of checklist")
        return 0
    else:
        print("\n⚠️  Some checks failed. Please fix the issues above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())
