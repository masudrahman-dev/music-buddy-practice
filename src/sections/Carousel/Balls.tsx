
const Balls = () => {
  return (
    <>
      <div
        className={`w-[11px] h-[11px] opacity-50 bg-black rounded-full border`}
      />
      <div
        className={`w-[16px] h-[16px] opacity-80 bg-black rounded-full border`}
      />

      <div className="w-[27px] h-[27px]  rounded-full border-2  border-black flex justify-center items-center">
        <div className="w-[11px] h-[11px] bg-black rounded-full border"></div>
      </div>
      <div
        className={`w-[16px] h-[16px] opacity-80 bg-black rounded-full border`}
      />
      <div
        className={`w-[11px] h-[11px] opacity-50 bg-black rounded-full border`}
      />
      <div
        className={`w-[9px] h-[9px] opacity-50 bg-black rounded-full border`}
      />
    </>
  );
};

export default Balls;

{
  /* <Ball width={11} height={11} opacity={50} /> */
}
{
  /* <Ball width={16} height={16} opacity={80} /> */
}
{
  /* <Ball width={16} height={16} opacity={80} /> */
}
{
  /* <Ball width={11} height={11} opacity={50} /> */
}
{
  /* <Ball width={9} height={9} opacity={50} /> */
}
