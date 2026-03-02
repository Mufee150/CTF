import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import StarrySky from "../components/StarrySky";
import API_BASE_URL from "../config/api";

const CHALLENGE_ROUTES = [
  "/challenge/odysseus",
  "/challenge/penelope",
  "/challenge/telemachus",
  "/challenge/athena",
  "/challenge/poseidon",
  "/challenge/zeus",
  "/challenge/hermes",
  "/challenge/calypso",
  "/challenge/circe",
  "/challenge/sirens",
  "/challenge/ares",
  "/challenge/hades",
  "/challenge/apollo",
  "/challenge/hephaestus",
  "/challenge/artemis",
];

export default function Landing() {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [currentChallenge, setCurrentChallenge] = useState(0);

  useEffect(() => {
    // Check localStorage immediately - no loading state
    const userId = localStorage.getItem("enigmaxUserId");
    const name = localStorage.getItem("enigmaxUserName");
    
    if (userId) {
      setIsRegistered(true);
      setUserName(name || "Odyssey Seeker");
      
      // Fetch progress in background (non-blocking)
      fetch(`${API_BASE_URL}/api/progress/${userId}`)
        .then(res => res.json())
        .then(data => {
          if (data.total_completed !== undefined) {
            setCurrentChallenge(data.total_completed);
          }
          if (data.is_finished) {
            navigate("/congrats", { replace: true });
          }
        })
        .catch(() => {});
    }
  }, []);

  const handleContinue = () => {
    const route = CHALLENGE_ROUTES[currentChallenge] || "/challenge/odysseus";
    navigate(route, { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white relative overflow-hidden">
      <StarrySky />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 animate-pulse">
            EnigmaX
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-2">
            Decode the Unknown
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Test your logic, pattern recognition, and problem-solving skills.
          </p>
        </div>

        {/* Show either Registration Form or Continue button */}
        {isRegistered ? (
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 text-center max-w-md w-full">
            <p className="text-xl text-cyan-300 mb-2">Welcome back,</p>
            <p className="text-2xl font-bold text-white mb-2">{userName}!</p>
            <p className="text-sm text-gray-400 mb-6">
              Progress: Challenge {currentChallenge + 1} of 15
            </p>
            <button
              onClick={handleContinue}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-purple-500 transition-all transform hover:scale-105"
            >
              🚀 Continue to Challenge {currentChallenge + 1}
            </button>
          </div>
        ) : (
          <RegistrationForm />
        )}

        {/* Competition Info */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">Competition Rules</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Complete all 15 challenges to finish the competition</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Your time is tracked from registration to final challenge completion</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-red-300"><strong>One registration per person</strong> - you cannot re-register</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-red-300"><strong>No going back</strong> - once you complete a challenge, you cannot return to it</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Look for visual clues, patterns, and hidden messages</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Some challenges require browser developer tools</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg">
            <p className="text-center text-sm text-gray-300">
              <span className="text-yellow-400 font-semibold">⚡ Pro Tip:</span> Pay attention to every detail. 
              The gods have hidden their secrets in the most unexpected places.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
