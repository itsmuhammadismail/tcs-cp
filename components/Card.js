import CountUp from "react-countup";
import CurrencyFormat from "react-currency-format";

const Card = ({ up, icon, heading, upvalue, count, cod, bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col p-4 rounded-2xl gap-2 min-w-[17rem] flex-1 card-height"
    >
      <div className="flex justify-between place-items-start ">
        <img src={icon} className="h-6" />
        <div
          className={`flex items-center gap-2 px-4 py-1 rounded-full text-xs ${
            up ? "bg-[#DEF9E2] text-[#6AB689] " : "bg-[#F2ABAB] text-[#CA4A52] "
          } `}
        >
          +{upvalue}%{" "}
          <img
            src={up ? `/icons/arrowup.svg` : `/icons/arrowdown.svg`}
            alt=""
            className={`h-[0.6rem] relative up-animation ${
              up ? "up-animation" : "down-animation"
            }`}
          />
        </div>
      </div>

      <h4 className="text-sm">{heading}</h4>
      <p className="text-sm">
        <span className="text-3xl font-bold">
          <CountUp end={count} duration={2.75} />
        </span>{" "}
        Count
      </p>
      <p className="text-sm text-[#B5B5C3]">COD Value: {cod}</p>
    </div>
  );
};

export default Card;
