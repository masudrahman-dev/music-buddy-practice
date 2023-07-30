import menuIcon from "../../assets/images/icons/menu-icon.svg";
import logoIcon from "../../assets/images/icons/logo-icon.svg";
import twitterIcon from "../../assets/images/icons/twitter.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import youtubeIcon from "../../assets/images/icons/youtube.svg";
import headerImg from "../../assets/images/img/header-img.png";
import "./Header.css";
// bg-gradient-to-t from-indigo-500 from-50% via-slate-500 via-50%
const Header = () => {
  const textStroke = {
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black",
  };

  return (
    <div className="  border">
        <div className=" w-full px-12 mt-3  z-40 ">
          <div className="flex justify-between  ">
            <div className="justify-self-start">
              <div className=" flex items-center gap-3 ">
                <div>
                  <img src={logoIcon} alt="" />
                </div>
                <span
                  className="text-4xl font-black text-transparent"
                  style={textStroke}
                >
                  MUSIC BUDDY
                </span>
              </div>
            </div>
            <div className=" flex flex-col items-center  ">
              <div>
                <img src={menuIcon} alt="" />
              </div>
              <span
                className="text-4xl font-black text-transparent mt-2 "
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
      <div className=" w-full test relative ">

        {/* topbar */}
        <div className="mx-[150px] -mt-[100px]  tracking-widest  pb-5">
          <img className="w-full" src={headerImg} alt="" />

          <p className="text-6xl font-bold">OUR</p>
          <h1
            className="text-9xl  font-black text-transparent"
            style={textStroke}
          >
            BLOG
          </h1>
        </div>
        {/* social */}

        <div className="absolute top-3/4 z-10 left-10 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center">
            <div className="flex flex-col justify-center items-center gap-3 ">
              <div>
                <img src={twitterIcon} alt="" />
              </div>
              <div>
                <img src={youtubeIcon} alt="" />
              </div>
              <div>
                <img src={facebookIcon} alt="" />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-1 h-12 bg-black border"></div>
              </div>
              <p
                className="text-sm font-medium"
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
