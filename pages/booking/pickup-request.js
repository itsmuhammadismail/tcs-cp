import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { parseCookies } from "../../helpers";
import BookingLayout from "../../components/Bookings/BookingLayout";
import Card from "../../components/Bookings/Card";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useForm } from "react-hook-form";

const PickupRequest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Head>
        <title>One Booking</title>
        <meta name="description" content="One Booking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BookingLayout />
        <div className="media mx-auto p-4 flex gap-6">
          {/* Consignee Start */}
          <Card heading="Customer Information">
            <div className="flex flex-col items-center gap-3">
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">
                  Cost Center <span className="text-[#FF0000]">*</span>
                </label>
                <select
                  type="text"
                  className="input text-[#464E5F] text-sm"
                  {...register("costCenter", { required: true })}
                >
                  <option value="Please Select">Please Select</option>
                </select>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Customer Name</label>
                <input
                  type="text"
                  className="input2 text-[#464E5F] text-sm"
                  {...register("customerName")}
                  disabled
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Contact Number</label>
                <input
                  type="text"
                  className="input2 text-[#464E5F] text-sm"
                  {...register("contactNumber")}
                  disabled
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Email Address</label>
                <input
                  type="email"
                  className="input2 text-[#464E5F] text-sm"
                  {...register("emailAddress")}
                  disabled
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Contact Person</label>
                <input
                  type="email"
                  className="input2 text-[#464E5F] text-sm"
                  {...register("contactPerson")}
                  disabled
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Address</label>
                <input
                  type="email"
                  className="input2 text-[#464E5F] text-sm"
                  {...register("address")}
                  value=""
                  disabled
                />
              </div>
            </div>
          </Card>
          {/* Consignee End */}
          {/* Customer Start */}
          <Card heading="PickUp Call Details">
            <div className="flex flex-col items-center gap-3">
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">
                  Shipment Type <span className="text-[#FF0000]">*</span>
                </label>
                <select
                  type="text"
                  className="input2 text-[#464E5F] text-sm"
                  {...register("shipmentType", { required: true })}
                  disabled
                >
                  <option value="Please Select">Please Select</option>
                </select>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">
                  Pickup Time <span className="text-[#FF0000]">*</span>
                </label>
                <select
                  type="text"
                  className="input text-[#464E5F] text-sm"
                  {...register("pickupTime", { required: true })}
                >
                  <option value="Please Select">Please Select</option>
                </select>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">
                  Mobile # <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="number"
                  className="input"
                  {...register("mobile#")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Customer Person</label>
                <input
                  type="text"
                  className="input2"
                  {...register("customerPerson")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Address</label>
                <textarea
                  type="text"
                  className="input2 h-[5rem] resize-none"
                  {...register("Address")}
                />
              </div>
            </div>
          </Card>
          {/* Customer End */}
        </div>

        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Refresh"
            bgColor="#F3F6F9"
            color="#3A3A3A"
            width="11rem"
            type="reset"
          ></Button>

          <Button
            text="Save"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="submit"
          ></Button>
        </div>
      </Layout>
    </form>
  );
};
export default PickupRequest;


PickupRequest.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};

