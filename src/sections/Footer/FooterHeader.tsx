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
      <div className="lg:w-[138px] ">
        <img className="w-full" src={logoIcon} alt="" />
      </div>
      <h1
        className="lg:text-[100px] text-5xl font-black  text-transparent lg:-mt-1  mt-3 mb-3"
        style={textStroke}
      >
        MUSIC BUDDY
      </h1>
      <div className="flex items-center gap-8">
        <div>
          <img src={facebookIcon} alt="" />
        </div>
        <div>
          <img src={instragramIcon} alt="" />
        </div>
        <div>
          <img src={twitterIcon} alt="" />
        </div>
        <div>
          <img src={tiktokIcon} alt="" />
        </div>
        <div>
          <img src={youtubeIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;
