# 📋 Competition Day Checklist - February 18, 2026

## 🌅 Morning Setup (2 hours before)

### Environment Setup
- [ ] Turn on computer and test internet connection
- [ ] Close all unnecessary applications
- [ ] Clear browser cache and cookies
- [ ] Disable browser extensions (except DevTools)
- [ ] Set screen brightness for visibility

### Files & Backups
- [ ] Verify `.env` file exists with correct credentials
- [ ] Backup `.env` to separate location
- [ ] Have printed copy of SOLUTIONS.md
- [ ] Have SETUP.md open in browser tab
- [ ] Bookmark Supabase dashboard

---

## 🔧 Technical Setup (1 hour before)

### Backend
```bash
cd backend
# Activate virtual environment (if using)
source venv/bin/activate  # Mac/Linux
# OR
venv\Scripts\activate  # Windows

# Start backend
python app.py
```

**Verify you see:**
```
✅ Supabase client initialized successfully
📋 Loaded 9 challenge hashes
📋 Loaded 9 challenge codes
 * Running on http://127.0.0.1:5000
```

- [ ] Backend running on port 5000
- [ ] No error messages in terminal
- [ ] Supabase connection successful

### Frontend
```bash
cd frontend
npm run dev
```

**Verify you see:**
```
VITE ready in 500ms
➜  Local:   http://localhost:5173/
```

- [ ] Frontend running on port 5173
- [ ] No compilation errors
- [ ] Can access landing page

### Test Access
- [ ] Navigate to `http://localhost:5173`
- [ ] Landing page loads correctly
- [ ] Enter test username: "testuser"
- [ ] Click "Start Challenge"
- [ ] Challenge 1 (Odysseus) loads with starry sky
- [ ] Enter `homer` and press submit
- [ ] Redirects to Challenge 2
- [ ] Check backend terminal for submission log
- [ ] Check Supabase for test submission

### Clear Test Data
```sql
-- Run in Supabase SQL Editor
DELETE FROM submissions WHERE username = 'testuser';
```

- [ ] Test submissions cleared from database
- [ ] Database ready for competition

---

## 🎮 Pre-Competition (30 minutes before)

### Prepare Materials
- [ ] Have challenge URLs ready to share:
  - Landing: `http://localhost:5173`
  - Challenge 1: `http://localhost:5173/challenge/1`
  - (or use numeric routes `/challenge/1` through `/challenge/9`)

### Monitor Dashboard
- [ ] Open Supabase dashboard in browser
- [ ] Navigate to Table Editor → `submissions`
- [ ] Set to auto-refresh (if available)
- [ ] Open backend terminal to watch logs

### Participant Instructions
Prepare to announce:
```
Welcome to Odyssey of Time CTF!

📍 URL: http://localhost:5173 
   (OR your deployed URL)

✅ Rules:
1. Enter your real name/username
2. Solve 9 challenges in sequence
3. Use browser DevTools (F12)
4. No sharing answers!
5. Ask for hints if stuck (subtle only)

🎯 Goal: Complete all 9 challenges
🏆 Prize: First to finish wins!

Good luck! 🚀
```

- [ ] Write URL on whiteboard/screen
- [ ] Prepare hint cards (optional)

---

## 🏁 During Competition

### Active Monitoring

**Watch backend terminal for:**
```
✅ Submission successful: username -> challenge_name (code)
❌ Errors or failed submissions
```

**Watch Supabase dashboard:**
- Who's progressing fastest
- Which challenges cause bottlenecks
- Any suspicious activity

### Common Issues & Fixes

**"Incorrect password" but answer is right:**
- Check for typos (trailing spaces)
- Verify case sensitivity (all lowercase)
- Check hash matches in `.env`

**Page not loading:**
- Check if both servers running
- Verify URL is correct
- Check CORS settings

**Can't submit:**
- Check browser console (F12)
- Verify backend API is accessible
- Check network requests

### Hints to Give (If Asked)

**Challenge 1 (Starry Sky):**
- "Look up at the stars..."
- "What happens when you hover?"
- "What pattern do the bright stars make?"

**Challenge 2 (Infinity Loop):**
- "Inspect the CSS animations..."
- "What goes on forever?"
- "Check the DOM attributes..."

