# 🎮 CTF Challenge Guide - Odyssey of Time

## 📋 Competition Info
**Date:** Wednesday, February 18, 2026  
**Theme:** Greek Mythology - Odyssey of Time  
**Total Challenges:** 9  
**Difficulty:** Beginner to Intermediate

---

## 🗝️ All Flags & Solutions

### Challenge 1: Odysseus - Starry Sky 🌟
- **Flag:** `homer`
- **Hash:** `2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f`
- **Code:** `H`
- **Technique:** Visual constellation puzzle
- **Solution:** 
  - Look at the starry sky background
  - Hover over the special yellow stars
  - They spell out letters: H-O-M-E-R
  - Enter "homer" as the password

---

### Challenge 2: Penelope - Infinity Loop ∞
- **Flag:** `infinityloop`
- **Hash:** `04d75cde9beeb4d14f7f4e95dab88b6f9398f71eb837000c2cffc1600418a1e0`
- **Code:** `g`
- **Technique:** CSS animation + DOM inspection
- **Solution:**
  - Inspect the page source (F12)
  - Look for spinning element with "infiniteRotate" animation
  - Check the CSS comment hint: `/* HINT: infinityloop */`
  - Find hidden div with `data-password="infinityloop"`
  - Enter "infinityloop"

---

### Challenge 3: Telemachus - Input Feedback 📝
- **Flag:** `catchmeifyoucan`
- **Hash:** `826457e1f6810cda018196cd7631b6a5e7a03644a91fbc599c7613ab9008f603`
- **Code:** `@`
- **Technique:** Real-time input validation with visual feedback
- **Solution:**
  - Type in the input field
  - Letters turn green (correct) or red (incorrect)
  - Blank spaces show what's left to type
  - Hidden scrambled letters in DOM: `["m","a","c","n","f","y"...]`
  - Unscramble or brute force: "catchmeifyoucan"

---

### Challenge 4: Athena - CSS Binary Secret 🔢
- **Flag:** `zeropointcore`
- **Hash:** `f0483107f8792b3ecb4a07279debf58aa2c271d26f629c6495dc5f046b0555a0`
- **Code:** `%`
- **Technique:** Hex colors encode ASCII in binary
- **Solution:**
  - Open DevTools and inspect CSS styles
  - Look at hex color values: `#7a7a7a`, `#656565`, etc.
  - Convert hex to decimal to binary: 0x7a = 122 = 01111010 = 'z'
  - Decode each color: z-e-r-o-p-o-i-n-t-c-o-r-e
  - Enter "zeropointcore"

---

### Challenge 5: Poseidon - Invisible CSS 👁️
- **Flag:** `spintoera`
- **Hash:** `1e2c75f343da0f688fc45b6e5e11d8992406811172f9bc4af36f07bacbaccf56`
- **Code:** `Z`
- **Technique:** Invisible text with selection reveal
- **Solution:**
  - The page appears normal
  - Try selecting all text (Ctrl+A)
  - Hidden black text on black background becomes visible: "spintoera"
  - Or inspect CSS for "poseidon-hidden-message" class
  - Enter "spintoera"

---

### Challenge 6: Zeus - Coordinates & Obfuscation ⚡
- **Flag:** `vitruvianmatrix`
- **Hash:** `5c7906a3b838872ecf7c82d2b0910e56034f95081333d8e2a07a7330f4e60dc1`
- **Code:** `$`
- **Technique:** Geographic coordinates + JavaScript obfuscation
- **Solution:**
  - Inspect page source
  - Find coordinates: "Latitude: 10.5276, Longitude: 76.2144"
  - Search coordinates → Kothamangalam, Kerala
  - Enter "kothamangalam" or "kerala" in input
  - Obfuscated JavaScript code appears
  - Copy code to browser console
  - Console logs: "🔑 Password: vitruvianmatrix"
  - Enter "vitruvianmatrix"

---

### Challenge 7: Hermes - Arrow Keys Secret ⬆️⬇️⬅️➡️
- **Flag:** `thisflagisincorrect`
- **Hash:** `48398245bb0dcfead2309ac3272f399c26fd8964b8919e049001ffc78159bc28`
- **Code:** `&`
- **Technique:** Konami code + Base64 + string reversal
- **Solution:**
  - Inspect page source
  - Find hidden element with arrows: ↑ ↑ ↓ ↓ ← → ← → b a
  - Enter the Konami code using keyboard arrow keys
  - Alert appears with Base64 encoded reversed flag
  - Or run `window.checkClue()` in console
  - Decode: `atob("dGNlcnJvY25pc2dhbGZzaWh0")` → reverse
  - Result: "thisflagisincorrect"

---

