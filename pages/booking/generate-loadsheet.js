import Head from "next/head";
import Layout from "../../components/Layout";
import BookingLayout from "../../components/Bookings/BookingLayout";
import Card from "../../components/Bookings/Card";
import Button from "../../components/Button";
import { parseCookies } from "../../helpers";

import { loadsheetdateState, LoadsheetState } from "../../recoil/atoms";
import { useEffect, useRef, useState } from "react";
import loadsheet from "../../api/loadsheet";
import Costcenters from "../../api/costcenters";
import { costcentersState } from "../../recoil/atoms";
import Cities from "../../api/cities";
import { citiesState } from "../../recoil/atoms";
import Loadsheetdate from "../../api/loadsheetdate";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

const GloadSheet = () => {
  const [costcenters, setCostcenters] = useState([]);
  const [cities, setCities] = useRecoilState(citiesState);
  const [loadsheetdates, setLoadsheetdate] = useRecoilState(loadsheetdateState);

  const [fkcity, setFkcity] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    console.log("Selected change");
    // cities.map((city) => fkcity === city.id && setSelected(city.city_code));
    cities.map((city) => {
      if (+fkcity === +city.id) setSelected(city.city_code);
    });
  }, [fkcity]);

  useEffect(() => console.log("selected", selected), [selected]);

  useEffect(async () => {
    const rescost = await Costcenters();
    const res = await Cities(1);
    const resdate = await Loadsheetdate(0);
    setLoadsheetdate(resdate);
    setCities(res);
    setCostcenters(rescost);
  }, []);

  const handleCostcenter = async (e) => {
    const resdate = await Loadsheetdate(e.target.value);
    setLoadsheetdate(resdate);
  };

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
          {/* Loadsheet start */}
          <Card heading="Generate LoadSheet for Today">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Employee Code <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("employeeCode", { required: true })}
                  ></input>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Shipment Type <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("shipmentType", { required: true })}
                  >
                    <option value="Please Select">
                      All (Having All Types Of weight
                    </option>
                    <option value="Please Select">Single copy per page</option>
                    <option value="Please Select">6x4 labels</option>
                    <option value="Please Select">3 labels per page</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Label Generation Date{" "}
                    <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("labelGenerationDate", { required: true })}
                    onChange={handleCostcenter}

                  >
                    {loadsheetdates.map((loadsheetdate) => (
                      <option
                        key={loadsheetdate.booking_date}
                        value={loadsheetdate.booking_date}
                      >
                        {loadsheetdate.booking_date}
                      </option>
                    ))}
                  </select>
                </div>
                {/* 
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Cost Center <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("weight", { required: true })}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Reverse Logistics">Reverse Logistics</option>
                  </select>
                </div> */}
              </div>
              {/* Right */}
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Employee Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("employeeName", { required: true })}
                  ></input>
                </div>
                <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label2">
                    Cost Center <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("costcenters")}
                    onChange={(e) => setFkcity(e.target.value)}
                  >
                    {costcenters &&
                      costcenters.map((costcenter) => (
                        <option key={costcenter.id} value={costcenter.fk_city}>
                          {costcenter.cost_center_code +
                            "-" +
                            costcenter.cost_center_name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Origin <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("origin", { required: true })}
                    value={selected}
                    disabled
                  >
                    {cities.map((city) => (
                      <option key={city.id} value={city.city_code}>
                        {city.city_name}
                      </option>
                    ))}
                  </select>
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
        <div className="media mx-auto p-4 pt-2 flex gap-6">
          {/* Loadsheet start */}
          <Card heading="Load Sheet Data">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3 "></div>
            </div>
          </Card>
        </div>
      </Layout>
    </form>
  );
};

export default GloadSheet;

GloadSheet.getInitialProps = async ({ req, res }) => {
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
