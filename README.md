
# 🔮 EnigmaX: Decode the Unknown

**An interactive coding challenge competition featuring Greek mythology-inspired enigmas and creative puzzles!**

## 🌟 Competition Overview

- **Theme:** EnigmaX - Journey through Greek mythology and decode hidden mysteries
- **Total Challenges:** 15 unique enigmas
- **Difficulty:** Beginner to Advanced
- **Skills Tested:** Pattern recognition, logic, cryptography, web inspection, problem-solving
- **Format:** Online competition with full user registration and time tracking

---

## 🎯 Challenge Types

1. **Visual Puzzles** - Starry sky constellations, hidden patterns
2. **CSS Techniques** - Hidden messages in styles and colors
3. **Steganography** - DOM and metadata inspection
4. **Encoding** - Base64, binary, morse code, hexadecimal
5. **Pattern Recognition** - Mathematical sequences, ciphers
6. **Console Challenges** - Browser developer tools required
7. **Logic Puzzles** - Roman numerals, riddles, positional patterns
8. **Interactive** - Real-time validation and progression

---

## 🚀 Quick Start

### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Access at: `http://localhost:5173`

### Backend (Flask + Supabase)
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Runs on: `http://localhost:5000`

---

## 🏗️ Tech Stack

- **Frontend:** React 18 + Vite + TailwindCSS + React Router
- **Backend:** Flask (Python) + Supabase PostgreSQL
- **Database:** Supabase (PostgreSQL)
- **Security:** SHA256 client-side validation
- **Routing:** React Router v6

---

## 📂 Project Structure

```
frontend/
  src/
    pages/          # 9 Challenge pages (Odysseus → Circe)
    components/     # Reusable UI components
    backgrounds/    # Visual effects (StarrySky, etc.)
  public/
    audio/          # Morse code audio files

backend/
  app.py            # Flask API server
  requirements.txt  # Python dependencies
  supabase_schema.sql  # Database schema

CHALLENGE_GUIDE.md  # Complete solutions & setup guide
```

---

## ⚙️ Environment Setup

Create a `.env` file in the **root** directory:

```env
# Supabase
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_key

# CORS
FRONTEND_URL=http://localhost:5173

# Challenge Hashes (SHA256)
CHALLENGE_HASHES=odysseus:2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f,penelope:04d75cde9beeb4d14f7f4e95dab88b6f9398f71eb837000c2cffc1600418a1e0,telemachus:826457e1f6810cda018196cd7631b6a5e7a03644a91fbc599c7613ab9008f603,athena:f0483107f8792b3ecb4a07279debf58aa2c271d26f629c6495dc5f046b0555a0,poseidon:1e2c75f343da0f688fc45b6e5e11d8992406811172f9bc4af36f07bacbaccf56,zeus:5c7906a3b838872ecf7c82d2b0910e56034f95081333d8e2a07a7330f4e60dc1,hermes:48398245bb0dcfead2309ac3272f399c26fd8964b8919e049001ffc78159bc28,calypso:0d1af12ee692bc4bac27e99603f21771dd617d9b3d5f4748e89abf1d46243dfb,circe:6144545e67abcfeb8ce053127fc5189ea9f094454ec54ec9dd7bf1774d74d62d

# Challenge Codes
CHALLENGE_CODES=odysseus:H,penelope:g,telemachus:@,athena:%,poseidon:Z,zeus:$,hermes:&,calypso:Q,circe:*
```

---

## 📊 Database Schema

