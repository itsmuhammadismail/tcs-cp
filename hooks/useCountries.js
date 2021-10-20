import { useEffect } from "react";
import { countriesState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import Countries from "../api/countries";

const useCountries = () => {
  const [countries, setCountries] = useRecoilState(countriesState);
  useEffect(async () => {
    if (countries.length === 0) {
      const lsCountries = localStorage.getItem("countries");
      if (lsCountries === null) {
        const country = await Countries();
        console.log(country);
        localStorage.setItem("countries", JSON.stringify(country));
      }
      setCountries(localStorage.getItem("countries"));
    }
  }, []);
};

export default useCountries;
