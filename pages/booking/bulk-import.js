import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import BookingLayout from "../../components/Bookings/BookingLayout";
import Card from "../../components/Bookings/Card";
import { parseCookies } from "../../helpers";
import Costcenters from "../../api/costcenters";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import Cities from "../../api/cities";
import { Providers } from "./../../api/provider";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import {API_END_POINTS} from './../../_common/constants';
import { uploadFileValidations, groupedData, 
  getLocalStorage, 
  getCurrentOrigin, 
  getCityById, 
  getCountrybyOriginId } from "../../_common/common-methods";
import BulkTables from "../../components/BulkTables";

let idNo = 0;

const createData = (
  name,
  address,
  mobile,
  email,
  city,
  pieces,
  weight,
  cod,
  order,
  special,
  service,
  product,
  remarks,
  insurance
) => ({
  id: idNo++,
  name,
  address,
  mobile,
  email,
  city,
  pieces,
  weight,
  cod,
  order,
  special,
  service,
  product,
  remarks,
  insurance,
});

const createFailedData = (
  name,
  address,
  mobile,
  email,
  city,
  pieces,
  weight,
  cod,
  order,
  special,
  service,
  product,
  remarks,
  insurance
) => ({
  id: idNo++,
  name,
  address,
  mobile,
  email,
  city,
  pieces,
  weight,
  cod,
  order,
  special,
  service,
  product,
  remarks,
  insurance,
  isEditMode: false,
});

