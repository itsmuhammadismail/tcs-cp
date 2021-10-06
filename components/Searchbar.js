const Searchbar = () => {
  return (
    <div className="bg-[#F3F6F9] rounded-2xl flex items-center p-2 w-[30rem] h-[3rem]">
      <img src="/icons/search.svg" alt="" className="h-4 m-4" />
      <input type="text" placeholder="Search Shipment" className="bg-transparent focus:outline-none text-sm flex-1 border-r-2 border-[#AAACAE] p-1" />
      <img src="/icons/filter.svg" alt="" className="h-4 m-4" />
    </div>
  );
};

export default Searchbar;
