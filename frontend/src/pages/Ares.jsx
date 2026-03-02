import ChallengePage from "../components/ChallengePage";

const NAME = "ares";
const NUMBER = 11;
const TITLE = "Ares";
const HASH = "716fa99f93d9afbacb0f0da959f0a53c1f56681e59e38a99a3e1c945412e6e47";
const CODE = "⚔️";

export default function Ares() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
            ⚔️ Ares' Challenge ⚔️
          </h1>
          <p className="text-xl text-gray-300">
            The god of war tests your wit.
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-red-500/30 space-y-6">
          <div className="text-center space-y-6">
            <p className="text-lg italic text-red-300">
              "I am the sound before the strike,<br />
              The roar that makes the enemy take flight.<br />
              Soldiers shout me loud and clear,<br />
              To fill their foes with dread and fear.<br />
              <br />
              What am I?"<br />
            </p>
            
            <div className="text-6xl py-4">
              🗣️ ⚔️ 💥
            </div>
            
            <p className="text-sm text-gray-500">
              💡 One word, all lowercase
            </p>
          </div>

          <ChallengePage
            title={TITLE}
            name={NAME}
            number={NUMBER}
            hash={HASH}
            code={CODE}
            nextRoute="/challenge/hades"
          />
        </div>
      </div>
    </div>
  );
}
