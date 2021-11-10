import { useEffect, useRef, useState } from "react";
import login from "../api/login";
import { useRouter } from "next/router";
import { parseCookies } from "../helpers/";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import useCostCenters from "../hooks/useCostCenters";
import useCountries from "../hooks/useCountries";
import Countries from "../api/countries";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [cookie, setCookie] = useCookies(["token"]);
  const [isLoading, setIsLoading] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const handleLogin = async (username, password) => {
    setIsLoading(true);
    const res = await login(username, password);
    console.log(res);

    if ("token" in res) {
      localStorage.setItem("token", res.token);
      setCookie("token", JSON.stringify(res), {
        path: "/",
        maxAge: 7200, // Expires after 2hr
        sameSite: true,
      });
      const country = await Countries();
      localStorage.setItem("countries", JSON.stringify(country));
      router.push("/dashboard");
    } else {
      setIsLoading(false);
      setIncorrect(true);
      setTimeout(() => {
        setIncorrect(false);
      }, 2000);
    }
  };

  const onSubmit = async (data) => {
    handleLogin(data.username, data.password);
    console.log(data.username);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-[100vh]"
      style={{
        backgroundImage: "url(/login-Image.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1 flex justify-end items-center w-full">
        <div className="bg-[#F1F4F6] w-[25rem] rounded-md p-[2rem] mr-[10rem]">
          <img src="/logo.svg" alt="" className="h-10" />
          <p className="mt-4 text-[1rem]">Welcome to OneBooking </p>
          <h1 className="text-[2.2rem] font-semibold">Sign in</h1>
          {/* Incorrect Username or Password */}
          {incorrect && (
            <div
              className="flex w-full justify-between items-center self-center border-2 border-red-500 px-3 py-2 text-red-500 rounded-md mb-3"
              onClick={() => setIncorrect(false)}
            >
              <small>Incorrect username or password. please try again!</small>
              <ClearIcon fontSize="small" className="cursor-pointer" />
            </div>
          )}
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="username" className="text-xs">
              Enter your username or email address
            </label>
            <input
              type="text"
              placeholder="Username or email address"
              id="username"
              className="rounded-md focus:outline-none text-xs p-3"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-xs text-red-600">
                Username or email is required
              </span>
            )}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="password" className="text-xs">
              Enter your password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="rounded-md focus:outline-none text-xs p-3"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-600">Password is required</span>
            )}
            <div className="text-xs flex justify-between">
              <div className="flex gap-1 justify-center items-center">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="">Forget Password</div>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-[2rem] mb-[2rem]">
            <button className="bg-[#4CAF50] rounded-md h-[2.3rem] flex justify-center items-center text-white text-sm w-[10rem]">
              {isLoading ? (
                <CircularProgress style={{ color: "white" }} size="20px" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center p-3">
        All Rights Reserved TCS - a TRANZUM enterprise
      </div>
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