### Challenge 8: Calypso - Base64 Encoding 🔐
- **Flag:** `odysseyacrosstime`
- **Hash:** `0d1af12ee692bc4bac27e99603f21771dd617d9b3d5f4748e89abf1d46243dfb`
- **Code:** `Q`
- **Technique:** Hidden Base64 in DOM with decoys
- **Solution:**
  - Inspect page elements (F12)
  - Find hidden span with id "titleBase64"
  - Contains multiple Base64 strings separated by `|`
  - Decode each one: `atob("b2R5c3NleWFjcm9zc3RpbWU=")`
  - Filter out decoys (randomtext123, qwerty987, etc.)
  - Find "odysseyacrosstime"

---

### Challenge 9: Circe - Morse Code 📻
- **Flag:** `bruteforceme`
- **Hash:** `6144545e67abcfeb8ce053127fc5189ea9f094454ec54ec9dd7bf1774d74d62d`
- **Code:** `*`
- **Technique:** Morse code audio
- **Solution:**
  - Inspect page source
  - Find hidden audio element: `/audio/circe.wav`
  - Download the audio file
  - Listen for morse code beeps
  - Decode morse: `-... .-. ..- - . ..-. --- .-. -.-. . -- .`
  - Result: "bruteforceme"
  - Enter the flag

---

## 🎯 Challenge Summary Table

| # | Name | Flag | Technique | Difficulty |
|---|------|------|-----------|------------|
| 1 | Odysseus | homer | Starry Sky | ⭐ Easy |
| 2 | Penelope | infinityloop | CSS Animation + DOM | ⭐⭐ Easy-Medium |
| 3 | Telemachus | catchmeifyoucan | Input Feedback | ⭐⭐ Medium |
| 4 | Athena | zeropointcore | CSS Binary | ⭐⭐⭐ Medium-Hard |
| 5 | Poseidon | spintoera | Invisible CSS | ⭐⭐ Medium |
| 6 | Zeus | vitruvianmatrix | Coordinates + Obfuscation | ⭐⭐⭐ Hard |
| 7 | Hermes | thisflagisincorrect | Konami Code + Encoding | ⭐⭐⭐ Medium-Hard |
| 8 | Calypso | odysseyacrosstime | Base64 | ⭐⭐ Medium |
| 9 | Circe | bruteforceme | Morse Code | ⭐⭐ Medium |

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- Python 3.8+
- Supabase account

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Challenge Hashes (separated by commas)
CHALLENGE_HASHES=odysseus:2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f,penelope:04d75cde9beeb4d14f7f4e95dab88b6f9398f71eb837000c2cffc1600418a1e0,telemachus:826457e1f6810cda018196cd7631b6a5e7a03644a91fbc599c7613ab9008f603,athena:f0483107f8792b3ecb4a07279debf58aa2c271d26f629c6495dc5f046b0555a0,poseidon:1e2c75f343da0f688fc45b6e5e11d8992406811172f9bc4af36f07bacbaccf56,zeus:5c7906a3b838872ecf7c82d2b0910e56034f95081333d8e2a07a7330f4e60dc1,hermes:48398245bb0dcfead2309ac3272f399c26fd8964b8919e049001ffc78159bc28,calypso:0d1af12ee692bc4bac27e99603f21771dd617d9b3d5f4748e89abf1d46243dfb,circe:6144545e67abcfeb8ce053127fc5189ea9f094454ec54ec9dd7bf1774d74d62d

# Challenge Codes (single character for each)
CHALLENGE_CODES=odysseus:H,penelope:g,telemachus:@,athena:%,poseidon:Z,zeus:$,hermes:&,calypso:Q,circe:*
```

---

## 📊 Scoring System

Each challenge awards:
- **Code letter** stored in database
- **Timestamp** for completion tracking
- Collect all 9 codes: `H g @ % Z $ & Q *`

---

## 🎨 UI Improvements Made

1. **Enhanced StarrySky** - Better animations, shooting stars, hover tooltips
2. **Invisible CSS** - More subtle hiding with selection reveal
3. **Better hints** - Subtle visual and DOM hints
4. **Improved feedback** - Better error messages and UI polish
5. **Cleaner routing** - Numeric aliases for easy access

---

## 🚀 Deployment Checklist

- [ ] Update Supabase credentials
- [ ] Update FRONTEND_URL in `.env`
- [ ] Test all 9 challenges
- [ ] Verify hash matching works
- [ ] Create morse code audio file (`/public/audio/circe.wav`)
- [ ] Update README with competition details
- [ ] Test database submissions
- [ ] Verify congratulations page works

---

## 📝 Notes for Organizers

- All flags are lowercase, no spaces
- Hashes are SHA256
- Backend validates client-side hash before storing
- Database stores: username, challenge_name, code, timestamp
- Players can access challenges via `/challenge/1` through `/challenge/9`
- Or via `/challenge/odysseus` through `/challenge/circe`

---

## 🎓 Learning Objectives

Participants will learn:
1. Browser DevTools inspection
2. CSS analysis and understanding
3. JavaScript debugging
4. Binary/Base64 encoding
5. Pattern recognition
6. Creative problem solving
7. Source code analysis
8. Audio analysis (morse code)

---

**Good luck to all participants! May the wisdom of Athena guide you! ⚡**
