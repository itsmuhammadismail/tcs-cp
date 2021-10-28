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

const SecurityScanForwarding = () => {
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
          <Card heading="Security Scan Forwarding">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Security Scan Id <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("securityScanId", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label">
                  Warehosue ID <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("warehouseId", { required: true })}
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
                    Date <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("date", { required: true })}
                  >
                    <option value="Please Select">Select Shift</option>
                    <option value="Please Select">Morining</option>
                    <option value="Please Select">Evening</option>
                    <option value="Please Select">Night</option>
                  </select>
                </div>
              </div>
              {/* Right */}
              <div className="flex-1 flex flex-col gap-3 ">
                
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Vehicle # <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("vehicle#", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label2">
                  Consignment # <span className="text-[#FF0000]">*</span>
                  </label>
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
                <label className="label2">Total :</label>
                {/* <input
                  type="text"
                  className="input2"
                  {...register("customerPerson")}
                /> */}
              </div>
              </div>
            </div>
          </Card>
          {/* Shipments End */}
        </div>
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Scan"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="submit"
          ></Button>
            <Button
            text="Save"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="submit"
          ></Button>
            <Button
            text="Print Preview"
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

export default SecurityScanForwarding;

SecurityScanForwarding.getInitialProps = async ({ req, res }) => {
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
