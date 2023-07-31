
import menuIcon from "../../assets/images/icons/menu-icon.svg";
import logoIcon from "../../assets/images/icons/logo-icon.svg";

const HeaderMenu = () => {
  const textStroke = {
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black",
  };

  return (
    <div className="  md:px-12 md:mt-3 px-2 mt-2  z-40 ">
      <div className="flex  justify-between  ">
        <div className="justify-self-start">
          <div className=" flex items-center gap-1 lg:gap-3 ">
            <div className="md:w-12 w-[20px]">
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
          <div className="lg:w-[21.43px] w-[12px]">
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
  );
};

export default HeaderMenu;
