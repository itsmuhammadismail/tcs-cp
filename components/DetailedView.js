import Level from "./Levels";

const DetailedView = () => {
  return (
    <div
      className="flex flex-col bg-[#EFF3F8] mt-8 gap-5 rounded-2xl p-4 "
      style={{ boxShadow: "0px 1px 9px rgba(0, 0, 0, 0.06)" }}
    >
      <span className="font-semibold text-sm">Detail View</span>
      <div className="flex gap-2 text-xs items-center">
        <span className="w-[3.7rem]">Booked</span> <Level color="#FF9689" percent="100" />{" "}
        <span className="w-[2rem] text-right">35488</span>
      </div>
      <div className="flex gap-2 text-xs items-center">
        <span className="w-[3.7rem]">Confirmed</span> <Level color="#FFC7A2" percent="70" />{" "}
        <span className="w-[2rem] text-right">3243</span>
      </div>
      <div className="flex gap-2 text-xs items-center">
        <span className="w-[3.7rem]">In-Process</span> <Level color="#A5A4DC" percent="40" />{" "}
        <span className="w-[2rem] text-right">323</span>
      </div>
      <div className="flex gap-2 text-xs items-center">
        <span className="w-[3.7rem]">Delivered</span> <Level color="#A3D4E8" percent="25" />{" "}
        <span className="w-[2rem] text-right">2300</span>
      </div>
      <div className="flex gap-2 text-xs items-center">
        <span className="w-[3.7rem]">Picked</span> <Level color="#A6E0C3" percent="10" />{" "}
        <span className="w-[2rem] text-right">431</span>
      </div>
      <div className="flex gap-2 text-xs items-center">
        <span className="w-[3.7rem]">Un Picked</span> <Level color="#637293" percent="50" />{" "}
        <span className="w-[2rem] text-right">1900</span>
      </div>
      <div className="flex gap-2 text-xs items-center">
        <span className="w-[3.7rem]">Return</span> <Level color="#DCDCDC" percent="40" />{" "}
        <span className="w-[2rem] text-right">56</span>
      </div>
      <div className="flex gap-2 text-xs items-center">
        <span className="w-[3.7rem]">Cancelled</span> <Level color="#F3B0C2" percent="8" />{" "}
        <span className="w-[2rem] text-right">10</span>
      </div>
    </div>
  );
};

export default DetailedView;
