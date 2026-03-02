import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SHA256 from "crypto-js/sha256";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

// Mapping of challenge names to numbers (for progress tracking)
const CHALLENGE_NUMBERS = {
  "odysseus": 1,
  "penelope": 2,
  "telemachus": 3,
  "athena": 4,
  "poseidon": 5,
  "circe": 6,
  "sirens": 7,
  "calypso": 8,
  "hermes": 9,
  "hephaestus": 10,
  "apollo": 11,
  "artemis": 12,
  "ares": 13,
  "hades": 14,
  "zeus": 15
};

export default function ChallengeLogic({ name, number, hash, code, nextRoute, children }) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

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
      setErr("Please register on the landing page first.");
      navigate("/");
      return;
    }

    const challengeNumber = CHALLENGE_NUMBERS[name.toLowerCase()] || 0;

    try {
      const requestBody = {
        challenge_name: name,
        client_hash: clientHash,
        challenge_number: challengeNumber
      };

      // Use user_id if available (new system), otherwise username (backward compatibility)
      if (userId) {
        requestBody.user_id = userId;
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
        setErr(data.error || "Server rejected the submission.");
        return;
      }
      navigate(nextRoute);
    } catch {
      setErr("Network error — try again.");
    }
  };

  // children = UI function
  return children({ value, setValue, err, onSubmit, number, name, code });
}
