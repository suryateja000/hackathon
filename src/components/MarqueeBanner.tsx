import React from 'react';

const spanStyle: React.CSSProperties = {
  marginRight: "3rem",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "yellow",
};

export const MarqueeBanner: React.FC = () => {
  return (
    <div className="overflow-hidden border-t-2 border-b-2 border-yellow-400 p-2">
      <div className="whitespace-nowrap animate-marquee inline-block">
        <span style={spanStyle}>
          🚀 problem statements are now live! 🚀
        </span>
        <span style={spanStyle}>
          🚀 problem statements are now live! 🚀
        </span>
        <span style={spanStyle}>
          🚀 problem statements are now live! 🚀
        </span>
      </div>

      {/* Inline Keyframes Style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};
