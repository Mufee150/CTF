import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config/api";

// Challenge order mapping
const CHALLENGE_ORDER = {
  "odysseus": 1,
  "penelope": 2,
  "telemachus": 3,
  "athena": 4,
  "poseidon": 5,
  "zeus": 6,
  "hermes": 7,
  "calypso": 8,
  "circe": 9,
  "sirens": 10,
  "ares": 11,
  "hades": 12,
  "apollo": 13,
  "hephaestus": 14,
  "artemis": 15,
};

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

// Helper function to fetch with timeout
const fetchWithTimeout = (url, timeoutMs = 8000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
  return fetch(url, { signal: controller.signal })
    .finally(() => clearTimeout(timeoutId));
};

export default function ProtectedChallenge({ challengeName, children }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    checkProgress();
    
    // Disable back button
    const preventBack = () => {
      window.history.pushState(null, "", window.location.href);
    };
    
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", preventBack);
    
    return () => {
      window.removeEventListener("popstate", preventBack);
    };
  }, [challengeName]);

  const checkProgress = async (retryAttempt = 0) => {
    const userId = localStorage.getItem("enigmaxUserId");
    
    // If not registered, redirect to landing
    if (!userId) {
      navigate("/", { replace: true });
      return;
    }

    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/api/progress/${userId}`, 8000);
      const data = await response.json();
      
      if (!response.ok) {
        // User ID invalid, clear and redirect
        localStorage.removeItem("enigmaxUserId");
        localStorage.removeItem("enigmaxUserName");
        navigate("/", { replace: true });
        return;
      }

      // If user has finished, redirect to congrats
      if (data.is_finished) {
        navigate("/congrats", { replace: true });
        return;
      }

      const completedChallenges = data.total_completed || 0;
      const currentChallengeNumber = CHALLENGE_ORDER[challengeName];
      
      // User can only access: next challenge (completedChallenges + 1)
      // They cannot go back to completed challenges or skip ahead
      const allowedChallengeNumber = completedChallenges + 1;

      if (currentChallengeNumber < allowedChallengeNumber) {
        // Trying to access a completed challenge - redirect to current
        const currentRoute = CHALLENGE_ROUTES[completedChallenges] || "/congrats";
        navigate(currentRoute, { replace: true });
        return;
      }

      if (currentChallengeNumber > allowedChallengeNumber) {
        // Trying to skip ahead - redirect to current
        const currentRoute = CHALLENGE_ROUTES[completedChallenges] || "/challenge/odysseus";
        navigate(currentRoute, { replace: true });
        return;
      }

      // User is on the correct challenge
      setIsAllowed(true);
      setError(null);
    } catch (error) {
      console.error("Error checking progress:", error);
      
      // Retry logic: attempt up to 2 retries with exponential backoff
      if (retryAttempt < 2) {
        const delay = Math.pow(2, retryAttempt) * 1000; // 1s, 2s
        setTimeout(() => {
          setRetryCount(retryAttempt + 1);
          checkProgress(retryAttempt + 1);
        }, delay);
        return;
      }
      
      // After retries failed, allow access since user is still logged in (fallback mode)
      // The app will work even if backend is temporarily unavailable
      setIsAllowed(true);
      setError(null);
      console.warn("⚠️ Backend temporarily unavailable, running in offline mode");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg">Verifying your progress...</p>
          {retryCount > 0 && (
            <p className="text-gray-400 text-sm mt-3">
              {retryCount === 1 && "Checking backend (retry 1/2)..."}
              {retryCount === 2 && "Checking backend (retry 2/2)..."}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (!isAllowed) {
    return null; // Will redirect
  }

  return children;
}
