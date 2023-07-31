import menuIcon from "../../assets/images/icons/menu-icon.svg";
import logoIcon from "../../assets/images/icons/logo-icon.svg";
import twitterIcon from "../../assets/images/icons/twitter.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import youtubeIcon from "../../assets/images/icons/youtube.svg";
import headerImg from "../../assets/images/img/header-img.png";
import "./Header.css";

const Header = () => {
  const textStroke = {
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black",
  };

  return (
    <div className="  border bg_header ">
      <div className="  px-12 mt-3  z-40 ">
        <div className="flex  justify-between  ">
          <div className="justify-self-start">
            <div className=" flex items-center gap-1 lg:gap-3 ">
              <div className="lg:w-[48.7] w-[20px]">
                <img className="w-full" src={logoIcon} alt="" />
              </div>
              <span
                className="lg:text-4xl font-black text-transparent"
                style={textStroke}
              >
                MUSIC BUDDY
              </span>
            </div>
          </div>
          <div className=" flex flex-col items-center  ">
            <div className="w-5">
              <img className="w-full" src={menuIcon} alt="" />
            </div>
            <span
              className="lg:text-4xl font-black text-transparent mt-2 "
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "black",
              }}
            >
              MENU
            </span>
          </div>
        </div>
      </div>
      <div className=" w-full relative ">
        {/* topbar */}
        <div className="lg:mx-[150px] lg:-mt-[80px] -mt-[50px]   pb-3 lg:pb-5">
          <div className=" max-w-[1605.68px] mx-auto">
            <img className="w-full" src={headerImg} alt="" />
            <div className="tracking-widest">
              <p className="lg:text-6xl text-2xl font-bold">OUR</p>
              <h1
                className="lg:text-[180px] text-4xl  font-black text-transparent"
                style={textStroke}
              >
                BLOG
              </h1>
            </div>
          </div>
        </div>

        {/* social */}

        <div className=" hidden lg:block absolute top-3/4 z-10 left-10 -translate-x-1/2 -translate-y-1/2">
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
                <div className="w-1 lg:h-12 h-7 bg-black border"></div>
              </div>
              <p
                className="lg:text-sm text-[10px] font-medium"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                FOLLOW US
              </p>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Header;
