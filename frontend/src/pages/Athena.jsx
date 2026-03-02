import ChallengePage from "../components/ChallengePage";

const NAME = "athena",
  NUMBER = 4,
  TITLE = "Athena";
const HASH =
  "f0483107f8792b3ecb4a07279debf58aa2c271d26f629c6495dc5f046b0555a0";
const CODE = "%";

export default function Athena() {
  return (
    <>
      <style>{`
        /* Welcome to Athena's wisdom challenge! 
           Look closely at the hex color values in CSS...
           They might spell something in binary! 
           Convert hex to binary and look at bit 7 (ASCII) */
        
        :root {
          --athena-bg: #7a7a7a; /* 01111010 = 'z' */
          --primary-color: #656565; /* 01100101 = 'e' */
          --glow: #727272; /* 01110010 = 'r' */
        }

        .athena-wisdom {
          border: 1px solid #6f6f6f; /* 01101111 = 'o' */
          box-shadow: 0 0 0 1px #707070; /* 01110000 = 'p' */
          background: linear-gradient(to bottom, #6f6f6f, #696969); /* 'o' + 'i' */
        }

        .athena-secret {
          outline-color: #6e6e6e; /* 01101110 = 'n' */
          caret-color: #747474; /* 01110100 = 't' */
        }

        @media (max-width: 600px) {
          body { 
            accent-color: #636363; /* 01100011 = 'c' */
          }
        }

        .hidden-layer {
          text-decoration-color: #6f6f6f; /* 01101111 = 'o' */
          border-bottom: 1px solid #727272; /* 01110010 = 'r' */
        }

        button:hover {
          border-color: #656565; /* 01100101 = 'e' */
        }

        footer {
          scrollbar-color: #000000 #fff; /* filler */
        }

        /* Pattern: zeropointcore */
        /* Hex colors spell it in binary when you convert to ASCII */
      `}</style>

      {/* Visual hint */}
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        left: '20px', 
        color: 'rgba(255,255,255,0.1)',
        fontSize: '10px',
        fontFamily: 'monospace'
      }}>
        💡 Athena whispers: "CSS hex colors can hide binary secrets..."
      </div>

      <ChallengePage
        title={TITLE}
        name={NAME}
        number={NUMBER}
        hash={HASH}
        code={CODE}
        nextRoute="/challenge/poseidon"
      />
    </>
  );
}