import os
from flask import Flask, request, jsonify, Response
from dotenv import load_dotenv
from supabase import create_client, Client
from datetime import datetime, timezone
from pathlib import Path

# Load environment variables (try local .env first, then Render env vars)
try:
    dotenv_path = Path(__file__).resolve().parents[1] / ".env"
    if dotenv_path.exists():
        load_dotenv(dotenv_path=dotenv_path)
        print(f"✅ Loaded .env from: {dotenv_path}")
    else:
        print("⚠️ No local .env file found, using environment variables.")
except Exception as e:
    print(f"⚠️ Error loading .env: {e}, using environment variables.")

# Flask app
app = Flask(__name__)

# Add a root route for health check
@app.route("/", methods=["GET"])
def health_check():
    return jsonify({"message": "EnigmaX Backend is running!", "status": "healthy", "version": "1.0"})

# Supabase client
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("❌ Warning: SUPABASE_URL or SUPABASE_SERVICE_KEY not set!")
    # Don't raise error immediately for deployment, let it start and show in logs
else:
    try:
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        print("✅ Supabase client initialized successfully")
    except Exception as e:
        print(f"❌ Error creating Supabase client: {e}")
        supabase = None

# Helper: parse CHALLENGE_HASHES and CHALLENGE_CODES from env
def parse_map(env_value: str):
    m = {}
    if not env_value:
        return m
    parts = [p.strip() for p in env_value.split(",") if p.strip()]
    for p in parts:
        if ":" in p:
            k, v = p.split(":", 1)
            m[k.strip()] = v.strip()
    return m

DEFAULT_CHALLENGE_HASHES = {
    "odysseus": "2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f",
    "penelope": "04d75cde9beeb4d14f7f4e95dab88b6f9398f71eb837000c2cffc1600418a1e0",
    "telemachus": "80a76608587fa6f9ae56b5b4b661f884dc924d054914735fa06963ca515e8097",
    "athena": "f0483107f8792b3ecb4a07279debf58aa2c271d26f629c6495dc5f046b0555a0",
    "poseidon": "3ad63493e71a28e268cdce310498f59100e938e4d85a9e0da5a0daa981ef9dce",
    "zeus": "31489056e0916d59fe3add79e63f095af3ffb81604691f21cad442a85c7be617",
    "hermes": "48398245bb0dcfead2309ac3272f399c26fd8964b8919e049001ffc78159bc28",
    "calypso": "f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b",
    "circe": "6144545e67abcfeb8ce053127fc5189ea9f094454ec54ec9dd7bf1774d74d62d",
    "sirens": "982cba6c0950686e37519d347bfa51deb9c933de7844a3800973b65d78c4667e",
    "ares": "716fa99f93d9afbacb0f0da959f0a53c1f56681e59e38a99a3e1c945412e6e47",
    "hades": "a42e815c58f3977fe531a80ffd4659121c3b9f876a89869042816c369ed80776",
    "apollo": "48582bd628b7c80064780ba9ecce2d435db042b40bd4335a7cea4b4c254e8178",
    "hephaestus": "c38d079d287fd7856612a8fc448178f5737fa4486dcbc0eff3b73571476a1157",
    "artemis": "afacd969e5ec38fddc33add9fd6a2dbff7b3affd71e95064271897e99f573ac4",
}

DEFAULT_CHALLENGE_CODES = {
    "odysseus": "H",
    "penelope": "g",
    "telemachus": "@",
    "athena": "%",
    "poseidon": "Z",
    "zeus": "$",
    "hermes": "&",
    "calypso": "Q",
    "circe": "*",
    "sirens": "!",
    "ares": "⚔️",
    "hades": "💀",
    "apollo": "🎭",
    "hephaestus": "🔨",
    "artemis": "🏹",
}

CHALLENGE_HASHES = DEFAULT_CHALLENGE_HASHES.copy()
CHALLENGE_HASHES.update(parse_map(os.environ.get("CHALLENGE_HASHES", "")))

CHALLENGE_CODES = DEFAULT_CHALLENGE_CODES.copy()
CHALLENGE_CODES.update(parse_map(os.environ.get("CHALLENGE_CODES", "")))

CHALLENGE_ORDER = {
    "odysseus": 1,
    "penelope": 2,
    "telemachus": 3,
    "athena": 4,
    "poseidon": 5,
    "zeus": 6,
    "hermes": 7,
    "calypso": 8,
    "circe": 9,
    "sirens": 10,
    "ares": 11,
    "hades": 12,
    "apollo": 13,
    "hephaestus": 14,
    "artemis": 15,
}

print(f"📋 Loaded {len(CHALLENGE_HASHES)} challenge hashes")
print(f"📋 Loaded {len(CHALLENGE_CODES)} challenge codes")

