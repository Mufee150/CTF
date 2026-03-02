import ChallengePage from "../components/ChallengePage";

const NAME = "sirens";
const NUMBER = 10;
const TITLE = "Sirens";
const HASH = "982cba6c0950686e37519d347bfa51deb9c933de7844a3800973b65d78c4667e";
const CODE = "!";

export default function Sirens() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-black text-white flex items-center justify-center p-8">
        <div className="max-w-3xl w-full space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              🌊 The Sirens' Song 🌊
            </h1>
            <p className="text-xl text-gray-300">
              Their enchanting voices sing in mathematical harmony...
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-cyan-500/30 space-y-6">
            <div className="text-center space-y-6">
              <div className="text-7xl mb-4">🎵</div>
              <p className="text-lg italic text-cyan-300">
                "Each of us sings an incomplete melody...<br />
                Find the missing note in our harmonic sequences"
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* First Siren */}
                <div className="bg-blue-900/30 p-6 rounded-xl border border-cyan-500/50">
                  <div className="text-5xl mb-3">🧜‍♀️</div>
                  <p className="text-sm text-cyan-300 mb-2">First Siren's Sequence:</p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-2xl font-mono text-cyan-400">
                      3, ?, 10, 15
                    </p>
                  </div>
                </div>

                {/* Second Siren */}
                <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/50">
                  <div className="text-5xl mb-3">🧜‍♀️</div>
                  <p className="text-sm text-purple-300 mb-2">Second Siren's Sequence:</p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-2xl font-mono text-purple-400">
                      1, ?, 2, 3, 5
                    </p>
                  </div>
                </div>

                {/* Third Siren */}
                <div className="bg-pink-900/30 p-6 rounded-xl border border-pink-500/50">
                  <div className="text-5xl mb-3">🧜‍♀️</div>
                  <p className="text-sm text-pink-300 mb-2">Third Siren's Sequence:</p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-2xl font-mono text-pink-400">
                      1, 3, ?, 15, 31
                    </p>
                  </div>
                </div>

                {/* Fourth Siren */}
                <div className="bg-indigo-900/30 p-6 rounded-xl border border-indigo-500/50">
                  <div className="text-5xl mb-3">🧜‍♀️</div>
                  <p className="text-sm text-indigo-300 mb-2">Fourth Siren's Sequence:</p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-2xl font-mono text-indigo-400">
                      1, 2, ?, 8, 16
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-6 rounded-xl border border-cyan-500/30">
                <p className="text-xl text-yellow-300 mb-3">🎼 The Hidden Code:</p>
                <p className="text-lg text-gray-300">
                  Each missing number forms one digit of the answer
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                💡 Hint: Find the pattern, fill the gap
              </p>
            </div>
          </div>

          <ChallengePage
            title={TITLE}
            name={NAME}
            number={NUMBER}
            hash={HASH}
            code={CODE}
            nextRoute="/challenge/ares"
          />
        </div>
      </div>
    </>
  );
}
