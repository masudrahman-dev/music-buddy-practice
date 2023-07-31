import "./Header.css";
import SocialShared from "./SocialShared";
import HeaderImg from "./HeaderImg";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="   bg_header ">
      <div className=" relative ">
        {/* topbar */}
        <HeaderMenu />
        {/* big img */}
        <HeaderImg />
        {/* social */}

        <div className=" hidden lg:block absolute top-3/4 z-10 left-[38px] -translate-x-1/2 -translate-y-1/2">
          <SocialShared />
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Header;
