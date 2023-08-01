import logoIcon from "../../assets/images/icons/logo-icon.svg";
import twitterIcon from "../../assets/images/icons/twitter.svg";
import youtubeIcon from "../../assets/images/icons/youtube.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import instragramIcon from "../../assets/images/icons/instragram.svg";
import tiktokIcon from "../../assets/images/icons/tiktok.svg";

const FooterHeader = () => {
  const textStroke = {
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black",
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lg:w-[138px] w-[30px] ">
        <img className="w-full" src={logoIcon} alt="" />
      </div>
      {/* lg:-mt-1  mt-3 mb-3 */}
      <h1
        className="lg:text-[100px] text-3xl font-black  text-transparent md:my-10 my-4"
        style={textStroke}
      >
        MUSIC BUDDY
      </h1>
      <div className="flex items-center md:gap-8 gap-[30px] ">
        <div className="lg:w-[13.01px] w-[9.01px]">
          <img className="w-full" src={facebookIcon} alt="" />
        </div>
        <div className="lg:w-[22.01px] w-[13.01px]">
          <img className="w-full" src={instragramIcon} alt="" />
        </div>
        <div className="lg:w-[22.01px] w-[13.01px]">
          <img className="w-full" src={twitterIcon} alt="" />
        </div>
        <div className="lg:w-[22.01px] w-[13.01px]">
          <img src={tiktokIcon} alt="" />
        </div>
        <div className="lg:w-[22.01px] w-[13.01px]">
          <img className="w-full" src={youtubeIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;
