import { useEffect, useState } from "react";

export default function OdysseusBg({ children }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Stars that spell HOMER - centered and responsive
    const centerX = width / 2;
    const centerY = height / 3;
    const spacing = Math.min(150, width / 8); // Responsive spacing

    const clueStars = [
      { top: centerY, left: centerX - spacing * 2, letter: "H", isClue: true },
      { top: centerY + 50, left: centerX - spacing, letter: "O", isClue: true },
      { top: centerY + 100, left: centerX, letter: "M", isClue: true },
      { top: centerY + 50, left: centerX + spacing, letter: "E", isClue: true },
      { top: centerY, left: centerX + spacing * 2, letter: "R", isClue: true },
    ];

    // Random filler stars
    const fillerStars = Array.from({ length: 120 }).map(() => ({
      top: Math.random() * height,
      left: Math.random() * width,
      letter: "",
      isClue: false,
    }));

    // Shooting stars
    const shootingStars = Array.from({ length: 5 }).map((_, i) => ({
      top: Math.random() * height * 0.5,
      left: Math.random() * width,
      letter: "",
      isShooting: true,
      delay: i * 3,
    }));

    setStars([...clueStars, ...fillerStars, ...shootingStars]);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white overflow-hidden">
      {/* background layer */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`${star.isShooting ? 'shooting-star' : star.isClue ? 'clue-star' : 'star'} group ${star.isClue ? 'pointer-events-auto' : ''}`}
            style={{ 
              top: star.top, 
              left: star.left, 
              position: "absolute",
              animationDelay: star.delay ? `${star.delay}s` : '0s',
              zIndex: star.isClue ? 20 : 1
            }}
          >
            {star.letter && (
              <span className="letter-tooltip">
                {star.letter}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* content layer */}
      <div className="relative z-10">{children}</div>

      <style>{`
        .star {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.8);
          animation: twinkle 3s infinite;
        }
        .clue-star {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          box-shadow: 0 0 25px 10px rgba(255, 215, 0, 0.9);
          animation: twinkle-gold 2s infinite;
          cursor: pointer;
          position: relative;
        }
        .letter-tooltip {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          color: #fef08a;
          font-size: 20px;
          font-weight: bold;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          background: rgba(0, 0, 0, 0.8);
          padding: 4px 12px;
          border-radius: 8px;
          border: 2px solid #fbbf24;
          white-space: nowrap;
        }
        .clue-star:hover .letter-tooltip {
          opacity: 1;
          top: -40px;
          transform: translateX(-50%) scale(1.1);
        }
        .clue-star:hover {
          transform: scale(1.3);
          box-shadow: 0 0 35px 15px rgba(255, 215, 0, 1);
        }
        .shooting-star {
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: white;
          animation: shoot 8s linear infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes twinkle-gold {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shoot {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(1000px) translateY(500px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
