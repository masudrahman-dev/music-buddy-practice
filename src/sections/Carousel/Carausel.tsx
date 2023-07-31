import React from "react";
import preIcon from "../../assets/images/icons/previous_arrow.svg";
import nextIcon from "../../assets/images/icons/next_arrow.svg";

const Carausel: React.FC = () => {
  const ball = " bg-black rounded-full border";

  return (
    <div className="flex justify-between items-center my-20 mx-[305px]">
      <div className="w-[42px]  opacity-50 inline-flex items-center justify-center gap-2">
        <img className="w-full" src={preIcon} alt="" />
        <span>Previous</span>
      </div>
      <div className="flex gap-3 items-center ">
        <div className={`w-[11px] h-[11px] opacity-50 ${ball}`}></div>
        <div className={`w-[16px] h-[16px] opacity-80 ${ball}`}></div>
        <div className="w-[27px] h-[27px]  rounded-full border-2  border-black flex justify-center items-center">
          <div className="w-[11px] h-[11px] bg-black rounded-full border"></div>
        </div>
        <div className={`w-[16px] h-[16px] opacity-80 ${ball}`}></div>
        <div className={`w-[11px] h-[11px] opacity-70 ${ball}`}></div>
        <div className={`w-[9px] h-[9px] opacity-40 ${ball}`}></div>
      </div>
      <div className="w-[42px]  opacity-50 inline-flex items-center justify-center gap-2">
        <img className="w-full" src={nextIcon} alt="" />
        <span>Next</span>
      </div>
    </div>
  );
};

export default Carausel;
