# 🚀 EnigmaX Vercel Deployment Guide

Complete guide to deploying your EnigmaX competition platform to production.

---

## 📋 Prerequisites

Before deploying, ensure you have:

1. ✅ **GitHub Account** - To store your code
2. ✅ **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free tier works)
3. ✅ **Supabase Project** - Database for user tracking at [supabase.com](https://supabase.com)
4. ✅ **Render Account** (or Railway) - For backend deployment at [render.com](https://render.com)

---

## 🗄️ Part 1: Setup Supabase Database

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click **"New Project"**
3. Fill in:
   - **Name:** EnigmaX
   - **Database Password:** (save this securely)
   - **Region:** Choose closest to your users
4. Click **"Create new project"** and wait 2-3 minutes

### Step 2: Run Database Schema

1. In your Supabase project, click **"SQL Editor"** in the left sidebar
2. Open `backend/supabase_schema.sql` from your project
3. Copy the entire file content
4. Paste it into the SQL Editor
5. Click **"Run"** to create all tables, functions, and views
6. You should see: "Success. No rows returned"

### Step 3: Get Connection Credentials

1. Click **"Settings"** (gear icon) in left sidebar
2. Go to **"API"** section
3. Copy these values (you'll need them later):
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (under "Project API keys")
   - **service_role key** (under "Project API keys" - keep this secret!)

---

## 🖥️ Part 2: Deploy Backend (Flask)

### Option A: Deploy to Render (Recommended)

1. **Push your code to GitHub:**
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Create Render Web Service:**
   - Go to [render.com](https://render.com)
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub repository
   - Configure:
     - **Name:** enigmax-backend
     - **Region:** Same as Supabase or close to users
     - **Branch:** main
     - **Root Directory:** backend
     - **Runtime:** Python 3
     - **Build Command:** `pip install -r requirements.txt`
     - **Start Command:** `gunicorn app:app` (you'll need to add gunicorn to requirements.txt)
   
3. **Add Environment Variables:**
   Click **"Environment"** tab and add:
   
   ```
   SUPABASE_URL=<your-supabase-project-url>
   SUPABASE_SERVICE_KEY=<your-supabase-service-role-key>
   FLASK_ENV=production
   PORT=10000
   FRONTEND_URL=<will-add-after-vercel-deployment>
   ```

   Then add all your challenge hashes and codes:
   ```
   CHALLENGE_HASHES=odysseus:<hash>,penelope:<hash>,telemachus:<hash>,...
   CHALLENGE_CODES=odysseus:176,penelope:47,...
   ```

4. **Update requirements.txt:**
   Add to `backend/requirements.txt`:
   ```
   gunicorn==21.2.0
   ```

5. Click **"Create Web Service"**
6. Wait for deployment (takes 2-3 minutes)
7. Copy your backend URL (looks like: `https://enigmax-backend.onrender.com`)

### Option B: Deploy to Railway

1. Visit [railway.app](https://railway.app) and sign up
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. Add environment variables (same as Render above)
5. Railway will auto-detect Python and deploy
6. Copy your backend URL from the deployment

---

## 🎨 Part 3: Deploy Frontend (Vercel)

### Step 1: Prepare Frontend for Production

1. **Update API URL configuration:**
   
   Create/update `frontend/.env.production`:
   ```env
   VITE_API_URL=https://enigmax-backend.onrender.com
   ```
   (Replace with your actual backend URL from Part 2)

2. **Test build locally:**
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```
   Open `http://localhost:4173` and verify it works

### Step 2: Deploy to Vercel

1. **Option A - Using Vercel CLI (Recommended):**
   ```bash
   npm install -g vercel
   cd frontend
   vercel login
   vercel
   ```
   
   Follow prompts:
   - **Set up and deploy?** Yes
   - **Which scope?** Your account
   - **Link to existing project?** No
   - **Project name?** enigmax (or your choice)
   - **In which directory is your code?** ./
   - **Want to override settings?** No
   
   After deployment, Vercel will show your URL.

2. **Option B - Using Vercel Dashboard:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click **"New Project"**
   - Import your GitHub repository
   - Configure:
     - **Framework Preset:** Vite
     - **Root Directory:** frontend
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Add Environment Variable:
     - Key: `VITE_API_URL`
     - Value: `https://enigmax-backend.onrender.com` (your backend URL)
   - Click **"Deploy"**

3. **Copy your frontend URL** (looks like: `https://enigmax.vercel.app`)

### Step 3: Update Backend CORS

1. Go back to your backend deployment (Render/Railway)
2. Update the `FRONTEND_URL` environment variable:
   ```
   FRONTEND_URL=https://enigmax.vercel.app
   ```
3. Redeploy the backend (Render auto-deploys, Railway may need manual trigger)

---

## 🔧 Part 4: Verification & Testing

### Test Complete Flow:

1. **Visit your Vercel URL** (e.g., `https://enigmax.vercel.app`)
2. You should see the EnigmaX landing page with registration form
3. **Register a test user:**
   - Enter name, email, phone
   - Submit form
4. **Verify in Supabase:**
   - Go to Supabase Dashboard → Table Editor → `users`
   - You should see your test registration
5. **Complete first challenge:**
   - Try the Odysseus challenge
   - Submit correct answer
6. **Check Supabase `submissions` table:**
   - Should show your submission with correct `user_id` link
7. **Complete all challenges and check leaderboard**

### Check Backend Logs:

- **Render:** Dashboard → Logs tab
- **Railway:** Project → Deployments → View Logs
- Look for successful registration and submission logs

---

## 🎯 Part 5: Competition Management

### View Participants Progress:

Use Supabase Dashboard to query:

```sql
-- View all participants and their progress
SELECT * FROM participant_progress 
ORDER BY total_challenges_completed DESC, started_at ASC;

-- View current leaderboard (finished users)
SELECT * FROM leaderboard;

-- Get detailed submissions for a user
SELECT * FROM submissions WHERE user_id = '<user-id>' ORDER BY timestamp;
```

### Export Data:

**Export all participants:**
```sql
SELECT 
  name, 
  email, 
  phone, 
  total_challenges_completed, 
  started_at, 
  completed_at,
  is_finished
FROM users 
ORDER BY completed_at ASC NULLS LAST;
```

Click **"Download as CSV"** in Supabase SQL Editor

---

## 🐛 Troubleshooting

### Issue: "Network error" on registration

**Solution:**
- Check backend is running: Visit `https://your-backend.onrender.com/`
- Should return: `{"message": "CTF Backend is running!", "status": "healthy"}`
- Verify `FRONTEND_URL` in backend matches your Vercel URL
- Check Render logs for CORS errors

### Issue: "Email already registered" but user can't continue

**Solution:**
- User should clear localStorage: F12 → Application → Local Storage → Clear
- Or provide a "Continue as existing user" flow (requires development)

### Issue: Challenges not submitting

**Solution:**
- Verify `CHALLENGE_HASHES` and `CHALLENGE_CODES` are set correctly in backend
- Check browser console (F12) for errors
- Verify backend `/api/submit` endpoint is working: Check Render/Railway logs

### Issue: Leaderboard not showing

**Solution:**
- Verify Supabase schema was applied correctly
- Check if `leaderboard` view exists in Supabase → Database → Views
- Users must complete all 15 challenges to appear on leaderboard

### Issue: Vercel build fails

**Solution:**
- Ensure all dependencies in `package.json`
- Check build logs in Vercel dashboard
- Verify `.env.production` has correct `VITE_API_URL`
- Try building locally first: `npm run build`

---

## 🔒 Security Checklist

Before sharing competition link:

- ✅ `SUPABASE_SERVICE_KEY` is set in backend (not `anon` key)
- ✅ Never commit `.env` files to Git
- ✅ Supabase Row Level Security (RLS) can be enabled for production
- ✅ Backend `FRONTEND_URL` restricts CORS to your domain only
- ✅ Test registration flow end-to-end
- ✅ Verify challenge hashes match answers

---

## 📱 Sharing with Students

Once deployed, share:

1. **Competition URL:** `https://enigmax.vercel.app`
2. **Instructions:**
   - Register with valid email (one entry per email)
   - Complete all 15 challenges in sequence
   - Time is tracked from registration to final challenge
   - Check leaderboard after completion
3. **Rules:**
   - Browser developer tools are allowed (F12)
   - Each challenge reveals the next when solved
   - Fastest accurate completion wins

---

## 🎉 Post-Competition

### View Final Results:

```sql
-- Top 10 fastest completions
SELECT name, email, 
  EXTRACT(EPOCH FROM (completed_at - started_at))/60 as minutes_taken
FROM users 
WHERE is_finished = true 
ORDER BY (completed_at - started_at) ASC 
LIMIT 10;
```

### Backup Data:

1. Go to Supabase Project Settings → Database → Backups
2. Download backup before deleting project
3. Export CSV from `users` and `submissions` tables

---

## 💰 Cost Estimates

- **Supabase:** Free tier (50,000 monthly active users)
- **Vercel:** Free tier (100GB bandwidth/month)
- **Render:** Free tier (750 hours/month, sleeps after 15 min inactivity)
- **Railway:** Free tier ($5 credit/month)

**For 100 concurrent students:** All services will likely stay within free tier limits.

**Note:** Render free tier "sleeps" after inactivity. First request may take 30-60 seconds to wake up. Consider paid tier ($7/month) for instant response during competition.

---

## 📞 Support

If you encounter issues:

1. Check this guide's troubleshooting section
2. Review backend logs (Render/Railway dashboard)
3. Check browser console (F12) for frontend errors
4. Verify Supabase tables exist and have correct schema
5. Test each component individually (backend health check, database queries, frontend build)

---

## 🚀 You're All Set!

Your EnigmaX competition platform is now live and ready for students! 

**Final checklist:**
- ✅ Frontend deployed to Vercel
- ✅ Backend deployed to Render/Railway
- ✅ Supabase database configured
- ✅ Registration flow tested
- ✅ Challenge submissions working
- ✅ Leaderboard displaying correctly
- ✅ Competition URL ready to share

**Good luck with your competition! 🎉**
