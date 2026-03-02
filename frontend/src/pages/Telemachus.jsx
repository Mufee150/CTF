import ChallengePage from "../components/ChallengePage";

const NAME = "telemachus";
const NUMBER = 3;
const TITLE = "Telemachus";
const HASH = "80a76608587fa6f9ae56b5b4b661f884dc924d054914735fa06963ca515e8097";
const CODE = "@";

export default function Telemachus() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-950 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            ⚔️ Telemachus' Quest ⚔️
          </h1>
          <p className="text-xl text-gray-300">
            Telemachus found a scroll in his father's chamber. Can you decode it?
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 space-y-6">
          <div className="text-center space-y-4">
            <div className="text-sm text-gray-400 mb-4">
              <p className="italic">"Father left a message in strange symbols..."</p>
            </div>

            <div className="bg-blue-900/30 p-6 rounded-xl border border-cyan-500/20">
              <p className="text-sm text-gray-500 mb-2 font-mono">Ancient Scroll:</p>
              <p className="text-2xl font-mono tracking-wider text-cyan-300 break-words">
                c2VhcXVlc3Q=
              </p>
            </div>

            <div className="mt-6 text-sm text-gray-400 space-y-2">
              <p>🔍 <strong>Hint:</strong> This encoding is commonly used on the web</p>
            </div>
          </div>

          <ChallengePage
            title={TITLE}
            name={NAME}
            number={NUMBER}
            hash={HASH}
            code={CODE}
            nextRoute="/challenge/athena"
          />
        </div>
      </div>
    </div>
    </>
  );
}
