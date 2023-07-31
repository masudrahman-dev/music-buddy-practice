import FooterBottom from "./FooterBottom";
import FooterHeader from "./FooterHeader";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="bg-[#EFEFEF] md:py-[145px] pb-[190px] pt-[145px]">
      <div className=" flex flex-col md:gap-28 gap-12    ">
        <div>
          <FooterHeader />
        </div>
        <div className="w-4/5   mx-auto">
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