**Challenge 3 (Input Validation):**
- "Type and watch what happens..."
- "Green means correct..."
- "How long is the password?"

**Challenge 4 (CSS Binary):**
- "Hex colors can encode information..."
- "Try converting hex to binary..."
- "ASCII characters are 8 bits..."

**Challenge 5 (Invisible CSS):**
- "Try selecting all text..."
- "What's hidden on a black background?"
- "Check the CSS for invisible elements..."

**Challenge 6 (Coordinates):**
- "Look for numbers in the page..."
- "Google those coordinates..."
- "Type the location name..."

**Challenge 7 (Konami Code):**
- "Up, up, down, down..."
- "Classic video game cheat code..."
- "Check the invisible div..."

**Challenge 8 (Base64):**
- "Find hidden spans in the DOM..."
- "Decode Base64 strings..."
- "Filter out the decoys..."

**Challenge 9 (Morse Code):**
- "Listen to the audio..."
- "Dots and dashes..."
- "Morse code decoder online..."

---

## 📊 Judging & Scoring

### Leaderboard Query
```sql
SELECT 
  username,
  COUNT(*) as completed,
  STRING_AGG(code, '' ORDER BY timestamp) as codes,
  MIN(timestamp) as started,
  MAX(timestamp) as finished,
  EXTRACT(EPOCH FROM (MAX(timestamp) - MIN(timestamp)))/60 as minutes
FROM submissions
GROUP BY username
ORDER BY COUNT(*) DESC, MAX(timestamp) ASC;
```

**Criteria:**
1. Most challenges completed (9 max)
2. Fastest completion time
3. First to collect all codes: `Hg@%Z$&Q*`

### Winner Announcement
- [ ] Run leaderboard query
- [ ] Verify winner completed all 9
- [ ] Check timestamps for tie-breaker
- [ ] Announce winner!

---

## 🎉 Post-Competition

### Share Solutions
- [ ] Show CHALLENGE_GUIDE.md on screen
- [ ] Walk through each technique
- [ ] Explain hiding methods
- [ ] Answer questions

### Collect Feedback
- [ ] Ask participants about difficulty
- [ ] Note which challenges were too easy/hard
- [ ] Gather improvement suggestions

### Export Data
```sql
-- Export all submissions
SELECT * FROM submissions 
ORDER BY timestamp;
```

- [ ] Download submission data (CSV)
- [ ] Save for records
- [ ] Clear database for next time

### Shutdown
- [ ] Stop frontend (Ctrl+C)
- [ ] Stop backend (Ctrl+C)
- [ ] Deactivate virtual environment
- [ ] Backup any logs

---

## 🚨 Emergency Procedures

### Server Crashes
1. Check error messages in terminal
2. Restart backend: `python app.py`
3. Restart frontend: `npm run dev`
4. Announce brief pause to participants

### Database Issues
1. Check Supabase dashboard status
2. Verify API keys in `.env`
3. Test with curl command
4. Fallback: manual tracking via shared doc

### Mass Confusion
1. Pause competition
2. Re-explain current challenge
3. Give broader hint
4. Resume with extended time

---

## 📞 Quick Reference

### Ports
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- Supabase: Check dashboard

### Commands
```bash
# Restart backend
cd backend && python app.py

# Restart frontend  
cd frontend && npm run dev

# Generate hashes
python backend/generate_hashes.py

# Test API
curl -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{"username":"test","challenge_name":"odysseus","client_hash":"2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f"}'
```

### All Flags (Quick Reference)
1. `homer`
2. `infinityloop`
3. `catchmeifyoucan`
4. `zeropointcore`
5. `spintoera`
6. `vitruvianmatrix`
7. `thisflagisincorrect`
8. `odysseyacrosstime`
9. `bruteforceme`

---

## ✅ Final Check (10 minutes before)

- [ ] Both servers running
- [ ] Test submission works
- [ ] Database cleared of test data
- [ ] Supabase dashboard open
- [ ] Solution sheet printed
- [ ] Whiteboard has URL
- [ ] Participants ready
- [ ] Timer ready

---

**You're ready! Good luck with your competition! 🎯🏆✨**

**Competition Date:** Wednesday, February 18, 2026  
**Start Time:** _____________  
**Estimated Duration:** 1-2 hours  
**Expected Winner:** First to complete all 9!
