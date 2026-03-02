# 🎯 CTF Quick Reference - Solutions

**⚠️ ORGANIZERS ONLY - DO NOT SHARE WITH PARTICIPANTS**

## All Flags

| # | Challenge | Flag | Code | Technique |
|---|-----------|------|------|-----------|
| 1 | Odysseus | `homer` | H | Starry sky constellation |
| 2 | Penelope | `infinityloop` | g | CSS animation hint |
| 3 | Telemachus | `seaquest` | @ | Base64 decoding |
| 4 | Athena | `zeropointcore` | % | CSS hex → binary |
| 5 | Poseidon | `fgezjkfm` | Z | Cipher: each letter shifted by position |
| 6 | Zeus | `47` | $ | Visual puzzle - inspect element data-secret |
| 7 | Hermes | `thisflagisincorrect` | & | Konami code |
| 8 | Calypso | `odysseyacrosstime` | Q | Base64 decoding |
| 9 | Circe | `bruteforceme` | * | Inspect element data-spell |
| 10 | Sirens | `silence` | 🎵 | Binary/pattern puzzle |
| 11 | Ares | `warcry` | ⚔️ | Riddle - war-themed |
| 12 | Hades | `484` | 💀 | Number pattern: 15, 16, 36, 117, ? |
| 13 | Apollo | `lightbearer` | ☀️ | Sun puzzle |
| 14 | Hephaestus | `forge` | 🔨 | Crafting clue |
| 15 | Artemis | `moonlight` | 🌙 | Hunt puzzle |

## Quick Hints

1. **Odysseus** → Hover over bright stars
2. **Penelope** → Check CSS for "infiniteRotate" or DOM data attributes
3. **Telemachus** → Type and watch color feedback
4. **Athena** → Convert CSS hex colors to binary ASCII
5. **Poseidon** → Cipher pattern - each letter shifted by position
6. **Zeus** → Inspect element for hidden data-secret attribute
7. **Hermes** → Arrow keys: ↑↑↓↓←→←→ba
8. **Calypso** → Find Base64 in hidden span → Decode each
9. **Circe** → Inspect element for data-spell attribute
10. **Sirens** → Binary pattern puzzle
11. **Ares** → Solve the riddle about battle sounds
12. **Hades** → Find hidden elements
13. **Apollo** → Sun-based puzzle
14. **Hephaestus** → Crafting clue
15. **Artemis** → Hunt puzzle

## Environment Setup

```env
SUPABASE_URL=your_url
SUPABASE_SERVICE_KEY=your_key
FRONTEND_URL=http://localhost:5173
```

Copy hashes and codes from `.env.example`

## Test Command

```bash
# Generate hashes
python backend/generate_hashes.py

# Generate morse audio
python backend/generate_morse_audio.py

# Test backend
curl -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{"username":"test","challenge_name":"odysseus","client_hash":"2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f"}'
```

## Pre-Competition Checklist

- [ ] Create morse audio: `python backend/generate_morse_audio.py`
- [ ] Set up Supabase project
- [ ] Configure `.env` with real credentials
- [ ] Test all 9 challenges manually
- [ ] Verify backend submissions work
- [ ] Check CORS settings
- [ ] Test on mobile devices
- [ ] Clear browser cache before competition
- [ ] Have backup of database schema
- [ ] Print this sheet for reference

## During Competition

- Monitor Supabase dashboard for submissions
- Watch for common errors (CORS, hash mismatch)
- Be ready to give subtle hints only
- Don't reveal direct answers

## Scoring

Final code string: `Hg@%Z$&Q*`

All codes together can spell a final message or be used for verification.
