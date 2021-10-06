const Button = ({ icon, text, width, bgColor, color }) => {
  return (
    <button
      style={{ width: width, backgroundColor: bgColor, color: color }}
      className="rounded-2xl h-[2.8rem] flex justify-center items-center font-semibold text-sm gap-3"
    >
      {icon && <img src={icon} className="h-[1rem]" />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
