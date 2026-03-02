import ChallengePage from "../components/ChallengePage";

const NAME = "poseidon";
const NUMBER = 5;
const TITLE = "Poseidon";
const HASH = "3ad63493e71a28e268cdce310498f59100e938e4d85a9e0da5a0daa981ef9dce";
const CODE = "Z";

export default function Poseidon() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-cyan-950 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            🔱 Poseidon's Depths 🔱
          </h1>
          <p className="text-xl text-gray-300">
            Navigate the mathematical currents of the sea to proceed.
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 space-y-6">
          <div className="text-center space-y-6">
            <div className="text-sm text-gray-400">
              <p className="italic">"Poseidon speaks in the language of the deep..."</p>
            </div>

            <div className="bg-blue-900/30 p-8 rounded-xl border border-blue-500/20 space-y-6">
              <p className="text-sm text-gray-500 mb-2">The Sea God's Cipher:</p>
              <div className="text-center space-y-4">
                <div className="bg-cyan-900/30 p-4 rounded-lg">
                  <p className="text-lg text-gray-400 mb-2">If <span className="text-cyan-300 font-bold">CALENDAR</span> is encoded as</p>
                  <p className="text-3xl font-mono text-cyan-400 tracking-wider">BBFKEMSZ</p>
                </div>
                <div className="text-4xl text-blue-400">↓</div>
                <div className="bg-cyan-900/30 p-4 rounded-lg">
                  <p className="text-lg text-gray-400 mb-2">Then how is <span className="text-yellow-300 font-bold">HEADLINE</span> encoded?</p>
                  <p className="text-2xl text-gray-500">_ _ _ _ _ _ _ _</p>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-400 space-y-2">
              <p>🔍 <strong>Hint:</strong> Each letter follows its own rule based on position</p>
              <p>🌊 The depths hide a pattern in the encoding</p>
            </div>
          </div>

          <ChallengePage
            title={TITLE}
            name={NAME}
            number={NUMBER}
            hash={HASH}
            code={CODE}
            nextRoute="/challenge/zeus"
          />
        </div>
      </div>
    </div>
    </>
  );
}
