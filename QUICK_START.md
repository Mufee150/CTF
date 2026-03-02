# 🚀 Quick Start Guide

Get your CTF running in less than 5 minutes!

---

## ⚡ Express Setup (1 Terminal, 2 Commands)

### 1. Start Frontend Only (No Database)

```bash
# Open Terminal 1
cd frontend
npm install
npm run dev
```

✅ **Access:** http://localhost:5173

**What works:**
- ✅ All 14 challenge pages load
- ✅ Visual effects, animations, interactions
- ✅ Starry sky, moon phases, flames, etc.
- ⚠️ Flag submission will show "Database not available" (expected without backend)

---

## 🎯 Full Setup (Frontend + Backend)

### Terminal 1: Frontend
```bash
cd frontend
npm install
npm run dev
```

### Terminal 2: Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```

✅ **Access:** http://localhost:5173  
✅ **Backend:** http://localhost:5000

**What works:**
- ✅ All challenges functional
- ✅ Flag validation (hashes)
- ⚠️ Submissions won't save to database (need Supabase)

---

## 🗄️ Complete Setup (With Database)

### 1. Create Supabase Account
- Go to https://supabase.com
- Create a new project
- Wait 2 minutes for database provisioning

### 2. Create Database Table
Copy and run this SQL in Supabase SQL Editor:

```sql
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL,
  challenge_name TEXT NOT NULL,
  code TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Allow all operations (for testing)
CREATE POLICY "Allow all" ON submissions FOR ALL USING (true);
```

### 3. Configure Environment
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your Supabase credentials:
# - SUPABASE_URL (from project settings)
# - SUPABASE_SERVICE_KEY (from API settings)
```

### 4. Start Services
```bash
# Terminal 1: Backend
cd backend
python app.py

# Terminal 2: Frontend
cd frontend
npm run dev
```

✅ **Everything works!** Flags save to database.

---

## 🎮 Testing All Challenges

### Original 9 Challenges
```bash
# Visit these URLs:
http://localhost:5173/challenge/1   # Odysseus - Starry constellation
http://localhost:5173/challenge/2   # Penelope - Infinity loop
http://localhost:5173/challenge/3   # Telemachus - Input validation
http://localhost:5173/challenge/4   # Athena - CSS binary
http://localhost:5173/challenge/5   # Poseidon - Invisible text
http://localhost:5173/challenge/6   # Zeus - Coordinates
http://localhost:5173/challenge/7   # Hermes - Konami code
http://localhost:5173/challenge/8   # Calypso - Base64
http://localhost:5173/challenge/9   # Circe - Morse audio
```

### New 5 Challenges (General + Tech)
```bash
http://localhost:5173/challenge/10  # Ares - Mythology riddle
http://localhost:5173/challenge/11  # Hades - Math puzzle
http://localhost:5173/challenge/12  # Apollo - Word puzzle
http://localhost:5173/challenge/13  # Hephaestus - Browser console
http://localhost:5173/challenge/14  # Artemis - Moon cipher
```

---

## 🐛 Troubleshooting

### Frontend won't start
```bash
# Delete node_modules and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend errors
```bash
# Check Python version (need 3.8+)
python --version

# Reinstall dependencies
cd backend
pip install -r requirements.txt --upgrade
python app.py
```

### "Database not available" message
- ✅ **This is normal** if you haven't set up Supabase
- Challenges still work, just can't save submissions
- Follow "Complete Setup" section above to enable database

### Starry sky not showing
- ✅ **FIXED!** The stars are now centered and responsive
- Hover over the golden stars to see letters spelling "HOMER"
- Try zooming out if you have a small screen

### Port already in use
```bash
# Frontend (Vite uses 5173):
# Kill process: lsof -ti:5173 | xargs kill (Mac/Linux)
# Or change port in vite.config.js

# Backend (Flask uses 5000):
# Kill process or change port in app.py
```

---

## 📝 Quick Reference: Flags

### Original Challenges
| # | Name | Flag |
|---|------|------|
| 1 | Odysseus | `homer` |
| 2 | Penelope | `infinityloop` |
| 3 | Telemachus | `catchmeifyoucan` |
| 4 | Athena | `zeropointcore` |
| 5 | Poseidon | `spintoera` |
| 6 | Zeus | `vitruvianmatrix` |
| 7 | Hermes | `thisflagisincorrect` |
| 8 | Calypso | `odysseyacrosstime` |
| 9 | Circe | `bruteforceme` |

### New Challenges
| # | Name | Type | Flag |
|---|------|------|------|
| 10 | Ares | General | `club` |
| 11 | Hades | General | `0504` |
| 12 | Apollo | General | `helios` |
| 13 | Hephaestus | Tech | `forgefire` |
| 14 | Artemis | Tech | `ehfdcagb` |

---

## 🎯 Next Steps

### For Testing
1. Visit each challenge page (1-14)
2. Try solving them (see [NEW_CHALLENGES.md](NEW_CHALLENGES.md) for solutions)
3. Test flag submission

### For Competition Day
1. Read [COMPETITION_DAY.md](COMPETITION_DAY.md)
2. Test on actual competition network
3. Print participant handouts
4. Prepare hint cards

### For Learning
1. Read [CHALLENGE_GUIDE.md](CHALLENGE_GUIDE.md) - Full solutions
2. Check [SETUP.md](SETUP.md) - Detailed setup
3. See [NEW_CHALLENGES.md](NEW_CHALLENGES.md) - New challenge details

---

## ✨ What's New?

### Fixed Issues
- ✅ **Starry Sky:** Now displays 120+ stars with golden HOMER constellation
- ✅ **Responsive Design:** Works on all screen sizes
- ✅ **Animations:** Improved performance and visual effects

### New Features
- 🆕 **5 NEW Challenges:** Mix of general knowledge and technical
- 🆕 **14 Total Challenges:** More variety and difficulty levels
- 🆕 **Better Documentation:** 2000+ lines of guides and solutions

---

## 💡 Tips

### For Participants
- Start with Challenge 1 (Odysseus) or Challenge 10 (Ares - easiest)
- Press F12 to open developer console (needed for some challenges)
- Look for visual clues: colors, animations, hover effects
- Read hints carefully - they contain important information

### For Organizers
- Run test_setup.py to verify everything works
- Keep solution guide handy for hints
- Monitor backend logs for submission issues
- Have CyberChef open (https://gchq.github.io/CyberChef/) for decoding help

---

## 📞 Support

Having issues? Check these resources:
1. [SETUP.md](SETUP.md) - Detailed setup guide
2. [CHALLENGE_GUIDE.md](CHALLENGE_GUIDE.md) - Complete solutions
3. [COMPETITION_DAY.md](COMPETITION_DAY.md) - Event procedures
4. [NEW_CHALLENGES.md](NEW_CHALLENGES.md) - New challenge details

---

**Time to first challenge:** ~2 minutes  
**Full setup time:** ~15 minutes  
**Perfect for:** CTF competitions, workshops, self-learning

**Ready? Start with:** `cd frontend && npm install && npm run dev` 🚀

