const loadsheetDate = async (id) => {
  const token = localStorage.getItem("token");
  let header = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };

  let requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: header,
    body: JSON.stringify({ fk_costcenter: id }),
  };

  const result = await fetch(
    "http://uatportal.tcs.com.pk:8000/loadsheetbookingdate/",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
};

export default loadsheetDate;
