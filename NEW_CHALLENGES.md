# 🆕 New Challenges - General & Technical Mix

This document describes the **5 NEW challenges** added to the CTF, providing a mix of general knowledge puzzles and creative technical challenges.

---

## 📊 Challenge Overview

| # | Name | Type | Difficulty | Flag | Code |
|---|------|------|------------|------|------|
| 10 | Ares | General (Mythology) | Easy | `club` | ⚔️ |
| 11 | Hades | General (Math) | Medium | `0504` | 💀 |
| 12 | Apollo | General (Wordplay) | Medium | `helios` | 🎭 |
| 13 | Hephaestus | Technical (Console) | Medium | `forgefire` | 🔨 |
| 14 | Artemis | Technical (Cipher) | Hard | `ehfdcagb` | 🏹 |

---

## 🏹 Challenge 10: Ares' Battle Riddle

**URL:** `/challenge/ares` or `/challenge/10`

### 🎯 Challenge Type
General Knowledge - Greek Mythology Riddle

### 📖 Description
The God of War presents a riddle about a famous Greek hero. Players must identify the hero from the clues and name his signature weapon.

### 🔍 Solution Process
1. **Read the Riddle:**
   - "In battle I fought, with twelve labors complete"
   - "A lion I slayed, making victory sweet"
   - "Nine heads did I sever from one fearsome beast"
   - "My strength is unmatched, from west to the east"

2. **Identify the Hero:**
   - 12 labors = **Heracles** (Hercules)
   - Lion = Nemean Lion (1st labor)
   - Nine-headed beast = Lernaean Hydra (2nd labor)
   - Superhuman strength

3. **Find the Weapon:**
   - Heracles' signature weapon = **Club** (wooden club)

4. **Submit:** `club` (lowercase, no spaces)

### ✅ Flag
```
club
```

**SHA256 Hash:**
```
cc2585df74ecdb8b43e3d9f1f793ee9ccd21d617a49e8e5698cb5e052c453dac
```

---

## 💀 Challenge 11: Hades' Underworld Cipher

**URL:** `/challenge/hades` or `/challenge/11`

### 🎯 Challenge Type
General Knowledge - Math Puzzle (Roman Numerals)

### 📖 Description
Navigate the three rivers of the Underworld. Each river displays a Roman numeral when hovered. Players must multiply the numbers together.

### 🔍 Solution Process
1. **Hover Over Each River:**
   - **River Styx** (Blue) → Shows `VII` → 7
   - **River Acheron** (Red) → Shows `VIII` → 8
   - **River Lethe** (Purple) → Shows `IX` → 9

2. **Convert Roman Numerals:**
   - VII = 7
   - VIII = 8
   - IX = 9

3. **Calculate Product:**
   ```
   7 × 8 × 9 = 504
   ```

4. **Format as 4-Digit Number:**
   ```
   504 → 0504
   ```

5. **Submit:** `0504`

### ✅ Flag
```
0504
```

**SHA256 Hash:**
```
9514bda5f1da3a11c1ec2b4d40252bcc327a89cc4cc0f01f673048a551333d08
```

---

## 🎭 Challenge 12: Apollo's Musical Code

**URL:** `/challenge/apollo` or `/challenge/12`

### 🎯 Challenge Type
General Knowledge - Word Puzzle

### 📖 Description
The God of Music hides a message in his divine lyre. Six strings reveal words when hovered. The first letter of each word forms the flag.

### 🔍 Solution Process
1. **Hover Over Each Lyre String (Top to Bottom):**
   - String 1: **HARMONY** → H
   - String 2: **ECHO** → E
   - String 3: **LYRIC** → L
   - String 4: **INSPIRATION** → I
   - String 5: **ODYSSEY** → O
   - String 6: **SONG** → S

2. **Take First Letters:**
   ```
   H + E + L + I + O + S = HELIOS
   ```

3. **Who is Helios?**
   - Helios = Greek god of the Sun
   - Apollo is also associated with the sun (later merged)

4. **Submit:** `helios` (lowercase)

### ✅ Flag
```
helios
```

**SHA256 Hash:**
```
48582bd628b7c80064780ba9ecce2d435db042b40bd4335a7cea4b4c254e8178
```

---

## 🔨 Challenge 13: Hephaestus' Forge

**URL:** `/challenge/hephaestus` or `/challenge/13`

### 🎯 Challenge Type
**Technical - Browser Developer Console**

