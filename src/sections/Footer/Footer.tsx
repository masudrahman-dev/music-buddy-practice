import FooterBottom from "./FooterBottom";
import FooterHeader from "./FooterHeader";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="bg-[#EFEFEF] py-[145px]">
      <div className=" flex flex-col gap-28 max-w-[1294px] mx-auto">
        <div>
          <FooterHeader />
        </div>
        <div className="">
          <FooterNav />
        </div>
        <div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
