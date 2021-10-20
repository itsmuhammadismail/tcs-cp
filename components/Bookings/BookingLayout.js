import { useEffect, useState } from "react";
import Button2 from "../../components/Button2";
import SingleBookingDropdown from "../../components/SingleBookingDropdown";
import { useRouter } from "next/router";

const BookingLayout = () => {
  const { pathname } = useRouter();
  const [dropdown, setDropdown] = useState();
  const handleDropdown = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const [name, setName] = useState("Single Booking");

  useEffect(() => {
    switch (pathname) {
      case "/booking/single-booking":
        setName("Single Booking");
        break;
      case "/booking/reprint-cn":
        setName("Re-print CN Label");
        break;
      case "/booking/pickup-request":
        setName("Pickup Request");
        break;
      case "/booking/cancel-booking":
        setName("Cancel Booking");
        break;  
      case "/booking/generate-loadsheet":
        setName("Generate Loadsheet");
        break;
      case "/booking/complain-request":
          setName("Complain/Service Request");
        break;
      case "/booking/international-booking":
            setName("International Booking");
        break;

      case "/booking/mms-booking":
          setName("MMS Booking");
        break;  
      case "/booking/pouch-manifest":
        setName("Pouch Manifest");
        break; 

      case "/booking/security-scan-manifest":
        setName("Security Scan Manifest");
      break;   

      case "/booking/security-scan-forwarding":
        setName("Security Scan Forwarding");
      break;
      
      case "/booking/security-scan-recieving":
        setName("Security Scan Recieving");
      break;
          
    }
  }, [pathname]);

  return (
    <div className="flex justify-between items-center p-4 media mx-auto">
      <h1 className="font-semibold text-lg">Booking for Customer</h1>
      <div className="relative flex ">
        <Button2
          text={name}
          rightIcon="/icons/down.svg"
          width="11rem"
          bgColor="#F3F6F9"
          color="black"
          onClick={handleDropdown}
        />
        <SingleBookingDropdown
          showDropdown={dropdown}
          setShowDropdown={handleDropdown}
          name={name}
        />
      </div>
    </div>
  );
};

export default BookingLayout;
