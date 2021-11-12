import Head from "next/head";
import Layout from "../../components/Layout";
import BookingLayout from "../../components/Bookings/BookingLayout";
import Card from "../../components/Bookings/Card";
import Button from "../../components/Button";
import { parseCookies } from "../../helpers";
import { useEffect, useRef, useState } from "react";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Costcenters from "../../api/costcenters";
import { costcentersState } from "../../recoil/atoms";
import LoadsheetTable from "../../components/LoadsheetTable";
import useVisible from "../../hooks/useVisible";

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Box,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { ConstructionOutlined } from "@mui/icons-material";
import moment from "moment";

const CancelBooking = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showdate, setShowdate] = useState(false);
  const [value, setValue] = useState([new Date(), new Date()]);
  const [custom, setCustom] = useState(false);
  const onSubmit = (data) => console.log(data);
  const [costcenters, setCostcenters] = useState([]);
  const [tableData, setTableData] = useState(null);

  const ref = useRef();

  useEffect(() => {
    const fn = async () => {
      // const rescost = await Costcenters();
      setCostcenters(JSON.parse(localStorage.getItem("costcenters")));
    };
    fn();
  }, []);

  const handleDate = () => {
    showdate ? setShowdate(false) : setShowdate(true);
  };

  const handleHideDate = () => {
    setShowdate(false);
  };

  useVisible(ref, () => {
    setShowdate(false);
  });

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
          <Card heading="Cancelation Of Booking">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Date Range <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex-1 " ref={ref}>
                    <input
                      type="text"
                      className="input text-[#464E5F] text-sm w-full"
                      {...register("fromDate", { required: true })}
                      onClick={handleDate}
                      value={`
                        ${moment(value[0]).format("L")} 
                        -
                        ${moment(value[1]).format("L")}`}
                    ></input>
                    {showdate && (
                      <div className="border-l-2 absolute">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <StaticDateRangePicker
                            displayStaticWrapperAs="desktop"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                              <>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                              </>
                            )}
                          />
                        </LocalizationProvider>
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    From Consignement Number
                    <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("fromConsignmentNumber", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div> */}
                {/* <div className="flex-1 flex items-center gap-4 w-full">
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
                </div> */}
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
                  <label className="label">
                    Cost Center <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("costCenter", { required: true })}
                  >
                    {costcenters &&
                      costcenters.map((costcenter) => (
                        <option key={costcenter.id} value={costcenter.id}>
                          {costcenter.cost_center_code +
                            "-" +
                            costcenter.cost_center_name}
                        </option>
                      ))}
                  </select>
                </div>
                {/* <div className="flex-1 flex items-center gap-3 w-full">
                  <label className="label">
                    To Consignement Number{" "}
                    <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("toConsignmentNumber", { required: true })}
                    ></input>
                    {errors.height && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div> */}

                {/* <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Cost Center <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("printOption", { required: true })}
                  >
                    <option value="Please Select">3 copies per page</option>
                    <option value="Please Select">Single copy per page</option>
                    <option value="Please Select">6x4 labels</option>
                    <option value="Please Select">3 labels per page</option>
                  </select>
                </div> */}
              </div>
            </div>
          </Card>
          {/* Shipments End */}
        </div>
        <div className="media mx-auto p-4 flex justify-center items-center gap-2">
          <Button
            text="Submit"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="submit"
          ></Button>
          <Button
            text="Cancel CN(s)"
            bgColor="#4CAF50"
            color="white"
            width="11rem"
            type="submit"
          ></Button>
        </div>
        {tableData !== null && (
          <div className="media mx-auto p-4 pt-2 flex gap-6 w-full">
            {/* Loadsheet start */}
            <Card heading="Load Sheet Data">
              <div className="flex gap-6 overflow-auto">
                <div className="flex-1 flex flex-col gap-3 ">
                  <LoadsheetTable tableData={tableData} />
                </div>
              </div>
            </Card>
          </div>
        )}
      </Layout>
    </form>
  );
};

export default CancelBooking;

CancelBooking.getInitialProps = async ({ req, res }) => {
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
