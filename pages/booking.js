import Head from "next/head";
import Layout from "../components/Layout";
import Button2 from "../components/Button2";
import Button from "../components/Button";
import Consignee from "../components/Bookings/Consignee";
import Customer from "../components/Bookings/Customer";
import Shipments from "../components/Bookings/Shipments";
import SingleBookingDropdown from "../components/SingleBookingDropdown";
import { useState } from "react";

const Booking = () => {
  let a = 1;
  const [dropdown, setDropdown] = useState();
  const handleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

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
          <div className="relative flex ">
            <Button2
              text="Single Booking"
              rightIcon="/icons/down.svg"
              width="11rem"
              bgColor="#F3F6F9"
              color="black"
              onClick={handleDropdown}
            />
            <SingleBookingDropdown
              showDropdown={dropdown}
              setShowDropdown={handleDropdown}
            />
          </div>
        </div>
        <div className="media mx-auto p-4 flex gap-6">
          <Consignee />
          <Customer />
        </div>
        <div className="media mx-auto p-4 pt-2 flex gap-6">
          <Shipments />
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
export default Booking;
