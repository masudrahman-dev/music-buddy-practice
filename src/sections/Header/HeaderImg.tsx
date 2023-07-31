import headerImg from "../../assets/images/img/header-img.png";

const HeaderImg = () => {
  const textStroke = {
    WebkitTextStrokeWidth: `1.5px `,
    WebkitTextStrokeColor: "black",
  };
//  px-14
// text-base 
// text-2xl
//  -mt-[50px]
// pb-5
// -mt-2 
  return (
    <div className="lg:mx-[150px] lg:-mt-[80px] -mt-[40px]  ">
      <div className=" max-w-[1605.68px] mx-auto  lg:px-0  px-14 ">
        <img className="w-full" src={headerImg} alt="" />
        <div className=" lg:mt-1 ">
          <p className="lg:text-[60px] text-[20px] font-black tracking-widest ">
            OUR
          </p>
          <h1
            className="lg:text-[180px] text-[40px] lg:-mt-[80px] -mt-[14px]    tracking-widest font-black text-transparent"
            style={textStroke}
          >
            BLOG
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
