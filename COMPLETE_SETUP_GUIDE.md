# 🎯 Complete CTF Setup Guide

**Last Updated:** February 14, 2026  
**Total Challenges:** 14 (9 original + 5 new)

---

## 📋 Table of Contents

1. [Quick Start (No Database)](#quick-start-no-database)
2. [Full Setup with Supabase](#full-setup-with-supabase)
3. [Running the CTF](#running-the-ctf)
4. [Testing All Challenges](#testing-all-challenges)
5. [Troubleshooting](#troubleshooting)

---

## 🚀  Quick Start (No Database)

**Time: 2 minutes** | Works immediately without Supabase

### Step 1: Install Dependencies

```bash
cd frontend
npm install
```

### Step 2: Start Frontend

```bash
npm run dev
```

✅ **Open Browser:** http://localhost:5173 (or the port shown in terminal)

**What Works:**
- ✅ All 14 challenges load and display
- ✅ Visual effects, animations, hover interactions
- ✅ Flag validation (local SHA256 check)
- ⚠️ Submissions show "Database not available" (expected)

---

## 🗄️ Full Setup with Supabase

**Time: 15 minutes** | Required for saving submissions

### Step 1: Create Supabase Project

1. **Go to** https://supabase.com
2. **Sign up/Login** with GitHub or Email
3. **Click** "New Project"
4. **Fill in:**
   - **Project Name:** `ctf-odyssey` (or your choice)
   - **Database Password:** Create a strong password (save this!)
   - **Region:** Choose closest to you
5. **Click** "Create new project"
6. **Wait** 2-3 minutes for database provisioning

### Step 2: Create Database Table

1. **In Supabase Dashboard**, click **"SQL Editor"** (left sidebar)
2. **Click** "New query"
3. **Copy and paste** this SQL:

```sql
-- Create submissions table
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL,
  challenge_name TEXT NOT NULL,
  code TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_submissions_username ON submissions(username);
CREATE INDEX idx_submissions_challenge ON submissions(challenge_name);
CREATE INDEX idx_submissions_timestamp ON submissions(timestamp DESC);

-- Enable Row Level Security
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for testing)
CREATE POLICY "Allow all operations" ON submissions 
  FOR ALL 
  USING (true) 
  WITH CHECK (true);
```

4. **Click** "Run" (or press Ctrl+Enter)
5. **Verify** you see "Success. No rows returned"

### Step 3: Get Supabase Credentials

1. **Click** "Settings" (gear icon, bottom left)
2. **Click** "API" in the left menu
3. **Copy these values:**

   - **Project URL:** `https://xxxxx.supabase.co`
   - **Service Role Key:** `eyJhbGc...` (long string under "service_role")

⚠️ **Important:** Use the `service_role` key, NOT the `anon` key!

### Step 4: Configure Backend

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` file** (use any text editor):
   ```bash
   notepad .env
   ```

4. **Update these lines:**
   ```env
   SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

5. **Save and close** the file

### Step 5: Install Backend Dependencies

```bash
# Make sure you're in the backend folder
cd backend

# Install Python packages
pip install -r requirements.txt
```

### Step 6: Test Backend

```bash
python app.py
```

✅ **You should see:**
```
 * Running on http://127.0.0.1:5000
 * Running on http://your-ip:5000
```

⚠️ **If you see errors about Supabase:**
- Check your `.env` file has correct URL and key
- Verify the key is `service_role`, not `anon`
- Ensure no extra spaces in `.env` values

---

## 🎮 Running the CTF

### Option 1: Frontend Only (Testing)

```bash
cd frontend
npm run dev
```

- ✅ View all challenges
- ✅ Test visual elements
- ⚠️ Can't save submissions

### Option 2: Full Setup (Frontend + Backend)

**Terminal 1: Backend**
```bash
cd backend
python app.py
```

**Terminal 2: Frontend** (open a new terminal)
```bash
cd frontend
npm run dev
```

✅ **Everything works!**

---

## 🧪 Testing All Challenges

### Test Each Challenge

Visit these URLs after starting the frontend:

#### Original 9 Challenges
```bash
http://localhost:5173/challenge/1   # Odysseus - Starry constellation (hover golden stars)
http://localhost:5173/challenge/2   # Penelope - Infinity loop CSS animation
http://localhost:5173/challenge/3   # Telemachus - Input validation timing
http://localhost:5173/challenge/4   # Athena - CSS binary encoding
http://localhost:5173/challenge/5   # Poseidon - Invisible text selection
http://localhost:5173/challenge/6   # Zeus - Coordinates + obfuscation
http://localhost:5173/challenge/7   # Hermes - Konami code (↑↑↓↓←→←→BA)
http://localhost:5173/challenge/8   # Calypso - Base64 decoding
http://localhost:5173/challenge/9   # Circe - Morse code audio
```

#### New 5 Challenges
```bash
http://localhost:5173/challenge/10  # Ares - Mythology riddle (Heracles' weapon)
http://localhost:5173/challenge/11  # Hades - Math puzzle (Roman numerals)
http://localhost:5173/challenge/12  # Apollo - Word puzzle (lyre strings)
http://localhost:5173/challenge/13  # Hephaestus - Browser console (F12)
http://localhost:5173/challenge/14  # Artemis - Moon phase cipher
```

### Quick Test Flags

| Challenge | Flag | How to Find |
|-----------|------|-------------|
| 1. Odysseus | `homer` | Hover over golden stars |
| 2. Penelope | `infinityloop` | Inspect CSS animation |
| 3. Telemachus | `catchmeifyoucan` | Try submitting (validation message) |
| 4. Athena | `zeropointcore` | Decode binary in CSS |
| 5. Poseidon | `spintoera` | Select invisible text |
| 6. Zeus | `vitruvianmatrix` | Follow coordinates |
| 7. Hermes | `thisflagisincorrect` | Konami code + inspect |
| 8. Calypso | `odysseyacrosstime` | Decode Base64 |
| 9. Circe | `bruteforceme` | Listen to morse audio |
| 10. Ares | `club` | Answer riddle (Heracles) |
| 11. Hades | `0504` | 7×8×9 = 504 |
| 12. Apollo | `helios` | First letters: H-E-L-I-O-S |
| 13. Hephaestus | `forgefire` | Console hex decode |
| 14. Artemis | `ehfdcagb` | Moon phase numbers to letters |

---

## 🐛 Troubleshooting

### Frontend Issues

#### Stars not showing on Odysseus challenge
```bash
# Hard refresh browser
# Windows: Ctrl + Shift + R or Ctrl + F5
# Mac: Cmd + Shift + R

# Or clear browser cache:
# Chrome: Settings > Privacy > Clear browsing data > Cached images
```

#### Port 5173 already in use
```bash
# Vite will automatically use next port (5174, 5175, etc.)
# Check terminal output for actual port number
```

#### npm install fails
```bash
# Delete node_modules and try again
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues

#### "ModuleNotFoundError: No module named 'flask'"
```bash
cd backend
pip install -r requirements.txt
```

#### "Database not available" error
- ✅ **Normal if no Supabase** - challenges still work for testing
- ⚠️ **If you have Supabase:** Check `.env` file configuration

#### Supabase connection fails
```bash
# Check your .env file:
cd backend
cat .env  # Mac/Linux
type .env  # Windows

# Verify:
# 1. SUPABASE_URL starts with https://
# 2. SUPABASE_SERVICE_KEY is the long service_role key
# 3. No extra spaces or quotes around values
```

#### "Access denied" from Supabase
```bash
# Make sure you're using service_role key, not anon key
# In Supabase: Settings > API > service_role (NOT anon/public)
```

### Browser Issues

#### Challenge not loading properly
1. Open DevTools (F12)
2. Check Console tab for errors
3. Hard refresh (Ctrl+Shift+R)
4. Try different browser

#### Hover not working on stars
- Make sure you're hovering over the **golden/orange glowing stars** (not white ones)
- The golden stars are larger and in the upper-middle area
- Look for 5 bright stars spelling H-O-M-E-R

---

## 📊 Verify Setup

Run this checklist:

```bash
# Backend Verification
cd backend
python test_setup.py

# Expected output:
# ✅ Flask installed
# ✅ Crypto-js installed  
# ✅ All challenge files exist
# ✅ All hashes valid
# ⚠️ .env file check (if no Supabase)
```

---

## 🎯 Competition Day Checklist

### 1 Day Before
- [ ] Test all 14 challenges work
- [ ] Verify Supabase database is accessible
- [ ] Check backend can save submissions
- [ ] Print participant handouts
- [ ] Prepare hint cards

### Day Of
- [ ] Start backend server
- [ ] Start frontend server
- [ ] Test from participant's perspective
- [ ] Have solution guide ready
- [ ] Monitor backend logs for issues

---

## 📁 Project Structure

```
CTF/
├── backend/
│   ├── app.py                      # Flask API server
│   ├── requirements.txt            # Python dependencies
│   ├── .env.example               # Environment template
│   ├── .env                       # Your config (DO NOT COMMIT)
│   ├── generate_hashes.py         # Generate SHA256 hashes
│   └── test_setup.py              # Verify installation
├── frontend/
│   ├── src/
│   │   ├── pages/                 # 14 challenge pages
│   │   ├── components/            # Reusable components
│   │   └── App.jsx               # Route configuration
│   ├── package.json              # Node dependencies
│   └── vite.config.js           # Vite configuration
├── COMPLETE_SETUP_GUIDE.md       # This file
├── CHALLENGE_GUIDE.md            # Detailed solutions
├── NEW_CHALLENGES.md             # New challenges documentation
└── README.md                     # Project overview
```

---

## 🔒 Security Notes

### For Testing
- Using `service_role` key is fine
- RLS policy allows all operations

### For Production
1. **Change RLS Policy:**
   ```sql
   DROP POLICY "Allow all operations" ON submissions;
   
   CREATE POLICY "Users can insert their own submissions" 
     ON submissions FOR INSERT 
     WITH CHECK (auth.uid() IS NOT NULL);
   ```

2. **Use `anon` key** in frontend instead of service_role
3. **Enable authentication** (Supabase Auth)
4. **Add rate limiting** on API endpoints

---

## 📞 Quick Commands Reference

### Start Everything
```bash
# Terminal 1 - Backend
cd backend && python app.py

# Terminal 2 - Frontend
cd frontend && npm run dev
```

### Stop Everything
- Press `Ctrl + C` in each terminal

### Restart Frontend (after code changes)
- Vite auto-reloads, just save the file

### Restart Backend (after code changes)
- Press `Ctrl + C`
- Run `python app.py` again

### Clear Browser Cache
- **Chrome:** Ctrl+Shift+Delete
- **Firefox:** Ctrl+Shift+Delete
- **Hard Refresh:** Ctrl+Shift+R

---

## ✅ Success Criteria

You've set up correctly when:

1. ✅ Frontend loads at http://localhost:5173
2. ✅ You see 14 challenges in navigation
3. ✅ Odysseus challenge shows golden glowing stars
4. ✅ Hovering golden stars reveals letters H-O-M-E-R
5. ✅ Submitting correct flag (`homer`) works
6. ✅ Backend saves submission to Supabase
7. ✅ No console errors in browser DevTools

---

## 📚 Additional Resources

- **Challenge Solutions:** See [CHALLENGE_GUIDE.md](CHALLENGE_GUIDE.md)
- **New Challenges Details:** See [NEW_CHALLENGES.md](NEW_CHALLENGES.md)
- **Competition Procedures:** See [COMPETITION_DAY.md](COMPETITION_DAY.md)
- **Quick Reference:** See [QUICK_START.md](QUICK_START.md)

---

**Need Help?**
- Check browser console (F12) for errors
- Check backend terminal for Python errors
- Verify `.env` file configuration
- Try hard refresh (Ctrl+Shift+R)
- Test in different browser

**Ready to start?** → Run `cd frontend && npm run dev` 🚀
