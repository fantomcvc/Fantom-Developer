
import React from 'react';

const GhostLogo = () => {
  return (
    <svg 
      className="w-24 h-24 mx-auto"
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Ghost body with wavy bottom */}
        <path 
          d="M100 20c-38.66 0-70 31.34-70 70v40c0 0 10-15 20-5s20 5 30-5 20-5 30 5 20 15 30 5 10-5 10-5v-35c0-38.66-31.34-70-70-70z" 
          fill="hsl(252 90% 67%)"
        />
        {/* Eyes */}
        <circle cx="75" cy="80" r="8" fill="white" />
        <circle cx="125" cy="80" r="8" fill="white" />
        {/* Mouth */}
        <path 
          d="M85 110c10 10 20 10 30 0"
          fill="none" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        {/* Rosy cheeks */}
        <circle cx="70" cy="95" r="5" fill="rgba(255,182,193,0.5)" />
        <circle cx="130" cy="95" r="5" fill="rgba(255,182,193,0.5)" />
      </g>
    </svg>
  );
};

export default GhostLogo;
