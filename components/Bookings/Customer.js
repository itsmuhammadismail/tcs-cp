import Card from "./Card";

const Customer = () => {
  return (
    <Card heading="Customer Information">
      <div className="flex flex-col items-center gap-3">
        <div className="flex-1 flex items-center gap-4 w-full">
          <label className="label">Customer Name</label>
          <input type="name" className="input2" />
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <label className="label">Customer Number</label>
          <input type="number" className="input2" />
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <label className="label">Email</label>
          <input type="email" className="input2" />
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <label className="label">Customer Person</label>
          <input type="text" className="input2" />
        </div>
        <div className="flex-1 flex items-center gap-4 w-full">
          <label className="label">Address</label>
          <textarea type="text" className="input2 h-[5rem] resize-none" />
        </div>
      </div>
    </Card>
  );
};

export default Customer;
