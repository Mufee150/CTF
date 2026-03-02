// src/pages/Circe.jsx
import ChallengePage from "../components/ChallengePage";

const NAME = "circe";
const NUMBER = 9;
const TITLE = "Circe";
const HASH = "6144545e67abcfeb8ce053127fc5189ea9f094454ec54ec9dd7bf1774d74d62d";
const CODE = "*";

export default function Circe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-pink-950 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            🧙‍♀️ Circe's Spell 🧙‍♀️
          </h1>
          <p className="text-xl text-gray-300">
            The sorceress whispers ancient words...
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-pink-500/30 space-y-6">
          <div className="text-center space-y-6">
            <div 
              className="text-8xl py-8 cursor-pointer hover:scale-110 transition-transform"
              data-spell="bruteforceme"
            >
              🔮
            </div>
            
            <p className="text-gray-400 italic">
              "The crystal ball holds many secrets..."
            </p>

            <p className="text-sm text-gray-500">
              💡 Looking deeper reveals the magic
            </p>
          </div>

          <ChallengePage
            title={TITLE}
            name={NAME}
            number={NUMBER}
            hash={HASH}
            code={CODE}
            nextRoute="/challenge/sirens"
          />
        </div>
      </div>
    </div>
  );
}