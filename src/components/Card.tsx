import React from "react";

interface CardProps {
  url: string;
}

const Card: React.FC<CardProps> = ({ url }) => {
  const textDesign: React.CSSProperties = {
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
  };


  return (
    <div className="flex justify-center gap-3  border-gray-500 hover:scale-105 transition-all delay-75">
      <div style={textDesign}>
        <h1 className="md:text-[43px] text-base font-bold">HEADPHONE</h1>
        <p className="md:text-[25px] text-[12px] font-semibold">Best Budget Headset...</p>
      </div>
      <div className="flex">
        <img
          className=" "
          style={{ boxShadow: "rgba(0, 0, 0, 0.67) 3px 5px 20px 1px" }}
          src={url}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;

