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
import Booking from "../../api/booking";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Bookings = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useRecoilState(citiesState);
  const [pkCities, setPkCities] = useState([]);
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
  const contactPerson = useRef();
  const customerAddress = useRef();

  const costcenterRef = useRef();

  const countryRef = useRef();
  const cityRef = useRef();

  const expCenterRef = useRef();
  const origin = useRef();
  const servicesRef = useRef();

  const zipcode = useRef();

  const MySwal = withReactContent(Swal);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(async () => {
    let cont = [];
    if (countries.length === 0) {
      setCountries(JSON.parse(localStorage.getItem("countries")));
      cont = JSON.parse(localStorage.getItem("countries"));
    }
    const res = await Cities(1);
    setCities(res);
    setPkCities(res);
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
        for (let city of theCities) {
          if (city.id == originCity) {
            origin.current.value = city.city_code;
          }
        }
      }
    }
  }, []);

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
  const [fragile, setFragile] = useState("yes");

  const onSubmit = async (data) => {
    const fk_cost_center = +costcenterRef.current.value;
    const consignee_name = data.name;
    const consignee_address = consigneeAddress.current.value;
    const consignee_contact = data.contact;
    const consignee_email = data.email;
    const pieces = +data.pieces;
    const weight = +data.weight;
    const is_box = boxAvailability === "yes" ? true : false;
    const height = +data.height;
    const width = +data.width;
    const length = +data.length;
    const fk_service = +servicesRef.current.value;
    const origin_country = "PK";
    const origin_city = origin.current.value;
    const destination_city = cityRef.current.value;
    const destination_country_id = countryRef.current.value;
    const destination_country_list = countries.filter((country) => {
      if (+destination_country_id === country.id) return country;
    });
    console.log(
      "Destination Country list ",
      destination_country_list[0].country_code
    );
    const destination_country = destination_country_list[0].country_code;
    const remarks = data.remarks;
    const is_fragile = fragile === "yes" ? true : false;
    const is_insurance = data.insurance !== "" ? true : false;
    const insurance_value = data.insurance;
    const product_detail = data.shipmentDetails;
    const cod_amount = +data.codAmount;
    const product_refrence = data.orderRef;
    const delivery_type = data.deliveryType;
    let zip_code = "";
    if (showZip) zip_code = zipcode.current.value;
    const res = await Booking(
      fk_cost_center,
      consignee_name,
      consignee_address,
      consignee_contact,
      consignee_email,
      pieces,
      weight,
      is_box,
      height,
      width,
      length,
      fk_service,
      origin_country,
      origin_city,
      destination_city,
      destination_country,
      remarks,
      is_fragile,
      is_insurance,
      insurance_value,
      product_detail,
      cod_amount,
      product_refrence,
      delivery_type,
      zip_code
    );
    console.log(res);

    // await MySwal.fire({
    //   title: "Booking Successfull",
    //   icon: "success",
    // });
    await MySwal.fire({
      title: "Booking Failed",
      icon: "error",
    });
  };

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
                  {...register("costCenter")}
                  onChange={handleCostcenter}
                  ref={costcenterRef}
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
                    {...register("deliveryType")}
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
                    {...register("country")}
                    onChange={handleCountry}
                    ref={countryRef}
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
                    {...register("city")}
                    onChange={handleCity}
                    ref={cityRef}
                  >
                    {cities &&
                      cities.map((city) => (
                        <option key={city.id} value={city.city_code}>
                          {city.city_name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                {showZip ? (
                  <div className="flex-1 flex items-center gap-4 w-full">
                    <div className="flex-1 flex items-center gap-4 w-full">
                      <label className="label">
                        Zip Code <span className="text-[#FF0000]">*</span>
                      </label>
                      <div className="flex flex-1 flex-col">
                        <input
                          type="text"
                          className="input "
                          {...register("zipcode")}
                          ref={zipcode}
                        />
                        {errors.zipcode && (
                          <span className="requiredField">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center gap-4 w-full">
                    <label className="label">
                      Expr Center <span className="text-[#FF0000]">*</span>
                    </label>
                    <select
                      type="text"
                      disabled={showExpCenter}
                      className="input text-[#464E5F] text-sm max-w-[10.8rem]"
                      {...register("exprCenter")}
                      onChange={handleExpress}
                      ref={expCenterRef}
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
                )}

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
                    {...register("address")}
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
                    {...register("pieces")}
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
                      value={boxAvailability}
                      onChange={(e) => setBoxAvailability(e.target.value)}
                      // {...register("boxAvailability")}
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
                      value={fragile}
                      onChange={(e) => setFragile(e.target.value)}
                      // {...register("fragile", { required: true })}
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
                    className="input2 text-[#464E5F] text-sm"
                    {...register("origin")}
                    ref={origin}
                    disabled
                  >
                    {pkCities.length !== 0 &&
                      pkCities.map((city) => (
                        <option key={city.id} value={city.city_code}>
                          {city.city_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex-1 flex items-center gap-4 w-full">
                  <label className="label2">
                    Services <span className="text-[#FF0000]">*</span>
                  </label>
                  <select
                    type="text"
                    className="input text-[#464E5F] text-sm"
                    {...register("services")}
                    ref={servicesRef}
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
                    {...register("printOption")}
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
