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
const IBooking = () => {
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
          <Card heading="International Booking">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Booking Date<span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("pieces", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    First Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input"
                      {...register("First Name", { required: true })}
                    />
                    {errors.contact && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Last Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input"
                      {...register("First Name", { required: true })}
                    />
                    {errors.contact && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Company <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("company", { required: true })}
                  >
                    <option value="Normal">Select Company</option>
                    <option value="Reverse Logistics">Reverse Logistics</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label">
                    Consignee Address<span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("consignee address", { required: true })}
                    />
                    {errors.contact && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Consignee Phone # <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="number"
                    className="input text-[#464E5F] text-sm"
                    {...register("printOption", { required: true })}
                  >
                  </input>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Service <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("services", { required: true })}
                  >
                    <option value="Please Select">Select DOCS</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    City <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("destination", { required: true })}
                  >
                    <option value="Please Select">Select City</option>
                    <option value="Please Select">Maldives</option>
                    <option value="Please Select">Amsterdam</option>
                    <option value="Please Select">Brussels</option>

                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Volumetric <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("destination", { required: true })}
                  >
                    <option value="Please Select">Select Volumetric</option>
                    <option value="Please Select">width</option>
                    <option value="Please Select">Weight</option>
                    <option value="Please Select">height</option>

                  </select>
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Pieces <span className="text-[#FF0000]">*</span>
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
                
              </div>
              {/* Right */}
              <div className="flex-1 flex flex-col gap-3 ">
              <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Account Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input"
                      {...register("Account Name", { required: true })}
                    />
                    {errors.contact && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Account # <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("services", { required: true })}
                  >
                    <option value="Please Select">Select Account</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label2">
                  Middle Name <span className="text-[#FF0000]">*</span>
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
                    Reference # <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="number"
                    className="input text-[#464E5F] text-sm"
                    {...register("printOption", { required: true })}
                  >
                  </input>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label2">
                  Email Id <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="email"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("height", { required: true })}
                    ></input>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label2">
                  Consignee Address 2 <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("address", { required: true })}
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
                    Consignee Cell # <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="number"
                    className="input text-[#464E5F] text-sm"
                    {...register("printOption", { required: true })}
                  >
                  </input>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Destination <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("destination", { required: true })}
                  >
                    <option value="Please Select">Select Destination</option>
                    <option value="Please Select">Europe</option>
                    <option value="Please Select">Middle East</option>
                    <option value="Please Select">Asia</option>

                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Zip Code # <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="number"
                    className="input text-[#464E5F] text-sm"
                    {...register("zip code", { required: true })}
                  >
                  </input>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
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
              </div>
            </div>
          </Card>
          {/* Shipments End */}
        </div>
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Get LoadSheet"
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
 
export default IBooking;