# ⚡ EnigmaX Quick Start Checklist

Follow these steps in order to get your competition platform running!

---

## ✅ Immediate Actions (Do This Now!)

### [ ] 1. Apply Database Schema (5 minutes)

**This is the most important step!**

1. Go to [supabase.com](https://supabase.com) and open your project
2. Click "SQL Editor" in the left sidebar
3. Open the file: `backend/supabase_schema.sql`
4. Copy ALL the contents
5. Paste into Supabase SQL Editor
6. Click "Run" button
7. Should see: "Success. No rows returned"

**Verify it worked:**
- Click "Table Editor" → You should see `users` and `submissions` tables
- Click "Database" → "Views" → You should see `leaderboard` and `participant_progress`

---

### [ ] 2. Restart Backend Server (1 minute)

Your backend needs to load the new endpoints:

```bash
# Stop the backend (Ctrl+C in the terminal)
# Then start it again:
cd backend
python app.py
```

You should see:
```
✅ Supabase client initialized successfully
🚀 Starting Flask server on port 5000
```

**Test it:** Visit `http://localhost:5000/` in browser
- Should show: `{"message": "EnigmaX Backend is running!", "status": "healthy"}`

---

### [ ] 3. Test Registration Flow (3 minutes)

Frontend should already be running on `http://localhost:5173`

1. **Open** `http://localhost:5173` in your browser
2. **See** the new EnigmaX landing page with registration form
3. **Register** with test data:
   - Name: Test User
   - Email: test@example.com  
   - Phone: 1234567890
4. **Submit** and you should be redirected to Odysseus challenge
5. **Check Supabase:**
   - Table Editor → `users` table
   - You should see your test user with `started_at` timestamp

---

### [ ] 4. Test Challenge Submission (2 minutes)

1. On the Odysseus challenge page, enter: **seaquest**
2. Submit the answer
3. You should see "Code: 176" and be redirected to Penelope
4. **Check Supabase:**
   - Table Editor → `submissions` - should have your submission
   - Table Editor → `users` - `total_challenges_completed` should be 1

**If this works, your system is fully operational!** ✅

---

## 🎯 Next Steps (After Testing)

### [ ] 5. Complete a Full Test Run

Answer all 15 challenges using this cheat sheet:

| # | Challenge | Answer |
|---|-----------|--------|
| 1 | Odysseus | seaquest |
| 2 | Penelope | thread |
| 3 | Telemachus | son |
| 4 | Athena | wisdom |
| 5 | Poseidon | trident |
| 6 | Circe | transform |
| 7 | Sirens | 6174 |
| 8 | Calypso | island |
| 9 | Hermes | speed |
| 10 | Hephaestus | forge |
| 11 | Apollo | helios |
| 12 | Artemis | ehfdcagb |
| 13 | Ares | club |
| 14 | Hades | 504 |
| 15 | Zeus | lightning |

After Zeus, you should see the Congratulations page with:
- Your completion time
- Leaderboard (you'll be #1!)

---

### [ ] 6. Deploy to Production

When ready to host for students:

**Read:** `VERCEL_DEPLOYMENT_GUIDE.md` (comprehensive guide)

**Quick steps:**
1. Deploy backend to Render (10 min)
2. Deploy frontend to Vercel (5 min)  
3. Update environment variables
4. Test production URL

**Total time:** 20-30 minutes

---

### [ ] 7. Share with Students

Once deployed, share your Vercel URL:
- Example: `https://enigmax.vercel.app`

**Tell students:**
- Register with real name, email, phone
- Complete all 15 challenges
- Time is tracked automatically
- Top finishers appear on leaderboard

---

## 🚨 Troubleshooting

### Problem: Registration form doesn't appear

**Quick fix:**
- Clear browser cache: Ctrl+Shift+Delete
- Clear localStorage: F12 → Application → Local Storage → Clear All
- Refresh page

### Problem: "Database not available" error

**Quick fix:**
- Check `.env` file has `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`
- Restart backend: Ctrl+C then `python app.py`
- Verify Supabase project is active (not paused)

### Problem: Challenge won't submit

**Quick fix:**
- Check browser console (F12) for errors
- Verify backend is running on port 5000
- Try registering again with a new email

### Problem: Backend won't start

**Quick fix:**
```bash
# Reinstall dependencies
cd backend
pip install -r requirements.txt

# Check .env exists
ls .env  # Should exist

# Try starting again
python app.py
```

---

## 📊 Monitor During Competition

Use Supabase SQL Editor to run these queries:

**See all participants:**
```sql
SELECT name, email, total_challenges_completed, started_at 
FROM users 
ORDER BY started_at;
```

**See current leaders:**
```sql
SELECT * FROM leaderboard;
```

**Export results:**
```sql
SELECT * FROM participant_progress;
```
Click "Download as CSV"

---

## 📚 Documentation Reference

- **TRANSFORMATION_SUMMARY.md** - What changed and why
- **SETUP_GUIDE.md** - Detailed local development setup  
- **VERCEL_DEPLOYMENT_GUIDE.md** - Complete production deployment
- **README.md** - Project overview

---

## ✅ Current Status Checklist

- [x] Code transformed from CTF to EnigmaX ✅
- [x] Registration system created ✅
- [x] Database schema designed ✅
- [x] Time tracking implemented ✅
- [x] Leaderboard built ✅
- [x] Documentation complete ✅
- [ ] **Database schema applied** ⬅️ DO THIS NEXT
- [ ] Test registration locally
- [ ] Test full challenge flow
- [ ] Deploy to production
- [ ] Share with students

---

## 🎉 You're Almost There!

Just complete items 1-4 above (takes 10 minutes total) and you'll have a fully functioning competition platform!

**Start with Step 1: Apply Database Schema** ⬆️

Good luck! 🚀