```sql
CREATE TABLE submissions (
  id BIGSERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  challenge_name TEXT NOT NULL,
  code TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 🎮 How to Play

1. **Register** - Enter your username on the landing page
2. **Challenge 1** - Start with Odysseus (starry sky)
3. **Solve** - Find hidden flags using various techniques
4. **Submit** - Enter the password to unlock the next challenge
5. **Progress** - Complete all 9 challenges
6. **Win** - Collect all codes: `H g @ % Z $ & Q *`

---

## 🔐 Challenge Techniques

- **Source Code Inspection** - View page HTML/CSS/JS
- **Browser DevTools** - Console, Elements, Network tabs
- **CSS Analysis** - Hidden messages in styles
- **Encoding/Decoding** - Base64, binary, morse
- **Pattern Recognition** - Visual and logic puzzles
- **Interactive Elements** - Keyboard input, selections

---

## 📝 For Organizers

See **[CHALLENGE_GUIDE.md](CHALLENGE_GUIDE.md)** for:
- ✅ Complete challenge solutions
- ✅ All flags and hashes
- ✅ Scoring system
- ✅ Deployment checklist
- ✅ Learning objectives

---

## 🎨 Features

- ✨ **Beautiful UI** - Gradient backgrounds, animations
- 🔒 **Client-side validation** - SHA256 before API call
- 📱 **Responsive design** - Mobile and desktop friendly
- 🎯 **Progress tracking** - Database logs all submissions
- 🏆 **Congratulations page** - Success screen after completion

---

## 🛠️ Development

### Generate SHA256 hash for new flag:
```bash
echo -n "yourflag" | sha256sum
```

### Add new challenge:
1. Create page in `frontend/src/pages/`
2. Add route in `App.jsx`
3. Update challenge hash in `.env`
4. Add to `CHALLENGE_GUIDE.md`

### Test backend:
```bash
curl -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{"username":"test","challenge_name":"odysseus","client_hash":"2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f"}'
```

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Supabase Docs](https://supabase.com/docs)
- [Flask Documentation](https://flask.palletsprojects.com)

---

## 🐛 Troubleshooting

**Frontend won't start:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Backend CORS errors:**
- Check FRONTEND_URL in `.env`
- Verify Supabase credentials

**Challenges not validating:**
- Verify hashes match in `.env`
- Check browser console for errors
- Ensure backend is running

---

## 📄 License

Created for educational CTF competitions. Feel free to modify and reuse!

---

## 🎉 Credits

**Challenge Design:** Creative web security techniques  
**Theme:** Greek Mythology - The Odyssey  
**Tech:** Modern React + Python stack  

**Good luck to all participants!** ⚡🏛️✨
bash
git clone https://github.com/your-username/ctf-dashboard.git
cd ctf-dashboard
```

---

### 2. Setup the backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # (Windows)
# OR
source venv/bin/activate  # (Mac/Linux)

pip install -r requirements.txt
```

Run the backend:

```bash
uvicorn main:app --reload
```

The API will be live at **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

### 3. Setup the frontend

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:

```
VITE_API_URL=http://127.0.0.1:8000
```

Run the frontend:

```bash
npm run dev
```

The frontend will be live at **[http://127.0.0.1:5173](http://127.0.0.1:5173)**

---

### 4. Setup Supabase

1. Go to [Supabase](https://supabase.com/) and create a project.
2. Create a table `submissions` with columns:

   * `id` → `uuid` (Primary key)
   * `username` → `text`
   * `challenge_name` → `text`
   * `code` → `text`
   * `timestamp` → `timestamp with time zone` (default: `now()`)
3. Copy your **API keys** and **database URL** from Supabase dashboard into your `backend/.env`.

Example `.env` (backend):

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-role-key
```

---

## 🎮 How to Play

1. Open **[http://127.0.0.1:5173](http://127.0.0.1:5173)** in your browser.
2. Enter your username on the landing page.
3. Solve the first challenge (Rat) by guessing the password/flag.
4. Each challenge validates your answer client-side using SHA256 and then submits it to the backend.
5. Progress through challenges until you reach **Congrats page** 🎉.

---

## 🔒 Notes

* Each challenge has a hidden password/flag.
* Submissions are stored in Supabase for tracking (admins can view them).
* Players cannot skip levels if numeric routes are removed (only animal-name routes remain).

---

## 📜 License

MIT License. Free to use, modify, and share.

