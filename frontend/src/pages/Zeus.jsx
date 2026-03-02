import { useState } from "react";
import ChallengePage from "../components/ChallengePage";

const NAME = "zeus";
const NUMBER = 6;
const TITLE = "Zeus";
const HASH = "31489056e0916d59fe3add79e63f095af3ffb81604691f21cad442a85c7be617";
const CODE = "$";

export default function Zeus() {
  const [hoveredCell, setHoveredCell] = useState(null);
  
  // Hidden pattern - some cells contain secret data
  const grid = [
    ["⚡", "☁️", "⚡", "☁️", "⚡", "☁️", "⚡"],
    ["☁️", "⚡", "☁️", "⚡", "☁️", "⚡", "☁️"],
    ["⚡", "☁️", "⚡", "☁️", "⚡", "☁️", "⚡"],
    ["☁️", "⚡", "☁️", "⚡", "☁️", "⚡", "☁️"],
    ["⚡", "☁️", "⚡", "☁️", "⚡", "☁️", "⚡"],
    ["☁️", "⚡", "☁️", "⚡", "☁️", "⚡", "☁️"],
    ["⚡", "☁️", "⚡", "☁️", "⚡", "☁️", "⚡"],
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-purple-950 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent animate-pulse">
            ⚡ Zeus' Throne ⚡
          </h1>
          <p className="text-xl text-gray-300">
            The sky god's power is hidden in plain sight. Look beyond what you see.
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-yellow-500/30 shadow-2xl shadow-yellow-500/20 space-y-6">
          <div className="text-center space-y-6">
            <div className="text-sm text-gray-400">
              <p className="italic">"Not all that glitters is gold, but all that's hidden can be found..."</p>
            </div>

            <div className="bg-purple-900/30 p-6 rounded-xl border border-yellow-500/20">
              <p className="text-sm text-gray-500 mb-4">Zeus' Lightning Grid:</p>
              <div id="zeus-lightning-grid" className="grid grid-cols-7 gap-2 max-w-md mx-auto">
                {grid.map((row, i) => 
                  row.map((cell, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`w-10 h-10 flex items-center justify-center text-2xl rounded cursor-pointer transition-all duration-200 ${
                        cell === "⚡" 
                          ? "bg-yellow-500/20 hover:bg-yellow-500/40 hover:scale-110" 
                          : "bg-gray-700/20 hover:bg-gray-600/40"
                      }`}
                      data-power={cell === "⚡" ? "zeus" : "mortal"}
                      onMouseEnter={() => setHoveredCell(`${i}-${j}`)}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      {cell}
                    </div>
                  ))
                )}
              </div>
              {/* Hidden answer - visible in Inspector */}
              <span id="zeus-secret" style={{position: 'absolute', left: '-9999px', opacity: 0}}>
                FLAG: 47 - The answer is forty-seven
              </span>
            </div>

            <div className="mt-6 text-sm text-gray-400 space-y-2">
              <p>🔍 <strong>Hint:</strong> Mortals see only the surface, gods see the code beneath</p>
              <p>⚡ Use your divine tools to see what Zeus has hidden</p>
            </div>
          </div>

          <ChallengePage
            title={TITLE}
            name={NAME}
            number={NUMBER}
            hash={HASH}
            code={CODE}
            nextRoute="/challenge/hermes"
          />
        </div>
      </div>
    </div>
    </>
  );
}
