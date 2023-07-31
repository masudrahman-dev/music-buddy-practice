import FooterNavBox from "./FooterNavBox";

const FooterNav = () => {
  return (
    <div className="flex justify-between gap-7 items-center flex-col lg:flex-row">
      <FooterNavBox
        pages={"PAGES"}
        link_1={"Home"}
        link_2={"ABOUT US"}
        link_3={"CONTACT US"}
      />

      <FooterNavBox
        pages={"CONTACT"}
        link_1={"+00 000 000"}
        link_2={"+00 000 000"}
        link_3={"info@company.com"}
      />
      <div className="text-start">
        <h2 className="text-2xl font-semibold ">ADDRESS</h2>
        <div className="inline-flex gap-2">
          <div className="w-5 h-1 bg-black border  rounded-full"></div>
          <div className="w-3 h-1 bg-black border  rounded-full"></div>
          <div className="w-20 h-1 bg-black border rounded-full"></div>
        </div>

        <ul className="font-semibold text-[15px] opacity-60">
          <li>
            Company location, <br />
            World
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNav;
