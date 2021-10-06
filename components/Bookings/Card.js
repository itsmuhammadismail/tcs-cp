const Card = ({ heading, children }) => {
  return (
    <div className="bg-[#F3F6F9] flex-1 flex flex-col rounded-2xl p-4 ">
      <h2 className="font-semibold text-md mb-6">{heading}</h2>
      {children}
    </div>
  );
};

export default Card;
