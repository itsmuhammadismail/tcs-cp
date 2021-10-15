import Header from "./Header";
import Footer from "./Footer";
// import { useEffect } from "react";
// import axios from "axios";

const Layout = ({ children }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async () => {
  //   // var myHeaders = new Headers();
  //   // myHeaders.append("", "36b8888c66697ed071786ba2cd8d4ed00e0dc0a6");

  //   var header = {
  //     "Content-type": "application/json",
  //     Authorization: "Token aaaaaa",
  //   };
  //   var requestOptions = {
  //     method: "GET",
  //     headers: header,
  //     redirect: "follow",
  //   };

  //   fetch("http://uatportal.tcs.com.pk:8000/setup/", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }, []);
  return (
    <main className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
