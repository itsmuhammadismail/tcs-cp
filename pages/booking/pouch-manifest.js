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

const PouchManifest = () => {
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
          <Card heading="Pouch Manifest">
          <div className="flex flex-col items-center gap-3">
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Manifest #</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("manifest#", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Account #</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("account#", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Consignment #</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("consignment#", { required: true })}
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
                   Booking Date<span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("bookingDate", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>                
                     </select>
                </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Origin</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("origin", { required: true })}
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
                   Destination <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("destination", { required: true })}
                  >
                    <option value="Please Select">Select Destination</option>
                     <option value="Please Select">AFH</option>
                    <option value="Please Select">LHE</option>
                    <option value="Please Select">ISB</option>                 
                     </select>
                </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Weight</label>
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
                <label className="label">Courier Code #</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("courierCode", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Work Order #</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("workOrder #", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
              </div>
            </div>
          </Card>
          {/* Consignee End */}
          {/* Customer Start */}
          <Card heading="Pouch Details">
            <div className="flex flex-col items-center gap-3">
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Consignee Name</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("consigneeName", { required: true })}
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
                   Cost Center<span className="text-[#FF0000]">*</span>
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
                <label className="label">Department #</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("department #", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Shipper Name</label>
                <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("shipperName", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Remarks</label>
                <input
                  type="text"
                  className="input2 h-[5rem] resize-none"
                  {...register("remarks")}
                />
              </div>
         
            </div>
          </Card>
          {/* Customer End */}
        </div>
       
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Cancel"
            bgColor="#F3F6F9"
            color="#3A3A3A"
            width="11rem"
            type="reset"
          ></Button>

          <Button
            text="Submit"
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
 
export default PouchManifest;