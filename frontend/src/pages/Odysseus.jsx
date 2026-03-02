import ChallengeLogic from "../components/ChallengeLogic";
import ChallengeUI from "../components/ChallengeUI";
import OdysseusBg from "../components/backgrounds/OdysseusBg";

const NAME = "odysseus";
const NUMBER = 1;
const TITLE = "Odysseus";
const HASH = "2aaab795b3836904f82efc6ca2285d927aed75206214e1da383418eb90c9052f";
const CODE = "H";

export default function Odysseus() {
  return (
    <OdysseusBg>
      <div className="min-h-screen flex flex-col">
        {/* Top spacer to keep stars visible */}
        <div className="flex-1 min-h-[55vh]"></div>
        
        {/* Challenge content at bottom */}
        <div className="relative z-20 pb-12 px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-500/30 shadow-2xl">
              <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-300 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                ✨ Odysseus' Starry Sky ✨
              </h1>
              <p className="text-center text-gray-300 text-lg mb-2">
                The ancient hero Odysseus navigated by the stars.
              </p>
              <p className="text-center text-gray-400 text-sm mb-4">
                Look to the heavens and find what the golden stars spell. Hover to reveal the letters.
              </p>
              
              <ChallengeLogic
                title={TITLE}
                name={NAME}
                number={NUMBER}
                hash={HASH}
                code={CODE}
                nextRoute="/challenge/penelope"
              >
                {(props) => (
                  <div className="space-y-4">
                    <input
                      type="password"
                      value={props.value}
                      onChange={(e) => props.setValue(e.target.value)}
                      placeholder="Enter the flag (what the stars spell)"
                      className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    {props.err && <p className="text-red-400 text-center">{props.err}</p>}
                    <button 
                      type="submit" 
                      onClick={props.onSubmit}
                      className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-3 font-semibold transition"
                    >
                      Submit Flag
                    </button>
                  </div>
                )}
              </ChallengeLogic>
            </div>
          </div>
        </div>
      </div>
    </OdysseusBg>
  );
}
