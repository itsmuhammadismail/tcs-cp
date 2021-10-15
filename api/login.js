import axios from "axios";

const login = async () => {
  var data = JSON.stringify({
    username: "admin",
    password: "123456",
  });

  let headers = { "Content-Type": "application/json" };
  headers.append("Accept", "application/json");

  headers.append(
    "Access-Control-Allow-Origin",
    "http://uatportal.tcs.com.pk:8000"
  );
  headers.append("Access-Control-Allow-Credentials", "true");

  console.log(headers);

  var config = {
    method: "post",
    url: "http://uatportal.tcs.com.pk:8000/login/",
    headers: headers,
    data: data,
  };

  const res = await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
};

export default login;
