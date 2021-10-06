import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button2 from "../components/Button2";
import Cards from "../components/Cards";
import DateDropdown from "../components/DateDropdown";
import Layout from "../components/Layout";
import Orders from "../components/Orders";
import Payment from "../components/Payment";

export default function Home() {
  const [dateDropdown, setDateDropdown] = useState(false);
  const handleDateDropdown = () => {
    dateDropdown ? setDateDropdown(false) : setDateDropdown(true);
  };
  return (
    <div className="">
      <Head>
        <title>One Booking</title>
        <meta name="description" content="One Booking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex justify-between items-center p-4 media mx-auto">
          <h1 className="font-semibold text-lg">Dashboard</h1>
          <div className="relative flex ">
            <Button2
              text="Today Sep, 15"
              icon="/icons/calender.svg"
              rightIcon="/icons/down.svg"
              width="11rem"
              bgColor="#F3F6F9"
              color="black"
              onClick={handleDateDropdown}
            />
            <DateDropdown
              showDropdown={dateDropdown}
              setShowDropdown={handleDateDropdown}
            />
          </div>
        </div>
        <Cards />
        <div className="flex gap-4 px-4 pt-4 media mx-auto ">
          <Orders />
          <Payment />
        </div>
      </Layout>
    </div>
  );
}