### 📖 Description
The divine blacksmith hides secrets in his forge flames. Players must open the browser console to find a hexadecimal-encoded message.

### 🔍 Solution Process
1. **Open Developer Console:**
   - **Chrome/Edge:** Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
   - **Firefox:** Press `F12` or `Ctrl+Shift+K`
   - Or: Right-click → Inspect Element → Console tab

2. **Read the Console Output:**
   ```
   🔥 HEPHAESTUS FORGE STATUS 🔥
   Forge Temperature: 2400°C
   Metal Composition: Divine Bronze
   Spark Count: 7777
   ⚠️  DECODED ARTIFACT ID:
   0x666F72676566697265
   💡 Hint: This is hexadecimal encoding. Decode it to ASCII.
   ```

3. **Decode the Hexadecimal:**
   - Hexadecimal string: `666F72676566697265`
   - **Method 1 - Python:**
     ```python
     bytes.fromhex('666F72676566697265').decode('ascii')
     # Output: 'forgefire'
     ```
   - **Method 2 - JavaScript (in Console):**
     ```javascript
     Buffer.from('666F72676566697265', 'hex').toString('ascii')
     // Or
     '666F72676566697265'.match(/.{2}/g).map(h => String.fromCharCode(parseInt(h, 16))).join('')
     ```
   - **Method 3 - CyberChef:**
     - Visit https://gchq.github.io/CyberChef/
     - Recipe: "From Hex"
     - Input: `666F72676566697265`
     - Output: `forgefire`

4. **Submit:** `forgefire`

### ✅ Flag
```
forgefire
```

**SHA256 Hash:**
```
c38d079d287fd7856612a8fc448178f5737fa4486dcbc0eff3b73571476a1157
```

### 🔧 Technical Skills Tested
- Browser developer tools
- Hexadecimal to ASCII conversion
- Basic cryptography awareness
- Command-line tools or online decoders

---

## 🏹 Challenge 14: Artemis' Hunt

**URL:** `/challenge/artemis` or `/challenge/14`

### 🎯 Challenge Type
**Technical - Number-to-Letter Cipher**

### 📖 Description
The Goddess of the Hunt presents a sequence of moon phases. Each phase has a numeric index (0-7). Players must map these numbers to letters to decode the flag.

### 🔍 Solution Process
1. **Observe the Moon Phase Sequence:**
   - The page shows 8 moon phases cycling
   - A special sequence is displayed at the bottom:
     - 🌕 (Full Moon)
     - 🌘 (Waning Crescent)
     - 🌖 (Waning Gibbous)
     - 🌔 (Waxing Gibbous)
     - 🌓 (First Quarter)
     - 🌑 (New Moon)
     - 🌗 (Last Quarter)
     - 🌒 (Waxing Crescent)

2. **Click Each Moon Phase to Reveal Its Index:**
   - 🌑 New Moon = 0
   - 🌒 Waxing Crescent = 1
   - 🌓 First Quarter = 2
   - 🌔 Waxing Gibbous = 3
   - 🌕 Full Moon = 4
   - 🌖 Waning Gibbous = 5
   - 🌗 Last Quarter = 6
   - 🌘 Waning Crescent = 7

3. **Extract the Sequence:**
   ```
   Position 1: 🌕 Full Moon      = 4
   Position 2: 🌘 Waning Cres.   = 7
   Position 3: 🌖 Waning Gib.    = 5
   Position 4: 🌔 Waxing Gib.    = 3
   Position 5: 🌓 First Quarter  = 2
   Position 6: 🌑 New Moon       = 0
   Position 7: 🌗 Last Quarter   = 6
   Position 8: 🌒 Waxing Cres.   = 1
   
   Sequence: 4, 7, 5, 3, 2, 0, 6, 1
   ```

4. **Map Numbers to Letters (0=a, 1=b, 2=c, ... 7=h):**
   ```
   0 → a
   1 → b
   2 → c
   3 → d
   4 → e
   5 → f
   6 → g
   7 → h
   
   4, 7, 5, 3, 2, 0, 6, 1
   ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓
   e  h  f  d  c  a  g  b
   
   Flag: ehfdcagb
   ```

5. **Submit:** `ehfdcagb` (all lowercase)

### ✅ Flag
```
ehfdcagb
```

**SHA256 Hash:**
```
afacd969e5ec38fddc33add9fd6a2dbff7b3affd71e95064271897e99f573ac4
```

