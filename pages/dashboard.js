import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button2 from "../components/Button2";
import Cards from "../components/Cards";
import DateDropdown from "../components/DateDropdown";
import Layout from "../components/Layout";
import Orders from "../components/Orders";
import Payment from "../components/Payment";
import Countries from "../api/countries";
import { parseCookies } from "../helpers/";
import moment from "moment";

export default function Home() {
  const [dateDropdown, setDateDropdown] = useState(false);
  const [dateValue, setDateValue] = useState(
    `Today ${moment().format("MMM, DD")}`
  );
  const [selected, setSelected] = useState("today");

  const handleDateDropdown = () => {
  dateDropdown ? setDateDropdown(false) : setDateDropdown(true);
  };

  const handleSelected = (name) => {
    setSelected(name);
    if (name === "today") setDateValue(`Today ${moment().format("MMM, DD")}`);
    else if (name === "yesterday")
      setDateValue(
        `Yesterday ${moment(new Date(Date.now() - 24 * 60 * 60 * 1000)).format(
          "MMM, DD"
        )}`
      );
    else if (name === "last 7 days") setDateValue("Last 7 Days");
    else if (name === "last 30 days") setDateValue("Last 30 Days");
    else if (name === "this month") setDateValue("This Month");
    else if (name === "last month") setDateValue("Last Month");
    else setDateValue(name);
  };

  useEffect(async () => await Countries(), []);

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
              text={dateValue}
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
              selected={selected}
              handleSelected={handleSelected}
            />
          </div>
        </div>
        <Cards />
        <div className="flex flex-col xl:flex-row gap-4 px-4 pt-4 media mx-auto flex-wrap">
          <Orders />
          <Payment />
        </div>
      </Layout>
    </div>
  );
}

// Home.getInitialProps = async ({ req, res }) => {
//   const data = parseCookies(req);

//   if (res) {
//     if (
//       (Object.keys(data).length === 0 && data.constructor === Object) ||
//       Object(data).token === "undefined"
//     ) {
//       res.writeHead(301, { Location: "/" });
//       res.end();
//     }
//   }

//   return {
//     data: data && data,
//   };
// };