# Middleware: Add CORS headers (allow your frontend domain)
@app.after_request
def add_cors_headers(resp: Response):
    # Allow your frontend domain - update this with your actual frontend URL
    allowed_origins = [
        "http://localhost:5173",  # Local Vite dev server
        "http://localhost:3000",  # Local React dev server
        os.environ.get("FRONTEND_URL", ""),  # Your deployed frontend URL
        "*"  # Remove this in production, use specific domain
    ]
    
    origin = request.headers.get('Origin')
    if origin in allowed_origins or "*" in allowed_origins:
        resp.headers["Access-Control-Allow-Origin"] = origin or "*"
    
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    resp.headers["Access-Control-Allow-Credentials"] = "true"
    return resp

# Handle preflight requests
@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        response = Response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response

# Route: Register new user
@app.route("/api/register", methods=["POST", "OPTIONS"])
def register():
    if request.method == "OPTIONS":
        return ("", 204)

    if not supabase:
        return jsonify({"success": False, "message": "Database not available"}), 500

    data = request.get_json(force=True, silent=True) or {}
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip().lower()
    phone = (data.get("phone") or "").strip()

    print(f"📥 Registration request: {name} - {email}")

    # Validate inputs
    if not name or len(name) < 2:
        return jsonify({"success": False, "message": "Name must be at least 2 characters"}), 400
    
    if not email or "@" not in email:
        return jsonify({"success": False, "message": "Valid email is required"}), 400
    
    if not phone or len(phone) < 10:
        return jsonify({"success": False, "message": "Valid phone number is required"}), 400

    # Check if email already exists
    try:
        existing = supabase.table("users").select("id").eq("email", email).execute()
        if existing.data:
            return jsonify({"success": False, "message": "This email is already registered. Each participant can only register once."}), 400
    except Exception as e:
        print(f"⚠️ Error checking email: {e}")
        return jsonify({"success": False, "message": "Database error"}), 500

    # Check if phone already exists
    try:
        existing_phone = supabase.table("users").select("id").eq("phone", phone).execute()
        if existing_phone.data:
            return jsonify({"success": False, "message": "This phone number is already registered. Each participant can only register once."}), 400
    except Exception as e:
        print(f"⚠️ Error checking phone: {e}")
        return jsonify({"success": False, "message": "Database error"}), 500

    # Insert new user
    now = datetime.now(timezone.utc).isoformat()
    try:
        result = supabase.table("users").insert({
            "name": name,
            "email": email,
            "phone": phone,
            "started_at": now,
            "total_challenges_completed": 0,
            "is_finished": False
        }).execute()
        
        user_id = result.data[0]["id"]
        print(f"✅ Successfully registered user: {name} (ID: {user_id})")
        return jsonify({"success": True, "user_id": user_id, "message": "Registration successful!"})
    except Exception as e:
        print(f"❌ Registration error: {e}")
        return jsonify({"success": False, "message": "Registration failed. Please try again."}), 500

# Route: Submit challenge solution
@app.route("/api/submit", methods=["POST", "OPTIONS"])
def submit():
    if request.method == "OPTIONS":
        return ("", 204)

    if not supabase:
        return jsonify({"success": False, "error": "Database not available"}), 500

    data = request.get_json(force=True, silent=True) or {}
    user_id = (data.get("user_id") or "").strip()
    username = (data.get("username") or "").strip()  # Backward compatibility
    challenge_name = (data.get("challenge_name") or "").strip()
    client_hash = (data.get("client_hash") or "").strip()
    challenge_number = CHALLENGE_ORDER.get(challenge_name, 0)

    print(f"📥 Submit request: user_id={user_id}, challenge={challenge_name}")

    # Require either user_id or username for now (transition period)
    if not (user_id or username) or not challenge_name or not client_hash:
        return jsonify({"success": False, "error": "Missing fields"}), 400

    expected = CHALLENGE_HASHES.get(challenge_name)
    if not expected:
        return jsonify({"success": False, "error": "Unknown challenge"}), 400

    if client_hash != expected:
        return jsonify({"success": False, "error": "Incorrect"}), 400

    code = CHALLENGE_CODES.get(challenge_name, "?")

    now = datetime.now(timezone.utc).isoformat()
    try:
        submission_data = {
            "challenge_name": challenge_name,
            "code": code,
            "timestamp": now
        }
        
        # Use user_id if available, fetch username from users table
        if user_id:
            submission_data["user_id"] = user_id
            submission_data["challenge_number"] = challenge_number
            # Fetch username from users table (required field in submissions)
            try:
                user_result = supabase.table("users").select("name").eq("id", user_id).execute()
                if user_result.data:
                    submission_data["username"] = user_result.data[0]["name"]
                else:
                    submission_data["username"] = "unknown"
            except:
                submission_data["username"] = "unknown"
        else:
            submission_data["username"] = username
            
        supabase.table("submissions").insert(submission_data, count="exact").execute()
        print(f"✅ Successfully recorded submission for {submission_data.get('username', 'unknown')}")
    except Exception as e:
        print(f"⚠️ Insert error (probably duplicate): {e}")

    if user_id and challenge_number:
        try:
            user_res = supabase.table("users").select("total_challenges_completed,is_finished").eq("id", user_id).execute()
            if user_res.data:
                current_total = int(user_res.data[0].get("total_challenges_completed") or 0)
                new_total = max(current_total, int(challenge_number))

                update_data = {"total_challenges_completed": new_total}

                if new_total >= len(CHALLENGE_ORDER) and not user_res.data[0].get("is_finished"):
                    update_data["is_finished"] = True
                    update_data["completed_at"] = now

                supabase.table("users").update(update_data).eq("id", user_id).execute()
                print(f"✅ Updated progress for user {user_id}: {new_total}/{len(CHALLENGE_ORDER)}")
        except Exception as e:
            print(f"⚠️ Progress update error: {e}")

    return jsonify({"success": True, "code": code})