### 🔧 Technical Skills Tested
- Pattern recognition
- Number-to-letter mapping
- Cipher decoding
- Logical reasoning

---

## 🎓 Educational Value

### General Knowledge Challenges (3)
1. **Ares (Mythology):** Tests classical education, Greek mythology knowledge
2. **Hades (Math):** Roman numeral conversion, basic arithmetic
3. **Apollo (Wordplay):** Pattern recognition, acrostic puzzles

### Technical Challenges (2)
1. **Hephaestus (Console):** Browser developer tools, hexadecimal encoding
2. **Artemis (Cipher):** Number-to-letter mapping, cipher solving

---

## 🚀 Testing the New Challenges

### Quick Test Checklist
```bash
# 1. Start frontend
cd frontend
npm run dev

# 2. Visit each challenge:
http://localhost:5173/challenge/10  # Ares
http://localhost:5173/challenge/11  # Hades
http://localhost:5173/challenge/12  # Apollo
http://localhost:5173/challenge/13  # Hephaestus
http://localhost:5173/challenge/14  # Artemis

# 3. Test flag submission with backend running
cd backend
python app.py
```

### Expected Behavior
- ✅ All challenge pages load without errors
- ✅ Interactive elements work (hover effects, clicks)
- ✅ Animations play smoothly
- ✅ Hephaestus console messages appear
- ✅ Artemis moon phases cycle every 3 seconds
- ✅ Backend validates flags correctly

---

## 📝 Integration Notes

### Files Modified
- `frontend/src/App.jsx` - Added 5 new routes
- `backend/generate_hashes.py` - Added challenges 10-14
- `.env.example` - Updated with new hashes and codes

### Files Created
- `frontend/src/pages/Ares.jsx` (Mythology riddle)
- `frontend/src/pages/Hades.jsx` (Math puzzle)
- `frontend/src/pages/Apollo.jsx` (Word puzzle)
- `frontend/src/pages/Hephaestus.jsx` (Console challenge)
- `frontend/src/pages/Artemis.jsx` (Cipher challenge)
- `NEW_CHALLENGES.md` (This file)

---

## 🎯 Competition Day Tips

### For Organizers
1. **Difficulty Curve:**
   - Start newcomers with Ares (easy mythology riddle)
   - Hades and Apollo are medium difficulty
   - Hephaestus requires technical skills (console)
   - Artemis is the hardest (multi-step cipher)

2. **Hints Strategy:**
   - **Ares:** "Think of the strongest Greek hero"
   - **Hades:** "What's 7 times 8 times 9?"
   - **Apollo:** "Read the first letter of each word"
   - **Hephaestus:** "Press F12 and look at the Console tab"
   - **Artemis:** "0=a, 1=b, 2=c... decode the pattern"

3. **Time Estimates:**
   - Ares: 2-5 minutes
   - Hades: 3-7 minutes
   - Apollo: 5-10 minutes
   - Hephaestus: 5-15 minutes (depending on tech skills)
   - Artemis: 10-20 minutes

---

## ✨ Feature Highlights

### Visual Design
- 🎨 **Unique Color Schemes:** Each challenge has a distinct gradient theme
- ✨ **Animations:** Twinkling stars, flame effects, moon phases, spark bursts
- 🎭 **Interactive Elements:** Hover effects, click interactions, visual feedback
- 📱 **Responsive Design:** Works on desktop, tablet, and mobile

### Accessibility
- 🔤 Clear instructions and hints
- 🎨 High contrast text for readability
- 📐 Large interactive targets
- 💡 Multiple solving methods for technical challenges

---

## 🏆 Success Metrics

### Expected Solve Rates (30-minute session)
- **Ares:** 80-90% (easy mythology)
- **Hades:** 60-70% (simple math)
- **Apollo:** 50-60% (requires attention)
- **Hephaestus:** 40-50% (needs F12 knowledge)
- **Artemis:** 20-30% (complex cipher)

---

## 📚 Related Documentation
- [Main Challenge Guide](CHALLENGE_GUIDE.md) - All 14 challenges
- [Setup Guide](SETUP.md) - Installation instructions
- [Competition Day Guide](COMPETITION_DAY.md) - Event procedures
- [Solutions Reference](SOLUTIONS.md) - Quick solution lookup

---

**Created:** February 2026  
**Total Challenges:** 14 (9 original + 5 new)  
**Theme:** Greek Mythology & The Odyssey  
**Difficulty Range:** Variable (Easy to Hard)

