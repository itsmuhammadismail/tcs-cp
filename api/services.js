const Services = async (cost_center) => {
  const token = localStorage.getItem("token");
  let header = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  let requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: header,
    body: JSON.stringify({ cost_center: cost_center }),
  };

  const result = await fetch(
    "http://uatportal.tcs.com.pk:8000/services/",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
};

export default Services;
