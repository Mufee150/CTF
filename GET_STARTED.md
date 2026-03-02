# 🎯 GET STARTED - Quick 5-Minute Guide

**Your CTF is ready! Just 3 steps to run it:**

---

## Step 1: Create `.env` File (2 minutes)

Copy the example template:
```bash
cp .env.example .env
```

Then edit `.env` and add your Supabase credentials:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_service_key_here
```

**Where to get these:**
1. Go to [supabase.com](https://supabase.com)
2. Create/open project
3. Go to Settings → API
4. Copy "Project URL" and "Service Role Key"

---

## Step 2: Generate Morse Audio (30 seconds)

```bash
cd backend
python generate_morse_audio.py
```

This creates `frontend/public/audio/circe.wav` for Challenge 9.

---

## Step 3: Run the Servers (1 minute)

**Terminal 1 - Backend:**
```bash
cd backend
pip install -r requirements.txt
python app.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open: **http://localhost:5173**

---

## ✅ Quick Test

1. Enter username: "testuser"
2. Click "Start Challenge"
3. Hover over yellow stars
4. They spell: **HOMER**
5. Enter `homer` and submit
6. Should advance to Challenge 2!

---

## 📚 Full Documentation

- **Setup Guide:** [SETUP.md](SETUP.md)
- **All Solutions:** [CHALLENGE_GUIDE.md](CHALLENGE_GUIDE.md)
- **Competition Day:** [COMPETITION_DAY.md](COMPETITION_DAY.md)
- **Quick Reference:** [SOLUTIONS.md](SOLUTIONS.md)

---

## 🎮 All Challenge Flags

| Challenge | Flag |
|-----------|------|
| 1. Odysseus | `homer` |
| 2. Penelope | `infinityloop` |
| 3. Telemachus | `catchmeifyoucan` |
| 4. Athena | `zeropointcore` |
| 5. Poseidon | `spintoera` |
| 6. Zeus | `vitruvianmatrix` |
| 7. Hermes | `thisflagisincorrect` |
| 8. Calypso | `odysseyacrosstime` |
| 9. Circe | `bruteforceme` |

---

## 🚨 Troubleshooting

**Backend won't start?**
```bash
pip install flask python-dotenv supabase
```

**Frontend won't start?**
```bash
cd frontend
rm -rf node_modules
npm install
```

**Need help?**
- Read [SETUP.md](SETUP.md) for detailed instructions
- Run `python backend/test_setup.py` to validate

---

**Competition Date: Wednesday, February 18, 2026**  
**Duration: 1-2 hours**  
**Good luck! 🏆**
