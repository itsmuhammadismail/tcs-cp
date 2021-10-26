import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import BookingLayout from "../../components/Bookings/BookingLayout";
import Card from "../../components/Bookings/Card";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useForm } from "react-hook-form";

const RePrintCN = () => {
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
          <Card heading="Filters">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Date Range <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("dateRange", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    CN From <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("cnFrom", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Origin <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("origin", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Status <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("status", { required: true })}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Reverse Logistics">Reverse Logistics</option>
                  </select>
                </div>
              </div>
              {/* Right */}
              <div className="flex-1 flex flex-col gap-3 ">
                
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
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
                  <label className="label2">
                    CN To <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("cnTo", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
               
              
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Print Option <span className="text-[#FF0000]">*</span>
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
                </div>
              </div>
            </div>
          </Card>
          {/* Shipments End */}
        </div>
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Generate Report"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="submit"
          ></Button>
          <Button
            text="Generate PDF"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="submit"
          ></Button>
          <Button
            text="Print Labels"
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

export default RePrintCN;
