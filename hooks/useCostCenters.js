import { useEffect } from "react";
import { costcentersState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import Costcenters from "../api/costcenters";

const useCostCenters = () => {
  const [costCenters, setCostCenters] = useRecoilState(costcentersState);
  useEffect(async () => {
    if (costCenters.length === 0) {
      const lsCostCenters = localStorage.getItem("costCenters");
      if (lsCostCenters === null) {
        const costCenter = await Costcenters();

        localStorage.setItem("costCenters", JSON.stringify(costCenter));
      }
      setCostCenters(localStorage.getItem("costCenters"));
    }
  }, []);
};

export default useCostCenters;
