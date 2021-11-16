const Card = ({ heading, children }) => {
  return (
    <div className="bg-[#F3F6F9] w-full flex-1 flex flex-col rounded-2xl p-4 pr-[3rem]">
      {heading && <h2 className="font-semibold text-md mb-6">{heading}</h2>}
      {children}
    </div>
  );
};

export default Card;
