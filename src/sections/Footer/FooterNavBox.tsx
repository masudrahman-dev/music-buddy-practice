const FooterNavBox = ({ pages, link_1, link_2, link_3 }) => {
  return (
    <div className="text-start">
      <h2 className="text-2xl font-semibold ">{pages}</h2>
      <div className="inline-flex gap-2">
        <div className="w-5 h-1 bg-black border  rounded-full"></div>
        <div className="w-3 h-1 bg-black border  rounded-full"></div>
        <div className="w-20 h-1 bg-black border rounded-full"></div>
      </div>

      <ul className="font-semibold text-[15px] opacity-60">
        {link_1 && <li>{link_1}</li>}
        {link_2 && <li> {link_2} </li>}
        {link_3 && <li>{link_3}</li>}
      </ul>
    </div>
  );
};

export default FooterNavBox;
