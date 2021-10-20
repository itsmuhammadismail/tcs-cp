import Head from "next/head";
import Layout from "../../components/Layout";
import BookingLayout from "../../components/Bookings/BookingLayout";
import Card from "../../components/Bookings/Card";
import Button from "../../components/Button";


import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  
  import { useForm } from "react-hook-form";

  const MMSBooking = () => {
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
          <Card heading="MMS Booking">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Booking Type <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("pieces", { required: true })}
                  >
                    <option value="Please Select">Select Type</option>
                    <option value="Please Select">Manual</option>
                    <option value="Please Select">CN #</option>
                    <option value="Please Select">REF #</option>

                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                   Product <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                  type="text"
                  className="input2"
                  {...register("customerPerson")}
                />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                   Label Generation Date <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("codAmount", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Weight <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("weight", { required: true })}
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
                    Staff Code # <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("staff code", { required: true })}
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
                    P Bag # <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("p bag", { required: true })}
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
                    Cost Center <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("cost center", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
              </div>
              {/* Right */}
              <div className="flex-1 flex flex-col gap-3 ">
                
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Account # <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("services", { required: true })}
                  >
                    <option value="Please Select">Select Account #</option>
                    <option value="Please Select">71237192739</option>
                    <option value="Please Select">23764862032</option>
                    <option value="Please Select">23764862032</option>
                    <option value="Please Select">23764862032</option>

                  </select>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label2">
                  Service <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("height", { required: true })}
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
                    Cycle Date <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("weight", { required: true })}
                  >
                    <option value="Normal">Please Select</option>
                  </select>
                </div>
               
              
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    pieces <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("pieces", { required: true })}
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
                    Route Code # <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("route code", { required: true })}
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
                    Sealed # <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("sealed", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
          {/* Shipments End */}
        </div>
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Upload (Data)"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="submit"
          ></Button>
        </div>
      </Layout>
    </form>


      );
  }
   
  export default MMSBooking;
