import ChallengePage from "../components/ChallengePage";

const NAME = "penelope";
const NUMBER = 2;
const TITLE = "Penelope";
const HASH = "04d75cde9beeb4d14f7f4e95dab88b6f9398f71eb837000c2cffc1600418a1e0";
const CODE = "g";

export default function Penelope() {
  return (
    <>
      <style>{`
        body {
          background: linear-gradient(to bottom right, #581c87, #701a75, #000);
        }
      `}</style>
      
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: '800px', width: '100%', color: 'white' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(to right, #ec4899, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: '1rem' }}>
              🧵 Penelope's Loom 🧵
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db' }}>
              While Odysseus was away, Penelope wove a tapestry with a secret message.
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(16px)', borderRadius: '1rem', padding: '2rem', border: '2px solid rgba(236,72,153,0.3)', boxShadow: '0 0 40px rgba(236,72,153,0.2)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "I wove by day, unraveled by night..."
              </p>

              <div style={{ background: 'rgba(112,26,117,0.3)', padding: '2rem', borderRadius: '0.75rem', border: '1px solid rgba(168,85,247,0.2)', marginBottom: '2rem' }}>
                <p style={{ fontSize: '2rem', fontFamily: 'monospace', letterSpacing: '0.1em', color: '#f9a8d4' }}>
                  VASVAVGLYBBC
                </p>
              </div>

              <div style={{ fontSize: '0.875rem', color: '#9ca3af', textAlign: 'left' }}>
                <p>🔍 <strong>Hint:</strong> This is a substitution cipher</p>
                <p>🔄 Each letter is shifted in the alphabet</p>
                <p>🎯 The shift is lucky number 13</p>
              </div>
            </div>

            <ChallengePage
              title={TITLE}
              name={NAME}
              number={NUMBER}
              hash={HASH}
              code={CODE}
              nextRoute="/challenge/telemachus"
            />
          </div>
        </div>
      </div>
    </>
  );
}

