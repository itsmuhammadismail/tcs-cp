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
      onClick={onClick}
      style={{ width: width, backgroundColor: bgColor, color: color }}
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
