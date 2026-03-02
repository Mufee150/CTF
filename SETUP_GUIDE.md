# 🎯 EnigmaX Quick Setup Guide

Complete setup instructions for running EnigmaX competition locally and deploying to production.

---

## 🚀 Local Development Setup

### 1. Setup Supabase Database

1. **Create Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Create new project (free tier)
   - Note down your project URL and service_role key

2. **Apply Database Schema:**
   - In Supabase Dashboard → SQL Editor
   - Open `backend/supabase_schema.sql`
   - Copy all content and paste into SQL Editor
   - Click "Run"
   - Verify tables created: `users`, `submissions`, and views `leaderboard`, `participant_progress`

### 2. Backend Setup (Flask)

```bash
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy environment template
cp .env.example .env

# Edit .env file with your Supabase credentials
# Add your SUPABASE_URL and SUPABASE_SERVICE_KEY

# Start backend server
python app.py
```

Backend will run on: `http://localhost:5000`

Verify it's working: Visit `http://localhost:5000/` - should show `{"message": "EnigmaX Backend is running!"}`

### 3. Frontend Setup (React + Vite)

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## 🎮 Testing Locally

1. Open `http://localhost:5173` in your browser
2. You should see the EnigmaX landing page with registration form
3. Register with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
4. You'll be redirected to the first challenge (Odysseus)
5. Try solving challenges and verify submissions in Supabase

### Check Supabase Data:

- **View registered users:** Table Editor → `users`
- **View submissions:** Table Editor → `submissions`
- **View progress:** SQL Editor → `SELECT * FROM participant_progress;`
- **View leaderboard:** SQL Editor → `SELECT * FROM leaderboard;`

---

## 📊 Challenge Answers (For Testing)

| Challenge | Answer | Code Revealed |
|-----------|--------|---------------|
| Odysseus | seaquest | 176 |
| Penelope | thread | 47 |
| Telemachus | son | 20 |
| Athena | wisdom | 88 |
| Poseidon | trident | 33 |
| Circe | transform | 1441 |
| Sirens | 6174 | 6174 |
| Calypso | island | 144 |
| Hermes | speed | 42 |
| Hephaestus | forge | 777 |
| Apollo | helios | helios |
| Artemis | ehfdcagb | huntress |
| Ares | club | war |
| Hades | 504 | underworld |
| Zeus | lightning | olympus |

---

## 🌐 Production Deployment

**Full deployment guide:** See [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md)

**Quick Overview:**
1. Deploy backend to Render/Railway
2. Deploy frontend to Vercel
3. Update environment variables with production URLs
4. Test complete registration → challenges → leaderboard flow

---

## 🔧 Development Commands

### Backend Commands:
```bash
# Start development server
python app.py

# Test Supabase connection
python test_setup.py

# Generate new challenge hashes
python generate_hashes.py
```

### Frontend Commands:
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run build
```

---

## 📁 Project Structure

```
EnigmaX/
├── backend/
│   ├── app.py                 # Flask API server
│   ├── requirements.txt       # Python dependencies
│   ├── supabase_schema.sql    # Database schema
│   ├── .env.example           # Environment template
│   └── generate_hashes.py     # Hash generator utility
├── frontend/
│   ├── src/
│   │   ├── pages/            # Challenge pages
│   │   ├── components/       # Reusable components
│   │   └── config/           # API configuration
│   ├── package.json
│   ├── .env.production.example
│   └── index.html
├── VERCEL_DEPLOYMENT_GUIDE.md  # Full deployment guide
├── SETUP_GUIDE.md              # This file
└── README.md                   # Project overview
```

---

## 🐛 Common Issues

### Issue: Backend starts but frontend can't connect

**Solution:** 
- Check `frontend/src/config/api.js` has correct API URL
- Verify CORS is enabled in `backend/app.py`
- Check browser console (F12) for network errors

### Issue: "Database not available" error

**Solution:**
- Verify `.env` has correct `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`
- Run `python test_setup.py` to test connection
- Check Supabase project is active (not paused)

### Issue: Challenge submission fails with "Unknown challenge"

**Solution:**
- Verify `CHALLENGE_HASHES` in `.env` includes the challenge name
- Check challenge name matches exactly (case-sensitive)
- Restart backend after changing `.env`

### Issue: Registration page doesn't show

**Solution:**
- Clear localStorage: F12 → Application → Local Storage → Clear
- Check if you're redirected (already registered users skip registration)
- Verify `RegistrationForm.jsx` is imported correctly in `Landing.jsx`

---

## 📞 Need Help?

1. Check the troubleshooting section above
2. Review [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md) for deployment issues
3. Check browser console (F12) for frontend errors
4. Check backend terminal for server errors
5. Verify Supabase tables exist and schema is correct

---

## 🎉 You're Ready!

Your EnigmaX competition platform is set up! 

**Next Steps:**
1. ✅ Test all 15 challenges locally
2. ✅ Verify registration and progress tracking
3. ✅ Deploy to production (see VERCEL_DEPLOYMENT_GUIDE.md)
4. ✅ Share competition URL with students

**Have a successful competition! 🚀**
