import ChallengePage from "../components/ChallengePage";

const NAME = "calypso";
const NUMBER = 8;
const TITLE = "Calypso";
const HASH =
  "f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b";
const CODE = "Q";

export default function Calypso() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-950 via-indigo-950 to-black text-white">
      <div className="max-w-2xl w-full bg-purple-900/20 backdrop-blur-sm rounded-lg p-8 border-2 border-purple-500/40 shadow-2xl">
        <h1 className="text-4xl font-bold text-purple-300 mb-6 text-center">
          🏝️ Calypso's Island Riddle
        </h1>
        
        <div className="text-purple-200 space-y-4 mb-8">
          <p className="text-lg italic">
            "Seven years I kept Odysseus on my island shore,<br />
            Each year with riddles, puzzles, and much more.<br />
            Solve this ancient mystery if you seek to flee..."
          </p>
          
          <div className="bg-purple-950/40 p-6 rounded-lg border border-purple-400/30 mt-6">
            <p className="text-xl font-semibold text-purple-100 mb-4">The Riddle:</p>
            <p className="text-purple-200 leading-relaxed">
              I sailed <span className="text-yellow-300 font-bold">seven years</span> across the wine-dark sea,<br />
              Through <span className="text-yellow-300 font-bold">ten long years</span> of war before I could be free,<br />
              From <span className="text-yellow-300 font-bold">Troy</span> to <span className="text-yellow-300 font-bold">Ithaca</span> my journey finally ends,<br />
              How many total years before I see my friends?
            </p>
            
            <div className="mt-6 pt-4 border-t border-purple-400/20">
              <p className="text-sm text-purple-300 italic">
                💡 Hint: Count ALL the years in Odysseus's journey
              </p>
            </div>
          </div>

        </div>

        <div className="text-center text-purple-300/70 text-sm mb-4">
          Enter the total number of years below ⬇️
        </div>

        <ChallengePage
          title={TITLE}
          name={NAME}
          number={NUMBER}
          hash={HASH}
          code={CODE}
          nextRoute="/challenge/circe"
        />
      </div>
    </div>
    </>
  );
}
