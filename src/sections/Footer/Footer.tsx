import FooterHeader from "./FooterHeader";
import FooterNavBox from "./FooterNavBox";

const Footer = () => {
  return (
    <footer className="bg-[#EFEFEF] py-[145px]">
      <div className=" flex flex-col gap-28 max-w-[1294px] mx-auto">
        <FooterHeader />
        <div>
          <div className="flex justify-between  ">
            <FooterNavBox
              pages={"PAGES"}
              link_1={"Home"}
              link_2={"ABOUT US"}
              link_3={"CONTACT US"}
            />

            <FooterNavBox
              pages={"PAGES"}
              link_1={"+00 000 000"}
              link_2={"+00 000 000"}
              link_3={"info@company.com"}
            />
            <FooterNavBox pages={"PAGES"} link_1={`Company location, World`} />
          </div>
        </div>
        <div className="text-center ">
          <div className="w-full h-1 bg-black border  rounded-full"></div>
          <h3 className="text-base text-black mt-4">
            <span className="opacity-50">@Copyright</span>{" "}
            <span className="font-medium "> “MicroBuddy”</span>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
