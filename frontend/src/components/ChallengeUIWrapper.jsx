// src/components/ChallengePage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SHA256 from "crypto-js/sha256";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function ChallengePage({
  title,
  name,
  number,
  hash,
  code,
  nextRoute,
  audioUrl = null,
  hiddenElements = null,
}) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  // ✅ Optional autoplay audio
  useEffect(() => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audio.preload = "auto";

    const tryPlay = () => {
      audio.play().catch(() => {
        console.warn("User interaction required for audio.");
      });
      window.removeEventListener("click", tryPlay);
    };

    audio.play().catch(() => {
      window.addEventListener("click", tryPlay);
    });
  }, [audioUrl]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    const clientHash = SHA256(value).toString();
    if (clientHash !== hash) {
      setErr("Incorrect — try again.");
      return;
    }

    // Get user_id from localStorage (set during registration)
    const userId = localStorage.getItem("enigmaxUserId");
    const username = localStorage.getItem("ctf_username") || localStorage.getItem("enigmaxUserName") || "";
    
    if (!userId && !username) {
      setErr("Please register first.");
      navigate("/");
      return;
    }

    try {
      const requestBody = {
        challenge_name: name,
        client_hash: clientHash
      };
      
      // Use user_id if available (new system), otherwise username (old system)
      if (userId) {
        requestBody.user_id = userId;
        requestBody.challenge_number = number;
      } else {
        requestBody.username = username;
      }
      
      const res = await fetch(`${API_URL}/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      if (!data.success) {
        setErr(data.error || "Server rejected submission.");
        return;
      }

      navigate(nextRoute || "/congrats");
    } catch (e) {
      setErr("Network error — check backend/API.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-xl">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          {`Challenge ${number}: ${title}`}
        </h1>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block text-sm text-neutral-300">Enter flag / password</label>
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="flag"
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3"
            required
          />
          {err && <p className="text-red-400 text-sm">{err}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 hover:bg-red-700 transition px-4 py-3 font-semibold"
          >
            Submit
          </button>
        </form>

        {/* Hidden clues / audio */}
        {hiddenElements}

        
      </div>
    </div>
  );
}
