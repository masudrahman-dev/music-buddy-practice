import React from 'react';

interface BallProps {
  width: number;
  height: number;
  opacity: number;
}

const Ball: React.FC<BallProps> = ({ width, height, opacity }) => {
  return (
    <div className={`w-[${width}px] h-[${height}px] opacity-${opacity} bg-black rounded-full border`} />
  );
};

export default Ball;
