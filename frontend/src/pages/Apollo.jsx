import { useState } from "react";
import ChallengePage from "../components/ChallengePage";

const NAME = "apollo";
const NUMBER = 13;
const TITLE = "Apollo";
const HASH = "48582bd628b7c80064780ba9ecce2d435db042b40bd4335a7cea4b4c254e8178";
const CODE = "🎭";

export default function Apollo() {
  const [activeString, setActiveString] = useState(0);

  const lyreStrings = [
    { id: 1, word: "HARMONY", color: "from-yellow-400 to-orange-400", note: "🎵" },
    { id: 2, word: "MELODY", color: "from-orange-400 to-red-400", note: "🎶" },
    { id: 3, word: "TALENT", color: "from-red-400 to-pink-400", note: "🎵" },
    { id: 4, word: "DIVINE", color: "from-pink-400 to-purple-400", note: "🎶" },
    { id: 5, word: "VISION", color: "from-purple-400 to-blue-400", note: "🎵" },
    { id: 6, word: "CHORUS", color: "from-blue-400 to-cyan-400", note: "🎶" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-orange-950 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            🎭 Apollo's Lyre 🎭
          </h1>
          <p className="text-xl text-gray-300">
            Pluck the strings of the divine lyre to reveal the hidden melody.
          </p>
        </div>

        <div className="relative bg-gradient-to-b from-yellow-900/20 via-orange-900/20 to-black rounded-3xl p-12 border-4 border-yellow-500/30">
          {/* Lyre Frame */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl">🪕</div>
          
          <div className="space-y-6 mt-12">
            {lyreStrings.map((string, idx) => (
              <div
                key={string.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveString(string.id)}
                onMouseLeave={() => setActiveString(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${string.color} rounded-full transition-all duration-300 ${
                  activeString === string.id ? 'scale-105 shadow-lg' : 'opacity-70'
                }`}></div>
                
                <div className={`absolute left-1/2 -translate-x-1/2 -top-10 transition-all duration-300 ${
                  activeString === string.id ? 'opacity-100 scale-110' : 'opacity-0 scale-90'
                }`}>
                  <div className="bg-black/90 px-6 py-3 rounded-lg border-2 border-yellow-400/50 shadow-xl">
                    <p className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                      {string.word}
                    </p>
                  </div>
                </div>

                <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-2xl">
                  {string.note}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-sm text-gray-400 italic">
              "Each string resonates at its own position in the cosmic order..."
            </p>
          </div>
        </div>

        <ChallengePage
          title={TITLE}
          name={NAME}
          number={NUMBER}
          hash={HASH}
          code={CODE}
          nextRoute="/challenge/hephaestus"
        />
      </div>
    </div>
    </>
  );
}
