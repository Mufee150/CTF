import { useState, useEffect } from "react";
import API_BASE_URL from "../config/api";
import StarrySky from "../components/StarrySky";

export default function Congrats() {
  const [userData, setUserData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("enigmaxUserId");
      
      if (userId) {
        try {
          // Fetch user progress
          const progressRes = await fetch(`${API_BASE_URL}/api/progress/${userId}`);
          if (progressRes.ok) {
            const progressData = await progressRes.json();
            setUserData(progressData);
          }
        } catch (error) {
          console.error("Error fetching progress:", error);
        }
      }

      try {
        // Fetch leaderboard
        const leaderboardRes = await fetch(`${API_BASE_URL}/api/leaderboard`);
        if (leaderboardRes.ok) {
          const leaderboardData = await leaderboardRes.json();
          setLeaderboard(leaderboardData.leaderboard || []);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const formatDuration = (seconds) => {
    if (!seconds) return "N/A";
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  const calculateDuration = (startedAt, completedAt) => {
    if (!startedAt || !completedAt) return null;
    const start = new Date(startedAt);
    const end = new Date(completedAt);
    return (end - start) / 1000; // seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white relative overflow-hidden">
      <StarrySky />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          {/* Congratulations Header */}
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-10 text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
              🎉 Quest Complete! 🎉
            </h1>
            <p className="text-2xl text-cyan-300 mb-2">
              You've decoded all the enigmas!
            </p>
            <p className="text-gray-300 text-lg">
              Congratulations on completing the EnigmaX challenge!
            </p>

            {/* User Stats */}
            {!loading && userData && (
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg border border-cyan-500/30">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Your Achievement</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-400 text-sm">Participant</p>
                    <p className="text-white text-xl font-bold">{userData.user?.name || "Unknown"}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Challenges Completed</p>
                    <p className="text-green-400 text-xl font-bold">{userData.total_completed || 15}/15</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Time Taken</p>
                    <p className="text-cyan-400 text-xl font-bold">
                      {formatDuration(calculateDuration(userData.user?.started_at, userData.user?.completed_at))}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Leaderboard */}
          {leaderboard.length > 0 && (
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                🏆 Leaderboard
              </h2>
              <div className="space-y-3">
                {leaderboard.slice(0, 10).map((entry, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      index === 0
                        ? 'bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-500/50'
                        : index === 1
                        ? 'bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-400/50'
                        : index === 2
                        ? 'bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-700/50'
                        : 'bg-black/30 border border-cyan-500/20'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-cyan-400 w-8">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`}
                      </span>
                      <div>
                        <p className="text-white font-semibold">{entry.name}</p>
                        <p className="text-gray-400 text-sm">{entry.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 font-bold">
                        {formatDuration(entry.time_taken_seconds || entry.duration_seconds || entry.duration)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
