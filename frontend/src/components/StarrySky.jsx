import React from "react";

export default function StarrySky() {
  // "HOMER" constellation stars with better positioning
  const specialStars = [
    { x: "15%", y: "20%", letter: "H", size: 3 },
    { x: "25%", y: "35%", letter: "O", size: 3 },
    { x: "35%", y: "25%", letter: "M", size: 3 },
    { x: "45%", y: "40%", letter: "E", size: 3 },
    { x: "55%", y: "30%", letter: "R", size: 3 },
  ];

  // Random filler stars with varying sizes
  const randomStars = Array.from({ length: 120 }, () => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      {/* Random background stars */}
      {randomStars.map((star, i) => (
        <div
          key={`random-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.8)`,
            animation: `twinkle ${2 + Math.random() * 2}s infinite ease-in-out ${star.delay}s`,
            opacity: 0.6 + Math.random() * 0.4,
          }}
        />
      ))}

      {/* Special HOMER constellation stars */}
      {specialStars.map((star, i) => (
        <div
          key={`homer-${i}`}
          className="absolute group cursor-pointer"
          style={{
            left: star.x,
            top: star.y,
          }}
        >
          {/* Star point */}
          <div
            className="rounded-full bg-yellow-300"
            style={{
              width: `${star.size * 2}px`,
              height: `${star.size * 2}px`,
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.5)',
              animation: 'pulse 3s infinite ease-in-out',
            }}
          />
          
          {/* Letter tooltip - appears on hover */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/80 text-yellow-400 px-3 py-1 rounded text-lg font-bold border border-yellow-400/50">
              {star.letter}
            </div>
          </div>

          {/* Connecting line hint (subtle) */}
          {i < specialStars.length - 1 && (
            <div
              className="absolute h-px bg-yellow-400/20"
              style={{
                width: '100px',
                transformOrigin: 'left',
                transform: `rotate(${Math.atan2(
                  parseFloat(specialStars[i + 1].y) - parseFloat(star.y),
                  parseFloat(specialStars[i + 1].x) - parseFloat(star.x)
                ) * (180 / Math.PI)}deg)`,
              }}
            />
          )}
        </div>
      ))}

      {/* Shooting stars */}
      <div className="shooting-star" style={{ top: '20%', animationDelay: '0s' }} />
      <div className="shooting-star" style={{ top: '50%', animationDelay: '3s' }} />
      <div className="shooting-star" style={{ top: '70%', animationDelay: '6s' }} />

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.5);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 215, 0, 0.8);
          }
        }

        @keyframes shoot {
          0% {
            transform: translateX(-100px) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(1000px) translateY(500px);
            opacity: 0;
          }
        }

        .shooting-star {
          position: absolute;
          left: 0;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
                      0 0 0 4px rgba(255, 255, 255, 0.1),
                      0 0 10px 2px rgba(255, 255, 255, 0.5);
          animation: shoot 3s linear infinite;
        }

        .shooting-star::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 1px;
          background: linear-gradient(90deg, white, transparent);
        }
      `}</style>

      {/* Hidden hint in DOM */}
      <div style={{ display: 'none' }} data-constellation="HOMER">
        Look to the stars for guidance. The ancient poet's name shines bright.
      </div>
    </div>
  );
}
