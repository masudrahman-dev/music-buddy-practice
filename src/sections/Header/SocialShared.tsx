import twitterIcon from "../../assets/images/icons/twitter.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import youtubeIcon from "../../assets/images/icons/youtube.svg";

const SocialShared = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center items-center gap-3 ">
        <div className="lg:w-[20px] ">
          <img className="w-full" src={twitterIcon} alt="" />
        </div>
        <div className="w-[20px] ">
          <img className="w-full" src={youtubeIcon} alt="" />
        </div>
        <div className="w-[13px] ">
          <img className="w-full" src={facebookIcon} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-1 lg:h-[91px] h-7 bg-black border"></div>
        </div>
        <p
          className="lg:text-[20px] text-[10px] font-medium"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          FOLLOW US
        </p>
      </div>
    </div>
  );
};

export default SocialShared;
