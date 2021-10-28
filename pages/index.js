import { ConstructionOutlined } from "@mui/icons-material";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import login from "../api/login";
import { useRouter } from "next/router";
import { parseCookies } from "../helpers/";
import { useCookies } from "react-cookie";

const Login = () => {

  const router = useRouter();
  const username = useRef();
  const password = useRef();
  const [token, setToken] = useState(null);
  const [cookie, setCookie] = useCookies(["token"]);

  const registeruser = async (event) => {
    event.preventDefault();
    const res = await login(username.current.value, password.current.value);
    console.log(res);
    setToken(res);
    if ("token" in res) {
      localStorage.setItem("token", res.token);
      setCookie("token", JSON.stringify(res), {
        path: "/",
        maxAge: 7200, // Expires after 2hr
        sameSite: true,
      });
      router.push("/dashboard");
    }
  };

  return (
    <form className="flex justify-center items-center w-full h-[100vh]">
      <div className="flex-1 items-center flex flex-col w-full h-full">
        <img src="/logo.svg" alt="" className="h-12 mt-12" />
        <div className="flex-1 flex flex-col justify-center items-center mt-[-3rem]">
          <h1 className="font-semibold text-[2rem]">Sign in</h1>
          <div className="flex flex-col mt-2">
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input type="text" className="input2 w-[18rem]" ref={username} />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <input type="text" className="input2 w-[18rem]" ref={password} />
          </div>
          <button
            onClick={registeruser}
            className="rounded-md h-[2.5rem] flex justify-center items-center font-semibold text-sm gap-3 bg-[#4cb050] w-[18rem] text-white mt-[1rem]"
          >
            Sign in
          </button>
        </div>
      </div>
      <div
        className="flex-1 bg-[#fcfeff] w-full h-full"
        style={{ backgroundImage: "url('/Visual.svg')" }}
      ></div>
    </form>
  );
};

export default Login;

Login.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (
      !(
        (Object.keys(data).length === 0 && data.constructor === Object) ||
        Object(data).token === "undefined"
      )
    ) {
      res.writeHead(301, { Location: "/dashboard" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
