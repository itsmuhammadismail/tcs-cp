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

const ComplainServiceReq = () => {
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
          <Card heading="Consignement Information">
          <div className="flex flex-col items-center gap-3">
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Booking Date</label>
                <input
                  type="name"
                  className="input2"
                  {...register("bookingDate")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Order Reference</label>
                <input
                  type="number"
                  className="input2"
                  {...register("orderReference")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Origin</label>
                <input
                  type="email"
                  className="input2"
                  {...register("origin")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Consignee Name</label>
                <input
                  type="text"
                  className="input2"
                  {...register("consigneeName")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Consignee Address</label>
                <input
                  type="text"
                  className="input2"
                  {...register("consigneeAddress")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Pieces</label>
                <input
                  type="text"
                  className="input2"
                  {...register("pieces")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Product Details</label>
                <input
                  type="text"
                  className="input2"
                  {...register("productDetails")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Delivery Status Desc</label>
                <input
                  type="text"
                  className="input2"
                  {...register("deliveryStatusDesc")}
                />
              </div>
            </div>
          </Card>
          {/* Consignee End */}
          {/* Customer Start */}
          <Card heading="Consignement Note Number">
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
                <label className="label">Cost Center</label>
                <input
                  type="number"
                  className="input2"
                  {...register("costCenter")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Service</label>
                <input
                  type="email"
                  className="input2"
                  {...register("service")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Destination</label>
                <input
                  type="text"
                  className="input2"
                  {...register("destination")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Consignee Contact</label>
                <input
                  type="text"
                  className="input2"
                  {...register("consigneeContact")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Weight</label>
                <input
                  type="text"
                  className="input2"
                  {...register("weight")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">COD Amount</label>
                <input
                  type="text"
                  className="input2"
                  {...register("codAmount")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Delivery Status</label>
                <input
                  type="text"
                  className="input2"
                  {...register("deliveryStatus")}
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
}
 
export default ComplainServiceReq;

ComplainRequest.getInitialProps = async ({ req, res }) => {
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
