const Button2 = ({
  icon,
  rightIcon,
  text,
  width,
  bgColor,
  color,
  bgNone,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        minWidth: width,
        backgroundColor: bgColor,
        color: color,
        padding: "0 1.3rem",
      }}
      className={`rounded-2xl flex justify-center items-center text-xs gap-2 ${
        bgNone === true ? "" : "h-[2.8rem]"
      }`}
    >
      {icon && <img src={icon} className="h-[1rem]" />}
      {text && <span>{text}</span>}
      {rightIcon && <img src={rightIcon} className="h-[0.5rem] ml-2" />}
    </button>
  );
};

export default Button2;
