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
                <label className="label">Consignment Note #</label>
                <div className="flex-1 flex items-center justify-center">
                  <input
                    type="text"
                    className="focus:outline-none text-sm flex-1 p-2 rounded-l-md"
                    {...register("consignment")}
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
                <select
                  type="text"
                  className="input text-[#464E5F] text-sm"
                  {...register("costCenter", { required: true })}
                >
                  <option value="Please Select">Please Select</option>
                </select>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">Order Ref</label>
                  <input
                    type="text"
                    className="input"
                    {...register("orderRef")}
                  />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Contact <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="input"
                      {...register("contact", { required: true })}
                    />
                    {errors.contact && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="input"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Delivery Type <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("deliveryType", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    City <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("city", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      className="input"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Expr Center <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("exprCenter", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Address <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="input"
                      {...register("address", { required: true })}
                    />
                    {errors.address && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
          {/* Consignee End */}
          {/* Customer Start */}
          <Card heading="PickUp Call Details">
            <div className="flex flex-col items-center gap-3">
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Customer Name</label>
                <input
                  type="name"
                  className="input2"
                  {...register("customerName")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Customer Number</label>
                <input
                  type="number"
                  className="input2"
                  {...register("customerNumber")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input2"
                  {...register("customerEmail")}
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
                  {...register("customerAddress")}
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
