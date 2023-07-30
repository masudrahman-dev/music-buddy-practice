const Card = ({ url }) => {
  const textDesign = {
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
  };
  return (
    <div className="flex ">
      <div className="rotate-[-90deg] border -mr-[50px] mt-[240px]">
        <h1>HEADPHONE</h1>
        <p>Best Choice....</p>
      </div>
      <img  src={url} alt="" />
    </div>
  );
};

export default Card;

{
  /* <div className=" flex gap-3 border border-gray-500  ">
<h1 className="text-5xl font-bold " style={textDesign}>
  HEADPHONE
</h1>
<p className="text-2xl font-semibold" style={textDesign}>
  Best Choice....
</p>
<div>
  <img
    style={{ boxShadow: "#000000ab 1px 5px 15px 8px" }}
    src={url}
    alt=""
  />
</div>
</div> */
}
