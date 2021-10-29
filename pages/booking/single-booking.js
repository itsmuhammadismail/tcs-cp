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
import { useEffect, useRef } from "react";
import {
  citiesState,
  costcentersState,
  servicesState,
} from "../../recoil/atoms";
import Cities from "../../api/cities";
import Costcenters from "../../api/costcenters";
import Services from "../../api/services";
import ExpressCenter from "../../api/expressCenter";

const Bookings = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useRecoilState(citiesState);
  // const [costcenters, setCostcenters] = useRecoilState(costcentersState);
  const [costcenters, setCostcenters] = useState(null);
  const [expressCenter, setExpressCenter] = useState(null);
  const [services, setServices] = useRecoilState(servicesState);
  const [showExpCenter, setShowExpCenter] = useState(true);
  const [showZip, setShowZip] = useState(false);

  const consigneeAddress = useRef();

  const customerName = useRef();
  const contactNumber = useRef();
  const customerEmail = useRef();
  const customerAddress = useRef();

  const origin = useRef();

  useEffect(async () => {
    let cont = [];
    if (countries.length === 0) {
      setCountries(JSON.parse(localStorage.getItem("countries")));
      cont = JSON.parse(localStorage.getItem("countries"));
    }
    const res = await Cities(1);
    setCities(res);
    const rescost = await Costcenters();
    setCostcenters(rescost);
    contactNumber.current.value = rescost[0].phone_number;
    customerEmail.current.value = rescost[0].email;
    customerAddress.current.value = rescost[0].pickup_address;
    const resservice = await Services(21);
    setServices(resservice);
    const resExp = await ExpressCenter(res[0].city_code);

    setExpressCenter(resExp["items"]);
    if (resExp["items"][0] !== undefined)
      consigneeAddress.current.value = resExp["items"][0].address;

    let originCountry = rescost[0].fk_country;
    let originCity = rescost[0].fk_city;

    for (let country of cont) {
      let theCities = await Cities(originCountry);
      if (country.id == originCountry) {
        console.log(theCities);
        for (let city of theCities) {
          console.log(city.id, originCity);
          if (city.id == originCity) {
            origin.current.value = city.city_name;
          }
        }
      }
    }
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleCountry = async (e) => {
    const res = await Cities(e.target.value);
    setCities(res);
    e.target.value == 1 ? setShowZip(false) : setShowZip(true);
  };

  const handleCity = async (e) => {
    const res = await ExpressCenter(e.target.value);

    setExpressCenter(res["items"]);
    if (res["items"] !== undefined && res["items"][0] !== undefined)
      consigneeAddress.current.value = res["items"][0].address;
    else consigneeAddress.current.value = "";
    console.log(res["items"][0]);
  };

  const handleExpress = async (e) => {
    for (let exp of expressCenter) {
      if (exp.route_code === e.target.value) {
        console.log(e.target.value);
      }
    }
  };

  const handleCostcenter = async (e) => {
    const resservice = await Services(e.target.value);
    setServices(resservice);
    for (let cc of costcenters) {
      console.log("cc", cc);
    }
  };

  const [boxAvailability, setBoxAvailability] = useState("yes");

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
                  {...register("costCenter", { required: true })}
                  onChange={handleCostcenter}
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
                    onChange={(e) => {
                      e.target.value === "My Collect"
                        ? setShowExpCenter(false)
                        : setShowExpCenter(true);
                    }}
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
                    onChange={handleCountry}
                  >
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.country_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label">
                    City <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm max-w-[10.8rem]"
                    {...register("city", { required: true })}
                    onChange={handleCity}
                  >
                    {cities.map((city) => (
                      <option key={city.id} value={city.city_code}>
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
                    disabled={showExpCenter}
                    className="input text-[#464E5F] text-sm max-w-[10.8rem]"
                    {...register("exprCenter", { required: true })}
                    onChange={handleExpress}
                  >
                    {expressCenter &&
                      expressCenter.map((express) => (
                        <option
                          key={express.route_code}
                          value={express.exp_name}
                        >
                          {express.exp_name}
                        </option>
                      ))}
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
                  <textarea
                    type="text"
                    className="input2 flex-1"
                    {...register("address", { required: true })}
                    ref={consigneeAddress}
                    disabled
                  />
                  {errors.shipmentDetails && (
                    <span className="requiredField">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              {showZip && (
                <div className="flex-1 flex items-center gap-4 w-full">
                  <div className="flex-1 flex items-center gap-4 w-full">
                    <label className="label">
                      Zip Code <span className="text-[#FF0000]">*</span>
                    </label>
                    <div className="flex flex-1 flex-col">
                      <input
                        type="text"
                        className="input "
                        {...register("zipcode", { required: true })}
                      />
                      {errors.zipcode && (
                        <span className="requiredField">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
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
                  disabled
                  className="input2"
                  {...register("customerName")}
                  ref={customerName}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Contact Number</label>
                <input
                  type="number"
                  disabled
                  className="input2"
                  {...register("contactNumber")}
                  ref={contactNumber}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Email</label>
                <input
                  type="email"
                  disabled
                  className="input2"
                  {...register("customerEmail")}
                  ref={customerEmail}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Contact Person</label>
                <input
                  type="text"
                  disabled
                  className="input2"
                  {...register("contactPerson")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">Address</label>
                <textarea
                  type="text"
                  disabled
                  className="input2 h-[5rem] resize-none"
                  {...register("customerAddress")}
                  ref={customerAddress}
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
                    type="number"
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
                    type="number"
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
                  <input
                    type="text"
                    className="input2 text-[#464E5F] text-sm"
                    {...register("origin", { required: true })}
                    ref={origin}
                    disabled
                  />
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
