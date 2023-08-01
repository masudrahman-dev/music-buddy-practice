import React from "react";

import Balls from "./Balls";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

const Carausel: React.FC = () => {

  return (
    <div className="flex justify-between items-center  my-20  lg:w-3/5 w-4/5 mx-auto">
      <PreviousButton />
      <div className="flex gap-3 items-center ">
        <Balls />
      </div>
      <NextButton />
    </div>
  );
};

export default Carausel;
