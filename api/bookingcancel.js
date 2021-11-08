const Bookingcancel = async () => {
    const token = localStorage.getItem("token");
    let header = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
  
    let requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: header,
    };
  
    const result = await fetch(
      "http://uatportal.tcs.com.pk:8000/bookingscancel/",
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  
    return result;
  };
  
  export default Bookingcancel;
  