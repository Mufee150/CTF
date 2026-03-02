import { useState, useEffect } from "react";
import ChallengePage from "../components/ChallengePage";

const NAME = "artemis";
const NUMBER = 15;
const TITLE = "Artemis";
const HASH = "afacd969e5ec38fddc33add9fd6a2dbff7b3affd71e95064271897e99f573ac4";
const CODE = "🏹";

export default function Artemis() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [discovered, setDiscovered] = useState([]);

  const moonPhases = [
    { name: "New Moon", emoji: "🌑", value: 0 },
    { name: "Waxing Crescent", emoji: "🌒", value: 1 },
    { name: "First Quarter", emoji: "🌓", value: 2 },
    { name: "Waxing Gibbous", emoji: "🌔", value: 3 },
    { name: "Full Moon", emoji: "🌕", value: 4 },
    { name: "Waning Gibbous", emoji: "🌖", value: 5 },
    { name: "Last Quarter", emoji: "🌗", value: 6 },
    { name: "Waning Crescent", emoji: "🌘", value: 7 },
  ];

  // The hidden sequence that spells "moonhunt" in ASCII
  // m=109=6D, o=111=6F, o=111=6F, n=110=6E, h=104=68, u=117=75, n=110=6E, t=116=74
  // Simplified: moon phases in order spell out indices
  const secretSequence = [4, 7, 5, 3, 2, 0, 6, 1]; // Specific pattern

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % moonPhases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMoonClick = (index) => {
    if (!discovered.includes(index)) {
      setDiscovered([...discovered, index]);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            🏹 Artemis' Lunar Hunt 🏹
          </h1>
          <p className="text-xl text-gray-300">
            The huntress goddess watches over the moon. Decode her celestial pattern.
          </p>
        </div>

        {/* Current Moon Phase Display */}
        <div className="bg-gradient-to-b from-purple-900/30 to-black rounded-3xl p-12 border-4 border-purple-500/30 text-center">
          <p className="text-sm text-gray-400 mb-4">The moon cycles through its phases...</p>
          <div className="text-9xl mb-4 animate-pulse">
            {moonPhases[currentPhase].emoji}
          </div>
          <p className="text-2xl font-bold text-purple-300">{moonPhases[currentPhase].name}</p>
          <p className="text-sm text-gray-500 mt-2">Phase {currentPhase} of 7</p>
        </div>

        {/* All Moon Phases Grid */}
        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500/30">
          <h3 className="text-2xl font-bold text-center text-purple-300 mb-6">
            🌙 The Eight Lunar Phases 🌙
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {moonPhases.map((phase, index) => (
              <button
                key={index}
                onClick={() => handleMoonClick(index)}
                className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                  discovered.includes(index)
                    ? 'border-yellow-400 bg-yellow-900/30 scale-105'
                    : 'border-purple-500/30 bg-purple-900/20 hover:border-purple-400 hover:scale-110'
                }`}
              >
                <div className="text-4xl mb-2">{phase.emoji}</div>
                <div className={`text-xs text-center transition-opacity ${
                  discovered.includes(index) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <p className="text-purple-300 font-bold">{phase.value}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* The Hunt Pattern */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border-2 border-pink-500/30">
          <div className="text-center space-y-4">
            <p className="text-xl text-pink-300 font-semibold">
              🎯 Artemis' Arrow Points to the Pattern
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {secretSequence.map((phaseIndex, i) => (
                <div 
                  key={i} 
                  className="bg-black/50 px-4 py-3 rounded-lg border border-purple-500/50"
                >
                  <div className="text-3xl mb-1">{moonPhases[phaseIndex].emoji}</div>
                  <div className="text-xs text-gray-500">Position {i + 1}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-black/50 rounded-lg">
              <p className="text-sm text-gray-400 leading-relaxed">
                💡 Each moon phase has a number. Follow the hunting sequence...
              </p>
            </div>
          </div>
        </div>

        <ChallengePage
          title={TITLE}
          name={NAME}
          number={NUMBER}
          hash={HASH}
          code={CODE}
          nextRoute="/congrats"
        />
      </div>
    </div>
    </>
  );
}
