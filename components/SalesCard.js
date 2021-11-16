import TinyAreaChart from "./charts/TinyAreaChart";

const SalesCard = ({ sales }) => {
  return (
    <div
      style={{ backgroundColor: "#F3F6F9" }}
      className="flex flex-col rounded-2xl gap-1 w-full xl:w-[27rem]  justify-between overflow-hidden"
    >
      <div className="flex flex-col px-6 py-3 gap-2">
        <h2 className="heading">Weekly Sales Stats</h2>
        <p className="text-sm">{sales} Sales</p>
      </div>
      <TinyAreaChart />
    </div>
  );
};

export default SalesCard;
