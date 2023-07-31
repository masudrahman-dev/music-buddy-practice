import React from 'react';

interface CardProps {
  url: string;
}

const Card: React.FC<CardProps> = ({ url }) => {
  const textDesign: React.CSSProperties = {
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",

  };

  return (
    <div
      className="flex justify-center gap-3 border border-gray-500"
    >
      <div style={textDesign}>
        <h1 className="text-[40px] font-bold">HEADPHONE</h1>
        <p className="text-2xl font-semibold">Best Choice....</p>
      </div>
      <div className=''>
        <img
          className="w-full"
          style={{ boxShadow: "#000000ab 1px 5px 15px 8px" }}
          src={url}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
