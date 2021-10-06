import Card from "./Card";

const Consignee = () => {
  return (
    <Card heading="Consignee Infromation">
      <div className="flex flex-col items-center gap-3">
        <div className="flex-1 flex items-center gap-4 w-full">
          <label className="label">Consignment Note #</label>
          <div className="flex-1 flex items-center justify-center">
            <input
              type="text"
              className="focus:outline-none text-sm flex-1 p-2 rounded-l-md"
            />
            <div className="bg-[#2F3C4B] w-[3rem] h-[2.2rem] flex justify-center items-center rounded-r-md">
              <img src="/icons/search2.svg" alt="" className="h-4" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <label className="label">
            Cost Center <span className="text-[#FF0000]">*</span>
          </label>
          <select type="text" className="input text-[#464E5F] text-sm">
            <option value="Please Select">Please Select</option>
          </select>
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">Order Ref</label>
            <input type="text" className="input" />
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Contact <span className="text-[#FF0000]">*</span>
            </label>
            <input type="text" className="input" />
          </div>
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Name <span className="text-[#FF0000]">*</span>
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Delivery Type <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              City <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Email <span className="text-[#FF0000]">*</span>
            </label>
            <input type="email" className="input" />
          </div>
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Expr Center <span className="text-[#FF0000]">*</span>
            </label>
            <select type="text" className="input text-[#464E5F] text-sm">
              <option value="Please Select">Please Select</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-4 w-full">
            <label className="label">
              Address <span className="text-[#FF0000]">*</span>
            </label>
            <input type="email" className="input" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Consignee;
