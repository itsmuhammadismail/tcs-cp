import Head from "next/head";
import Layout from "../components/Layout";
import Button2 from "../components/Button2";
import Button from "../components/Button";
import Card from "../components/Bookings/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const booking = () => {
  const styles = (theme) => ({
    radio: {
      "&$checked": {
        color: "#4B8DF8",
      },
    },
    checked: {},
  });

  return (
    <div>
      <Head>
        <title>One Booking</title>
        <meta name="description" content="One Booking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex justify-between items-center p-4 media mx-auto">
          <h1 className="font-semibold text-lg">Booking for Customer</h1>
          <Button2
            text="Single Booking"
            icon="/icons/calender.svg"
            rightIcon="/icons/down.svg"
            width="11rem"
            bgColor="#F3F6F9"
            color="black"
          />
        </div>
        <div className="media mx-auto p-4 flex gap-6">
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
                <textarea type="text" className="input2" />
              </div>
            </div>
          </Card>
        </div>
        <div className="media mx-auto p-4 pt-2 flex gap-6">
          <Card heading="Shipments Details">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Pieces / Flayers <span className="text-[#FF0000]">*</span>
                  </label>
                  <select type="text" className="input text-[#464E5F] text-sm">
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    COD Amount (PKR) <span className="text-[#FF0000]">*</span>
                  </label>
                  <select type="text" className="input text-[#464E5F] text-sm">
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Box Availablity <span className="text-[#FF0000]">*</span>
                  </label>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="box"
                      defaultValue="yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Weight (KG) <span className="text-[#FF0000]">*</span>
                  </label>
                  <select type="text" className="input text-[#464E5F] text-sm">
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Fragile <span className="text-[#FF0000]">*</span>
                  </label>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="box"
                      defaultValue="yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Height (inches) <span className="text-[#FF0000]">*</span>
                  </label>
                  <select type="text" className="input text-[#464E5F] text-sm">
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Length (inches) <span className="text-[#FF0000]">*</span>
                  </label>
                  <select type="text" className="input text-[#464E5F] text-sm">
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Origin <span className="text-[#FF0000]">*</span>
                  </label>
                  <select type="text" className="input text-[#464E5F] text-sm">
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Services <span className="text-[#FF0000]">*</span>
                  </label>
                  <select type="text" className="input text-[#464E5F] text-sm">
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">Insurance/Declared Value</label>
                  <input type="text" className="input" />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Shipment Details <span className="text-[#FF0000]">*</span>
                  </label>
                  <input type="text" className="input" />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Remarks <span className="text-[#FF0000]">*</span>
                  </label>
                  <input type="text" className="input" />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Width(inches) <span className="text-[#FF0000]">*</span>
                  </label>
                  <input type="text" className="input2" />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Print Option <span className="text-[#FF0000]">*</span>
                  </label>
                  <select type="text" className="input text-[#464E5F] text-sm">
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Refresh"
            bgColor="#F3F6F9"
            color="#3A3A3A"
            width="11rem"
          ></Button>
          <Button
            text="Save"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
          ></Button>
        </div>
      </Layout>
    </div>
  );
};
export default booking;
