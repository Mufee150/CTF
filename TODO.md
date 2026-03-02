# ✅ Pre-Competition TODO List

**Competition Date: Wednesday, February 18, 2026**  
**Days Remaining: 4 days**

---

## 📋 Saturday-Sunday (Setup & Testing)

### Environment Setup
- [ ] Read [GET_STARTED.md](GET_STARTED.md) (5 minutes)
- [ ] Create Supabase account at [supabase.com](https://supabase.com)
- [ ] Create new Supabase project
- [ ] Run SQL schema from `backend/supabase_schema.sql`
- [ ] Copy project URL and Service Key
- [ ] Create `.env` file from `.env.example` template
- [ ] Add Supabase credentials to `.env`
- [ ] Run `python backend/test_setup.py` to validate

### Generate Assets
- [ ] Install Python dependencies: `cd backend && pip install -r requirements.txt`
- [ ] Run `python backend/generate_morse_audio.py`
- [ ] Verify `frontend/public/audio/circe.wav` exists
- [ ] Test audio plays correctly

### Install & Start Servers
- [ ] Install frontend dependencies: `cd frontend && npm install`
- [ ] Start backend: `cd backend && python app.py`
- [ ] Verify: "✅ Loaded 9 challenge hashes" appears
- [ ] Start frontend: `cd frontend && npm run dev`
- [ ] Open browser to `http://localhost:5173`
- [ ] Verify landing page loads correctly

---

## 🧪 Sunday-Monday (Testing All Challenges)

### Test Each Challenge Manually

- [ ] **Landing Page**
  - [ ] Enter username: "yourname"
  - [ ] Username saves to localStorage
  - [ ] "Start Challenge" button works

- [ ] **Challenge 1: Odysseus** (flag: `homer`)
  - [ ] Starry sky background loads
  - [ ] Yellow stars are visible
  - [ ] Hovering shows letters H-O-M-E-R
  - [ ] Entering "homer" redirects to Challenge 2
  - [ ] Check backend logs for submission
  - [ ] Check Supabase table for entry

- [ ] **Challenge 2: Penelope** (flag: `infinityloop`)
  - [ ] Spinner visible in top-right
  - [ ] Inspect CSS shows "infiniteRotate"
  - [ ] DOM has data-password attribute
  - [ ] Entering "infinityloop" advances

- [ ] **Challenge 3: Telemachus** (flag: `catchmeifyoucan`)
  - [ ] Input shows blank underscores
  - [ ] Typing shows green/red feedback
  - [ ] Auto-advances on correct password

- [ ] **Challenge 4: Athena** (flag: `zeropointcore`)
  - [ ] CSS styles visible in DevTools
  - [ ] Hex colors present (#7a7a7a, etc.)
  - [ ] Converting to binary spells flag

- [ ] **Challenge 5: Poseidon** (flag: `spintoera`)
  - [ ] Page looks normal initially
  - [ ] Selecting text (Ctrl+A) reveals "spintoera"
  - [ ] CSS class "poseidon-hidden-message" exists

- [ ] **Challenge 6: Zeus** (flag: `vitruvianmatrix`)
  - [ ] Coordinates visible on page (subtle)
  - [ ] Entering "kothamangalam" reveals JS code
  - [ ] Running JS in console shows password
  - [ ] Entering "vitruvianmatrix" advances

- [ ] **Challenge 7: Hermes** (flag: `thisflagisincorrect`)
  - [ ] Hidden div with arrow instructions
  - [ ] Konami code (↑↑↓↓←→←→BA) triggers alert
  - [ ] Base64 decoded + reversed = flag

- [ ] **Challenge 8: Calypso** (flag: `odysseyacrosstime`)
  - [ ] Hidden span with Base64 strings
  - [ ] Decoding correct one gives flag
  - [ ] Decoys don't match

- [ ] **Challenge 9: Circe** (flag: `bruteforceme`)
  - [ ] Audio hint visible on page
  - [ ] Audio file exists and plays
  - [ ] Morse code decodes to "bruteforceme"
  - [ ] Entering flag shows Congratulations page

### Verify Database Logging

- [ ] Open Supabase dashboard
- [ ] Go to Table Editor → `submissions`
- [ ] See all 9 submissions with correct codes
- [ ] Verify timestamps are sequential
- [ ] Test leaderboard query from COMPETITION_DAY.md

### Clear Test Data

```sql
DELETE FROM submissions WHERE username = 'yourname';
```

- [ ] Test submissions deleted
- [ ] Database ready for competition

---

## 📝 Monday-Tuesday (Documentation & Preparation)

### Review Documentation
- [ ] Read [SETUP.md](SETUP.md) completely
- [ ] Read [CHALLENGE_GUIDE.md](CHALLENGE_GUIDE.md)
- [ ] Read [COMPETITION_DAY.md](COMPETITION_DAY.md)
- [ ] Print [SOLUTIONS.md](SOLUTIONS.md) for quick reference
- [ ] Bookmark Supabase dashboard

### Prepare Materials
- [ ] Write competition URL on whiteboard/slide
- [ ] Prepare participant instructions
- [ ] Create subtle hint cards (optional)
- [ ] Prepare prize/recognition (optional)

### Test on Different Devices
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on mobile device
- [ ] Test on different screen sizes

### Backup Everything
- [ ] Backup `.env` file to secure location
- [ ] Export Supabase schema
- [ ] Git commit all changes (optional)
- [ ] Screenshot working challenges

---

## 🎯 Tuesday Evening (Final Prep)

### Pre-Flight Check
- [ ] Run `python backend/test_setup.py` - all passing
- [ ] Test complete flow one more time
- [ ] Verify both servers start without errors
- [ ] Check CORS settings work
- [ ] Ensure audio file exists

### Prepare Competition Environment
- [ ] Close unnecessary applications
- [ ] Check internet connection
- [ ] Verify screen sharing works (if virtual)
- [ ] Test volume for morse code audio

### Mental Prep
- [ ] Review all 9 flags one more time
- [ ] Review hint strategy (give sparingly)
- [ ] Prepare winner announcement
- [ ] Plan for Q&A after competition

---

## 🏁 Wednesday Morning (Competition Day)

### 2 Hours Before
- [ ] Follow [COMPETITION_DAY.md](COMPETITION_DAY.md) checklist
- [ ] Start backend server
- [ ] Start frontend server
- [ ] Test with fake username
- [ ] Clear test data
- [ ] Open Supabase dashboard

### 1 Hour Before
- [ ] Write URL on visible location
- [ ] Open SOLUTIONS.md for reference
- [ ] Check both terminals running
- [ ] Test landing page one last time
- [ ] Prepare welcome message

### 30 Minutes Before
- [ ] Set up screen sharing/projector
- [ ] Test audio levels
- [ ] Prepare timer
- [ ] Welcome participants

---

## 🎊 During Competition

- [ ] Monitor backend terminal for submissions
- [ ] Watch Supabase dashboard
- [ ] Give hints only if desperately needed
- [ ] Track who's in the lead
- [ ] Encourage struggling participants

---

## 🏆 After Competition

- [ ] Run leaderboard query
- [ ] Announce winner
- [ ] Show solutions walkthrough
- [ ] Export submission data
- [ ] Gather feedback
- [ ] Thank participants
- [ ] Clear database for next time

---

## 📊 Progress Tracker

**Setup:** ___% Complete  
**Testing:** ___% Complete  
**Documentation:** ___% Complete  
**Ready:** ___% 

**Feel confident?** ☐ Yes ☐ Somewhat ☐ Need more testing

**Backup plan ready?** ☐ Yes ☐ No

**Printed materials?** ☐ Yes ☐ No

---

## 🎯 Day Before Final Checklist

The night before, verify:

- [ ] ✅ `.env` file configured
- [ ] ✅ Morse audio generated  
- [ ] ✅ All 9 challenges tested manually
- [ ] ✅ Database submissions work
- [ ] ✅ Solutions printed
- [ ] ✅ Supabase dashboard bookmarked
- [ ] ✅ Both servers start without errors
- [ ] ✅ Mobile responsive works
- [ ] ✅ Competition instructions prepared
- [ ] ✅ Winner criteria decided

**If all checked: You're ready! 🎉**

---

## 💡 Tips for Success

1. **Start Early:** Test everything this weekend
2. **Document Issues:** Note any problems you find
3. **Practice Setup:** Restart servers multiple times
4. **Test Network:** Ensure stable connection
5. **Have Backup:** Keep `.env` copy safe
6. **Stay Calm:** You've got comprehensive docs
7. **Enjoy It:** This is a fun event!

---

## 📞 Quick Help References

**Setup issues?** → [SETUP.md](SETUP.md)  
**Need solutions?** → [CHALLENGE_GUIDE.md](CHALLENGE_GUIDE.md)  
**Competition day?** → [COMPETITION_DAY.md](COMPETITION_DAY.md)  
**Quick start?** → [GET_STARTED.md](GET_STARTED.md)  

---

**Good luck! Your CTF is competition-ready! 🏆🎮**
