const ExpressCenter = async (city) => {
  let header = {
    "Content-Type": "application/json",
    Authorization: "Token 36b8888c66697ed071786ba2cd8d4ed00e0dc0a6",
  };

  let requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: header,
    body: JSON.stringify({ city_code: city }),
  };

  const result = await fetch(
    "http://uatportal.tcs.com.pk:8000/express-center/",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
};

export default ExpressCenter;
