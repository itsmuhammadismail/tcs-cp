

const login = async (username, password) => {
  

  let headers = { "Content-Type": "application/json" };


  var raw = JSON.stringify({
    "username": username,
    "password": password
  });
  
  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: raw,
    redirect: 'follow'
  };
  

  const res = await fetch("http://uatportal.tcs.com.pk:8000/login/", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));

  return res;
};

export default login;
