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
import { useState } from "react";
import SingleBookingDropdown from "../../components/SingleBookingDropdown";
import { useRecoilState } from "recoil";
import { countriesState } from "../../recoil/atoms";
import { useEffect } from "react";
import {
  citiesState,
  costcentersState,
  servicesState,
} from "../../recoil/atoms";
import Cities from "../../api/cities";
import Costcenters from "../../api/costcenters";
import Services from "../../api/services";

const Bookings = () => {
  const [countries, setCountries] = useRecoilState(countriesState);
  const [cities, setCities] = useRecoilState(citiesState);
  const [costcenters, setCostcenters] = useRecoilState(costcentersState);
  const [services, setServices] = useRecoilState(servicesState);

  useEffect(async () => {
    
      const res = await Cities(1);
      setCities(res);
      const rescost = await Costcenters(21);
      setCostcenters(rescost);
      const resservice = await Services(21);
      setServices(resservice);
    }
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = async (e) => {
    const res = await Cities(e.target.value);
    setCities(res);
    console.log("hello", e.target.value);
  };

  const [boxAvailability, setBoxAvailability] = useState("yes");
  // const [boxAvailability, setBoxAvailability] = useState("yes")
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
          <Card heading="Consignee Infromation">
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
                  // onChange={this.handleChange}
                  {...register("costCenter", { required: true })}
                >
                  {costcenters.map((costcenter) => (
                    <option key={costcenter.id} value={costcenter.id}>
                      {costcenter.cost_center_code +
                        "-" +
                        costcenter.cost_center_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">Order Ref</label>
                  <input
                    type="text"
                    className="input max-w-[10.8rem]"
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
                      className="input max-w-[10.8rem]"
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
                      className="input max-w-[10.8rem]"
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
                    className="input text-[#464E5F] text-sm max-w-[10.8rem]"
                    {...register("deliveryType", { required: true })}
                  >
                    <option value="Normal">Normal</option>
                    <option value="My Collect">My Collect</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center gap-4 w-full ">
                  <label className="label">
                    Country <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm max-w-[10.8rem]"
                    {...register("country", { required: true })}
                    onChange={handleChange}
                  >
                    {countries &&
                      countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.country_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full ">
                  <label className="label">
                    City <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm max-w-[10.8rem]"
                    {...register("city", { required: true })}
                  >
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.city_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Expr Center <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    disabled
                    className="input text-[#464E5F] text-sm max-w-[10.8rem]"
                    {...register("exprCenter", { required: true })}
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
                      className="input max-w-[10.8rem]"
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
                <label className="label">
                  Address<span className="text-[#FF0000]">*</span>
                </label>
                <div className="flex flex-col flex-1">
                  <input
                    type="text"
                    className="input flex-1"
                    {...register("address", { required: true })}
                  />
                  {errors.shipmentDetails && (
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
          <Card heading="Customer Information">
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
        <div className="media mx-auto p-4 pt-2 flex gap-6">
          {/* Shipments start */}
          <Card heading="Shipments Details">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Pieces / Flayers <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("pieces", { required: true })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    COD Amount (PKR) <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("codAmount", { required: true })}
                  />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Box Availablity <span className="text-[#FF0000]">*</span>
                  </label>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="box"
                      defaultValue="yes"
                      name="radio-buttons-group"
                      {...register("boxAvailability")}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Weight (KG) <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("weight", { required: true })}
                  />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Fragile <span className="text-[#FF0000]">*</span>
                  </label>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="box"
                      defaultValue="yes"
                      name="radio-buttons-group"
                      {...register("fragile", { required: true })}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    Height (inches) <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
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
                  <label className="label">
                    Length (inches) <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="number"
                      className="input text-[#464E5F] text-sm flex-1"
                      {...register("length", { required: true })}
                    />
                    {errors.length && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-3 ">
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Origin <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("origin", { required: true })}
                  >
                    <option value="Please Select">Please Select</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Services <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("services", { required: true })}
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.service_code}
                        {service.service_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">Insurance/Declared Value</label>
                  <input
                    type="text"
                    className="input"
                    {...register("insurance")}
                  />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Shipment Details <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input flex-1"
                      {...register("shipmentDetails", { required: true })}
                    />
                    {errors.shipmentDetails && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Remarks <span className="text-[#FF0000]">*</span>
                  </label>
                  <div className="flex flex-col flex-1">
                    <input
                      type="text"
                      className="input"
                      {...register("remarks", { required: true })}
                    />
                    {errors.remarks && (
                      <span className="requiredField">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Width(inches) <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    type="text"
                    className="input2"
                    {...register("width", { required: true })}
                  />
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Print Option <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("printOption", { required: true })}
                  >
                    <option value="3 copies per page">3 copies per page</option>
                    <option value="Single copy per page">
                      Single copy per page
                    </option>
                    <option value="6x4 label">6x4 label</option>
                    <option value="3 labels per page">3 labels per page</option>
                  </select>
                </div>
              </div>
            </div>
          </Card>
          {/* Shipments End */}
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
export default Bookings;

Bookings.getInitialProps = async ({ req, res }) => {
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
