import img1 from "../../assets/images/img/img-1.png";
import img2 from "../../assets/images/img/img-2.png";
import img3 from "../../assets/images/img/img-3.png";
import img4 from "../../assets/images/img/img-4.png";
import img5 from "../../assets/images/img/img-5.png";
import img6 from "../../assets/images/img/img-6.png";
import img7 from "../../assets/images/img/img-7.png";
import img8 from "../../assets/images/img/img-8.png";
import img9 from "../../assets/images/img/img-9.png";

import Card from "../../components/Card";
import Carausel from "../Carousel/Carausel";

const Posts = () => {
  return (
    <div className="pl-3 pr-5 mt-[75px] ">
  
      <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 md:gap-[40px] gap-[20px] justify-center items-center max-w-[1605.68px] mx-auto mt-[75px]">
        <Card url={img1} />
        <Card url={img2} />
        <Card url={img4} />
        <Card url={img3} />
        <Card url={img5} />
        <Card url={img6} />
        <Card url={img7} />
        <Card url={img8} />
        <Card url={img9} />
      </div>
      <Carausel/>
    </div>
  );
};

export default Posts;
