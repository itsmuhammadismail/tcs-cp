const Level = ({ color, percent }) => {
  return (
    <div className="relative w-[8rem] h-[0.4rem]">
      <div className=" bg-[#E4E8EE] rounded-full w-full h-full"></div>
      <div
        style={{ backgroundColor: color, width: `${percent}%` }}
        className="absolute rounded-full top-0  h-full level-animate"
      ></div>
    </div>
  );
};

export default Level;