# Route: Get status of submissions for a user
@app.route("/api/status/<username>", methods=["GET"])
def status(username):
    if not supabase:
        return jsonify({"submissions": [], "error": "Database not available"})

    username = username.strip()
    if not username:
        return jsonify({"submissions": []})

    try:
        res = supabase.table("submissions").select("*").eq(
            "username", username
        ).order("timestamp", desc=False).execute()

        rows = res.data or []
        print(f"📊 Status request for {username}: {len(rows)} submissions")
        return jsonify({"submissions": rows})
    except Exception as e:
        print(f"❌ Error fetching status: {e}")
        return jsonify({"submissions": [], "error": "Database error"}), 500

# Route: Get all challenges (for frontend)
@app.route("/api/challenges", methods=["GET"])
def challenges():
    return jsonify({
        "challenges": list(CHALLENGE_HASHES.keys()),
        "total": len(CHALLENGE_HASHES)
    })

# Route: Get user progress
@app.route("/api/progress/<user_id>", methods=["GET"])
def get_progress(user_id):
    if not supabase:
        return jsonify({"error": "Database not available"}), 500

    try:
        # Get user details
        user_result = supabase.table("users").select("*").eq("id", user_id).execute()
        if not user_result.data:
            return jsonify({"error": "User not found"}), 404
        
        user = user_result.data[0]
        
        # Get submissions
        submissions_result = supabase.table("submissions").select("*").eq("user_id", user_id).order("timestamp", desc=False).execute()
        
        return jsonify({
            "user": user,
            "submissions": submissions_result.data or [],
            "total_completed": user["total_challenges_completed"],
            "is_finished": user["is_finished"],
            "started_at": user["started_at"],
            "completed_at": user.get("completed_at")
        })
    except Exception as e:
        print(f"❌ Error fetching progress: {e}")
        return jsonify({"error": "Database error"}), 500

# Route: Get leaderboard
@app.route("/api/leaderboard", methods=["GET"])
def get_leaderboard():
    if not supabase:
        return jsonify({"leaderboard": [], "error": "Database not available"}), 500

    try:
        # Use the leaderboard view we created
        result = supabase.table("leaderboard").select("*").execute()
        return jsonify({"leaderboard": result.data or []})
    except Exception as e:
        print(f"❌ Error fetching leaderboard: {e}")
        # Fallback: calculate manually if view doesn't exist yet
        try:
            result = supabase.table("users").select("name, email, started_at, completed_at").eq("is_finished", True).execute()
            leaderboard = []
            for user in result.data or []:
                if user.get("started_at") and user.get("completed_at"):
                    from datetime import datetime
                    start = datetime.fromisoformat(user["started_at"].replace('Z', '+00:00'))
                    end = datetime.fromisoformat(user["completed_at"].replace('Z', '+00:00'))
                    duration_seconds = (end - start).total_seconds()
                    leaderboard.append({
                        "name": user["name"],
                        "email": user["email"],
                        "duration_seconds": duration_seconds
                    })
            leaderboard.sort(key=lambda x: x["duration_seconds"])
            return jsonify({"leaderboard": leaderboard})
        except Exception as e2:
            print(f"❌ Fallback leaderboard error: {e2}")
            return jsonify({"leaderboard": [], "error": "Database error"}), 500

# Error handler
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500

# Run the app
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    debug = os.environ.get("FLASK_ENV") != "production"
    print(f"🚀 Starting Flask server on port {port} (debug={debug})")
    print(f"🌐 Environment: {os.environ.get('FLASK_ENV', 'development')}")
    app.run(host="0.0.0.0", port=port, debug=debug)