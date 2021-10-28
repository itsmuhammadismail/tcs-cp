import useCostCenters from "../hooks/useCostCenters";
import useCountries from "../hooks/useCountries";

const FetchInitials = () => {
  useCountries();
  useCostCenters();
  return <></>;
};

export default FetchInitials;
