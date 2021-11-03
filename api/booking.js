const Booking = async (
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
) => {
  const token = localStorage.getItem("token");
  let header = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  let requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: header,
    body: JSON.stringify({
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
      zip_code,
    }),
  };

  const result = await fetch(
    "http://uatportal.tcs.com.pk:8000/bookings/",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
};

export default Booking;
