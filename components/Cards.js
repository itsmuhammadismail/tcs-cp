import Card from "./Card";
import SalesCard from "./SalesCard";

const Cards = () => {
  return (
    <div className="flex flex-wrap px-4 gap-4 media mx-auto">
      <Card
        up
        icon="/icons/booked.svg"
        heading="Booked Shipments"
        upvalue="3.4"
        count={1730}
        cod="4,631,223"
        bgColor="#EEFCF0"
      />
      <Card
        icon="/icons/delivered.svg"
        heading="Delivered Shipments"
        upvalue="3.4"
        count={1347}
        cod="4,631,223"
        bgColor="#EAEFFA"
      />
      <Card
        up
        icon="/icons/process.svg"
        heading="In-Process Shipments"
        upvalue="3.4"
        count={1730}
        cod="4,631,223"
        bgColor="#FCF0E8"
      />
      <SalesCard sales="890,344" />
    </div>
  );
};

export default Cards;
