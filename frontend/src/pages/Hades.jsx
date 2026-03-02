import ChallengePage from "../components/ChallengePage";

const NAME = "hades";
const NUMBER = 12;
const TITLE = "Hades";
const HASH = "a42e815c58f3977fe531a80ffd4659121c3b9f876a89869042816c369ed80776";
const CODE = "💀";

export default function Hades() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 via-gray-400 to-purple-500 bg-clip-text text-transparent">
            💀 Hades' Puzzle 💀
          </h1>
          <p className="text-xl text-gray-300">
            The souls of the underworld follow a mysterious pattern.
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-purple-500/30 space-y-6">
          <div className="text-center space-y-6">
            <p className="text-lg text-gray-400">Find the next number in the sequence:</p>
            
            <div className="flex items-center justify-center gap-4 text-4xl font-mono">
              <span className="text-purple-300">15</span>
              <span className="text-gray-500">,</span>
              <span className="text-purple-300">16</span>
              <span className="text-gray-500">,</span>
              <span className="text-purple-300">36</span>
              <span className="text-gray-500">,</span>
              <span className="text-purple-300">117</span>
              <span className="text-gray-500">,</span>
              <span className="text-purple-400 animate-pulse text-5xl">?</span>
            </div>

            <div className="flex justify-center gap-3 text-6xl py-4">
              💀 🔢 💀
            </div>

            <p className="text-sm text-gray-500">
              💡 Hint: Study the relationship between consecutive numbers
            </p>
          </div>

          <ChallengePage
            title={TITLE}
            name={NAME}
            number={NUMBER}
            hash={HASH}
            code={CODE}
            nextRoute="/challenge/apollo"
          />
        </div>
      </div>
    </div>
  );
}
