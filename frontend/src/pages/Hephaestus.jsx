import { useState } from "react";
import ChallengePage from "../components/ChallengePage";

const NAME = "hephaestus";
const NUMBER = 14;
const TITLE = "Hephaestus";
const HASH = "c38d079d287fd7856612a8fc448178f5737fa4486dcbc0eff3b73571476a1157";
const CODE = "🔨";

export default function Hephaestus() {
  const [forgeActive, setForgeActive] = useState(false);

  // Hidden message in console
  useState(() => {
    console.log('%c🔥 HEPHAESTUS FORGE STATUS 🔥', 'color: #ff6600; font-size: 20px; font-weight: bold;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ff6600;');
    console.log('%cForge Temperature: 2400°C', 'color: #ffaa00; font-size: 14px;');
    console.log('%cMetal Composition: Divine Bronze', 'color: #ffaa00; font-size: 14px;');
    console.log('%cSpark Count: 7777', 'color: #ffaa00; font-size: 14px;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ff6600;');
    console.log('%c⚠️  DECODED ARTIFACT ID:', 'color: #ff0000; font-size: 16px; font-weight: bold;');
    console.log('%c0x666F72676566697265', 'color: #00ff00; font-size: 18px; font-weight: bold; font-family: monospace;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ff6600;');
    console.log('%c💡 Hint: This is hexadecimal encoding.', 'color: #888888; font-size: 12px; font-style: italic;');
  }, []);

  const handleForgeClick = () => {
    setForgeActive(true);
    setTimeout(() => setForgeActive(false), 2000);
    console.log('%c🔨 *CLANG CLANG CLANG* 🔨', 'color: #ffaa00; font-size: 16px; font-weight: bold;');
    console.log('%cYou strike the anvil... The flames grow brighter...', 'color: #ff6600; font-size: 14px;');
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-950 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            🔨 Hephaestus' Forge 🔨
          </h1>
          <p className="text-xl text-gray-300">
            The divine blacksmith works tirelessly. His flames hold ancient secrets.
          </p>
        </div>

        <div className="relative bg-gradient-to-b from-orange-900/30 to-black rounded-3xl p-12 border-4 border-orange-500/30 overflow-hidden">
          {/* Animated Flames */}
          <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-16 opacity-70"
                style={{
                  left: `${i * 5}%`,
                  animation: `flame ${1 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random()}s`,
                }}
              >
                <div className={`text-6xl ${forgeActive ? 'scale-150' : ''} transition-transform duration-500`}>
                  {['🔥', '🔥', '🔥'][i % 3]}
                </div>
              </div>
            ))}
          </div>

          {/* Anvil */}
          <div 
            className="relative z-10 text-center cursor-pointer group"
            onClick={handleForgeClick}
          >
            <div className={`text-9xl mb-4 transition-transform duration-200 ${forgeActive ? 'scale-110' : 'group-hover:scale-105'}`}>
              ⚒️
            </div>
            <p className="text-2xl font-bold text-orange-300 mb-2">The Divine Anvil</p>
            <p className="text-sm text-gray-400 italic">Click to strike the anvil</p>
          </div>

          {/* Sparks */}
          {forgeActive && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    animation: `spark 1s ease-out forwards`,
                    animationDelay: `${i * 0.02}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/50 p-6 rounded-xl border border-orange-500/30 text-center">
            <div className="text-4xl mb-3">🌡️</div>
            <p className="text-orange-300 font-bold text-xl">2400°C</p>
            <p className="text-xs text-gray-500 mt-2">Forge Temperature</p>
          </div>
          <div className="bg-black/50 p-6 rounded-xl border border-yellow-500/30 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <p className="text-yellow-300 font-bold text-xl">7777</p>
            <p className="text-xs text-gray-500 mt-2">Active Sparks</p>
          </div>
          <div className="bg-black/50 p-6 rounded-xl border border-red-500/30 text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <p className="text-red-300 font-bold text-xl">Divine</p>
            <p className="text-xs text-gray-500 mt-2">Metal Quality</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-lg rounded-2xl p-6 border-2 border-orange-500/50">
          <div className="text-center space-y-3">
            <p className="text-lg text-orange-300 font-semibold">
              🔍 The flames whisper in the Console of machines...
            </p>
          </div>
        </div>

        <ChallengePage
          title={TITLE}
          name={NAME}
          number={NUMBER}
          hash={HASH}
          code={CODE}
          nextRoute="/challenge/artemis"
        />
      </div>

      <style>{`
        @keyframes flame {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-30px) scaleY(1.3); }
        }
        @keyframes spark {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { 
            transform: translate(
              ${() => (Math.random() - 0.5) * 400}px,
              ${() => (Math.random() - 0.5) * 400}px
            ); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
    </>
  );
}
