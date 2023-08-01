import React from "react";
import preIcon from "../../assets/images/icons/previous_arrow.svg";
const PreviousButton = () => {
  return (
    <div className="md:w-[42px] w-9  opacity-50 inline-flex items-center justify-center gap-2">
      <img className="w-full" src={preIcon} alt="" />
      <span>Previous</span>
    </div>
  );
};

export default PreviousButton;
