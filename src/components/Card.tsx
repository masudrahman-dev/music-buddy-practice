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
    <div className="flex justify-center gap-3  border-gray-500">
      <div style={textDesign}>
        <h1 className="lg:text-[43px] font-bold">HEADPHONE</h1>
        <p className="lg:text-[25px] font-semibold">Best Budget Headset...</p>
      </div>
      <div className="flex">
        <img
          className=" "
          style={{ boxShadow: "#000000ab 1px 5px 15px 8px" }}
          src={url}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;

