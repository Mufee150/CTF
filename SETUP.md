# 🚀 CTF Setup Guide - Step by Step

## Prerequisites

- **Node.js** v18 or higher ([Download](https://nodejs.org))
- **Python** 3.8 or higher ([Download](https://python.org))
- **Git** (optional, for version control)
- **Supabase Account** (free tier works fine)

---

## Part 1: Supabase Setup (Database)

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up / Log in
3. Click **"New Project"**
4. Fill in:
   - **Project Name:** `ctf-odyssey` (or any name)
   - **Database Password:** (save this!)
   - **Region:** Choose closest to you
5. Wait 2-3 minutes for project creation

### Step 2: Create Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **"New Query"**
3. Paste this SQL:

```sql
CREATE TABLE submissions (
  id BIGSERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  challenge_name TEXT NOT NULL,
  code TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Optional: Create index for faster queries
CREATE INDEX idx_username ON submissions(username);
CREATE INDEX idx_challenge ON submissions(challenge_name);
CREATE INDEX idx_timestamp ON submissions(timestamp DESC);
```

4. Click **"Run"**
5. ✅ Table created!

### Step 3: Get API Credentials

1. Go to **Project Settings** (gear icon)
2. Click **API** in sidebar
3. Copy these values (you'll need them later):
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Service Role Key** (anon key works too, but service role is safer)

---

## Part 2: Backend Setup (Flask)

### Step 1: Navigate to Backend Folder

```bash
cd backend
```

### Step 2: Create Virtual Environment (Recommended)

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies

```bash
pip install -r requirements.txt
```

This installs:
- Flask
- python-dotenv
- supabase-py

### Step 4: Create Environment File

Create a file called `.env` in the **root directory** (parent of backend/):

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Challenge Hashes (copy from .env.example)
CHALLENGE_HASHES=odysseus:2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f,penelope:04d75cde9beeb4d14f7f4e95dab88b6f9398f71eb837000c2cffc1600418a1e0,telemachus:826457e1f6810cda018196cd7631b6a5e7a03644a91fbc599c7613ab9008f603,athena:f0483107f8792b3ecb4a07279debf58aa2c271d26f629c6495dc5f046b0555a0,poseidon:1e2c75f343da0f688fc45b6e5e11d8992406811172f9bc4af36f07bacbaccf56,zeus:5c7906a3b838872ecf7c82d2b0910e56034f95081333d8e2a07a7330f4e60dc1,hermes:48398245bb0dcfead2309ac3272f399c26fd8964b8919e049001ffc78159bc28,calypso:0d1af12ee692bc4bac27e99603f21771dd617d9b3d5f4748e89abf1d46243dfb,circe:6144545e67abcfeb8ce053127fc5189ea9f094454ec54ec9dd7bf1774d74d62d

# Challenge Codes
CHALLENGE_CODES=odysseus:H,penelope:g,telemachus:@,athena:%,poseidon:Z,zeus:$,hermes:&,calypso:Q,circe:*
```

**Important:** Replace `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` with your actual values!

### Step 5: Run Backend Server

```bash
python app.py
```

You should see:
```
✅ Supabase client initialized successfully
📋 Loaded 9 challenge hashes
📋 Loaded 9 challenge codes
 * Running on http://127.0.0.1:5000
```

✅ Backend is running! Keep this terminal open.

---

## Part 3: Frontend Setup (React)

### Step 1: Open New Terminal

Keep backend running, open a **new terminal window**

### Step 2: Navigate to Frontend

```bash
cd frontend
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install:
- React
- React Router
- Vite
- TailwindCSS
- crypto-js (for SHA256)

### Step 4: Create Frontend Environment File

Create `frontend/.env`:

```env
VITE_API_URL=http://127.0.0.1:5000
```

### Step 5: Run Development Server

```bash
npm run dev
```

You should see:
```
VITE ready in 500ms

➜  Local:   http://localhost:5173/
```

✅ Frontend is running!

---

## Part 4: Generate Morse Code Audio

### Step 1: Create Audio Directory

```bash
mkdir -p frontend/public/audio
```

### Step 2: Generate Audio File

```bash
cd backend
python generate_morse_audio.py
```

This creates `frontend/public/audio/circe.wav` with morse code for "bruteforceme"

✅ Challenge 9 audio ready!

---

## Part 5: Test The Application

### Step 1: Open Browser

Navigate to: **http://localhost:5173**

### Step 2: Set Username

Enter any username on the landing page

### Step 3: Test Challenge 1

1. Click "Start Challenge"
2. Hover over the yellow stars
3. They spell: **H O M E R**
4. Enter: `homer`
5. Should navigate to Challenge 2

### Step 4: Verify Backend

Check backend terminal - you should see:
```
✅ Submission successful: test -> odysseus (H)
```

### Step 5: Check Database

1. Go to Supabase dashboard
2. **Table Editor** → `submissions`
3. You should see your submission!

---

## Part 6: Pre-Competition Checklist

**1 Week Before:**
- [ ] Test all 9 challenges
- [ ] Verify database logging works
- [ ] Test on different browsers (Chrome, Firefox, Edge)
- [ ] Test on mobile device
- [ ] Backup `.env` file
- [ ] Print solution sheet

**1 Day Before:**
- [ ] Deploy to production (optional)
- [ ] Test production URL
- [ ] Clear test data from database
- [ ] Prepare hints document
- [ ] Test CORS if deployed

**Competition Day:**
- [ ] Start both servers 1 hour early
- [ ] Test end-to-end flow
- [ ] Monitor Supabase dashboard
- [ ] Have solution sheet ready
- [ ] Prepare to give subtle hints only

---

## Troubleshooting

### Frontend won't start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend CORS errors
- Check `FRONTEND_URL` in `.env` matches your dev server
- Restart backend after changing `.env`

### Challenges not validating
- Verify hashes in `.env` match challenge pages
- Check browser console for errors
- Ensure backend is running on port 5000

### Database not storing submissions
- Check Supabase credentials in `.env`
- Verify table was created correctly
- Check backend logs for errors

### Audio not playing
- Verify file exists: `frontend/public/audio/circe.wav`
- Run audio generator script
- Check browser console for 404 errors

---

## Production Deployment

### Option 1: Render (Backend) + Vercel (Frontend)

**Backend (Render):**
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repo
4. Add environment variables
5. Deploy

**Frontend (Vercel):**
1. Push code to GitHub
2. Import project on Vercel
3. Set `VITE_API_URL` to your Render URL
4. Deploy

### Option 2: Single Server

Run both on same machine using nginx as reverse proxy

---

## Support Commands

### Generate New Hashes
```bash
python backend/generate_hashes.py
```

### Test API Endpoint
```bash
curl -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{"username":"test","challenge_name":"odysseus","client_hash":"2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f"}'
```

### View Database
```sql
SELECT * FROM submissions ORDER BY timestamp DESC LIMIT 10;
```

---

## Security Notes

- Never commit `.env` to version control
- Use `.gitignore` to exclude sensitive files
- Service role key has full database access
- Consider rate limiting for production
- SHA256 client-side prevents easy brute force

---

## Getting Help

- Check browser console (F12) for errors
- Check backend terminal for logs
- Review `CHALLENGE_GUIDE.md` for solutions
- Test with known working flag: `homer`

---

**Good luck with your CTF competition! 🎯🏆**