const BulkImport = () => {
  const [costcenters, setCostcenters] = useState(null);
  const [pkCities, setPkCities] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    
  } = useForm();

  const dataLimit = 1;
  
  const costcenterRef = useRef();
  const origin = useRef();

  const [uploadedRows, setUploadedRows] = useState([
    createData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
    createData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
    createData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
  ]);
  const [successRows, setSuccessRows] = useState([
    createData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
    createData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
    createData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
  ]);
  const [failedRows, setFailedRows] = useState([
    createFailedData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
    createFailedData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
    createFailedData(
      "Muhamamd Ismail",
      "Korangi no. 5",
      "03161604575",
      "ismail.muhammad@tcs.com.pk",
      "Karachi",
      2,
      3,
      3000,
      12345,
      "-",
      "-",
      "-",
      "-",
      "-"
    ),
  ]);

  const handleCostcenter = async (e) => {
    const findOrigin = costcenters.find((data)=>data.id ==  e.target.value);
    const finCity = pkCities.find((data) => data.id == findOrigin.fk_city);
    origin.current.value = finCity.city_code;
  };

  useEffect(async () => {
    await onInt();

    const getcurrentOrigin = getCurrentOrigin(costcenterRef.current.value);
    const getSelectedCity = getCityById(getcurrentOrigin.fk_city);
    origin.current.value = getSelectedCity.city_code;
  }, []);


  

  const  onInt = async () => {
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    setCostcenters( getLocalStorage("costcenters"));
    setPkCities(getLocalStorage('pkcities'));
  }

  const onSubmit = async (data) => {
    const uploadfile = data.file[0];
    const costCode = costcenterRef.current.value
    const getorigin = origin.current.value
    const getCountry = getCountrybyOriginId(costCode);
    console.log(data, costCode, getorigin, getCountry);
    const validation = uploadFileValidations(uploadfile);
    if (validation.error) {
      console.log(validation.msg);
      return;
    }

    ExcelRenderer(uploadfile, async (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        const data = resp.rows.slice(1);
        if (data.length == 0) {
          return "data not found";
        }
        const csvRow = [];
        data.map((data) => {
          if (data.length > 0) {
            csvRow.push(apiPayload(data, costCode, getorigin, getCountry));
          }
        });

        const dataGrouped =  groupedData(csvRow, dataLimit);
        console.log(dataGrouped);
        // dataGrouped.map(async (data) => {
            // data[0]
            const obj = {...dataGrouped[0]};
            const callBooking = await new Providers().callApiPost(API_END_POINTS.POST_BOOKINGS, obj[0]);
            console.log(callBooking, obj);
        // });

      }
    });
  };

  const  apiPayload = (data, costCenter, originCity, countryData) => {
    return {
      "fk_cost_center": costCenter,
      "consignee_name": data[0],
      "consignee_address": data[1],
      "consignee_contact": data[2],
      "consignee_email": data[3],
      "pieces": data[5],
      "weight": data[6],
      "is_box": false,
      "height": 0,
      "width": 0,
      "length": 0,
      "fk_service": data[10],
      "origin_country": countryData.country_code,
      "origin_city": originCity,
      "destination_city": data[4],
      "destination_country": countryData.country_code,
      "remarks": data[12],
      "is_fragile": false,
      "is_insurance": false,
      "insurance_value": data[13],
      "product_detail": data[11],
      "cod_amount": data[7],
      "product_refrence":  data[8],
      "delivery_type": "Normal",
      "zip_code": "string"
    }
  }

  // const uploadObject = (data) => {
  //   return {
  //     consigneeName: data[0],
  //     consigneeAddress: data[1],
  //     consigneeMobile: data[2],
  //     consigneeEmail: data[3],
  //     destinationCity: data[4],
  //     pieces: data[5],
  //     weight: data[6],
  //     codamount: data[7],
  //     referenceNumber: data[8],
  //     specialHandling: data[9],
  //     serviceType: data[10],
  //     productDetails: data[11],
  //     remarks: data[12],
  //     insurance: data[13],
  //   };
  // };

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
          <Card heading="Booking by CSV File">
            <div className="flex flex-col items-center gap-3">
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
                  // ref={element => this.inputRef.current = element}
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
                <label className="label">
                  Origin <span className="text-[#FF0000]">*</span>
                </label>
                <select
                  type="text"
                  className="input2 text-[#464E5F] text-sm"
                  {...register("origin")}
                  ref={origin}
                  disabled
                >
                  {pkCities.length !== 0 && pkCities.map((city) => (
                      <option key={city.id} value={city.city_code}>
                        {city.city_name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">
                  Print Option <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="file"
                  className="input text-[#464E5F] text-sm"
                  {...register("file")}
                />
              </div>
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">
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
              <div className="flex-1 flex justify-center items-center gap-4 w-full">
                <Button
                  text="Upload"
                  bgColor="#4CAF50"
                  color="white"
                  width="11rem"
                  type="submit"
                ></Button>
              </div>
            </div>
          </Card>
          <Card heading="Instructions">
            <div className="flex flex-col gap-4">
              <a
                className="text-[#337ab7]"
                href="/documents/Booking_by_CSV.csv"
                download
              >
                Click here to download CSV format file
              </a>
              <p className="font-bold text-sm">
                Upload csv file on below format. Columns must be in order below
                and headers must also be present.
              </p>
              <ul className="list-inside list-decimal text-xs flex gap-6">
                <div className="flex-1">
                  <li>Consignee Name (Max. 90 characters)</li>
                  <li>Consignee Address (Max. 500 characters)</li>
                  <li>Consignee Mobile Number (Max. 50 characters)</li>
                  <li>Consignee Email (Max. 100 characters)</li>
                  <li>Destination City (Max. 90 characters)</li>
                  <li>Pieces (Min:1, Max:9)</li>
                  <li>Weight (Min:0.5, Max:1000)</li>
                </div>
                <div className="flex-1">
                  <li>COD Amount (Max. 250000)</li>
                  <li>Order Reference Number (Max. 50 characters)</li>
                  <li>Special Handling (Yes/No)</li>
                  <li>Service Type (O/D/S/OLE/MYO)</li>
                  <li>Product Details (Max. 999 characters)</li>
                  <li>Remarks (Max. 450 characters)</li>
                  <li>Insurance/Declared Value (Min. 10 & Max. 300000)</li>
                </div>
              </ul>
              <p className="text-xs">
                Please ensure to provide complete and full address. Address
                issues are primary reasons of return shipments.
              </p>
            </div>
          </Card>
        </div>
        {true && (
          <div className="media mx-auto p-4 flex gap-6">
            <Card>
              <BulkTables
                uploadedRows={uploadedRows}
                successRows={successRows}
                failedRows={failedRows}
              />
            </Card>
          </div>
        )}
      </Layout>
    </form>
  );
};

export default BulkImport;

BulkImport.getInitialProps = async ({ req, res }) => {
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
