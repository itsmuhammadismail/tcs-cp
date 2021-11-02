import Head from "next/head";
import Layout from "../../components/Layout";
import BookingLayout from "../../components/Bookings/BookingLayout";
import Card from "../../components/Bookings/Card";
import Button from "../../components/Button";
import { parseCookies } from "../../helpers";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useForm } from "react-hook-form";
const CreateEvent = () => {
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
        <div className="media mx-auto p-4 pt-2 flex gap-6">
          {/* Shipments start */}
          <Card heading="Create Event">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label">
                    Event Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("toConsignmentNumber", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <div className="flex-1 flex items-center gap-4 w-full">
                    <label className="label">
                      Account # <span className="text-[#FF0000]">*</span>
                    </label>
                    <select
                      type="text"
                      className="input text-[#464E5F] text-sm"
                      {...register("account#", { required: true })}
                    >
                      <option value="Please Select">Please Select</option>
                    </select>
                  </div>
                </div>
                {/* 
                  <div className="flex-1 flex items-center gap-4 w-full">
                    <label className="label">
                      Cost Center <span className="text-[#FF0000]">*</span>
                    </label>
                    <select
                      type="text"
                      className="input text-[#464E5F] text-sm"
                      {...register("weight", { required: true })}
                    >
                      <option value="Normal">Normal</option>
                      <option value="Reverse Logistics">Reverse Logistics</option>
                    </select>
                  </div> */}
              </div>
              {/* Right */}
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Event Date <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("toDate", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label2">
                    Is Active{" "}
                    <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="checkbox"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("toConsignmentNumber", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                {/* <div className="flex-1 flex items-center gap-4 w-full">
                    <label className="label2">
                      Cost Center <span className="text-[#FF0000]">*</span>
                    </label>
                    <select
                      type="text"
                      className="input text-[#464E5F] text-sm"
                      {...register("printOption", { required: true })}
                    >
                      <option value="Please Select">3 copies per page</option>
                      <option value="Please Select">Single copy per page</option>
                      <option value="Please Select">6x4 labels</option>
                      <option value="Please Select">3 labels per page</option>
                    </select>
                  </div> */}
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 w-full mt-4">
                <label className="label">
                  Description <span className="text-[#FF0000]">*</span>
                </label>
                <div className="flex flex-col flex-1">
                  <textarea
                    type="text"
                    className="input flex-1"
                    {...register("description")}
                    
                  />
                  {errors.shipmentDetails && (
                    <span className="requiredField">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
          </Card>
          {/* Shipments End */}
        </div>
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Create"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="Create"
          ></Button>
          <Button
            text="Cancel"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="Cancel"
          ></Button>
        </div>
      </Layout>
    </form>
  );
};

export default CreateEvent;

CreateEvent.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (
      (Object.keys(data).length === 0 && data.constructor === Object) ||
      Object(data).token === "undefined"
    ) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
