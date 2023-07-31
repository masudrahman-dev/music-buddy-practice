import React from 'react';

interface CardProps {
  url: string;
}

const Card: React.FC<CardProps> = ({ url }) => {
  const textDesign: React.CSSProperties = {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "flex-start",
    // marginLeft: '-6rem',
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",

  };

  return (
    <div
      className="relative flex justify-center gap-3 border border-gray-500"
      style={{ position: "relative" }}
    >
      <div style={textDesign}>
        <h1 className="text-5xl font-bold">HEADPHONE</h1>
        <p className="text-2xl font-semibold">Best Choice....</p>
      </div>
      <div>
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
