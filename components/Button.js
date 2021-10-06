const Button = ({ icon, text, width, bgColor, color, className, iconClass }) => {
  return (
    <button
      style={{ width: width, backgroundColor: bgColor, color: color }}
      className={`rounded-2xl h-[2.8rem] flex justify-center items-center font-semibold text-sm gap-3 ${className}`}
    >
      {icon && <img src={icon} className={`h-[1rem] ${iconClass}`} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
