import nextIcon from "../../assets/images/icons/next_arrow.svg";
const NextButton = () => {
  return (
    <div className="md:w-[42px] w-9  opacity-50 flex items-center justify-center gap-2">
      <span className="text-shadow-lg">Next</span>
      <img className="w-full " src={nextIcon} alt="" />
    </div>
  );
};

export default NextButton;
