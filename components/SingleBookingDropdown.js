import { useEffect, useRef, useState } from "react";
import useVisible from "../hooks/useVisible";
import Link from "next/link";

const SingleBookingDropdown = ({ showDropdown, setShowDropdown, name }) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef();

  useEffect(() => setVisible(showDropdown), [showDropdown]);

  useVisible(ref, () => {
    setVisible(false);
    setShowDropdown();
  });

  return (
    <>
      {visible && (
        <div
          ref={ref}
          style={{ boxShadow: "0px 0px 50px 0px rgba(82,63,105,0.2)" }}
          className="absolute top-[3rem] right-0 bg-white  rounded-2xl z-[100] flex overflow-hidden text-xs"
        >
          <ul className="my-4 w-[11rem]">
            <Link href="/booking/bulk-import">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Bulk Import" && "bg-[#F3F6F9]"
                  }`}
                >
                  Bulk Import
                </li>
              </a>
            </Link>
            <Link href="/booking/single-booking">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Single Booking" && "bg-[#F3F6F9]"
                  }`}
                >
                  Single Booking
                </li>
              </a>
            </Link>
            <Link href="/booking/reprint-cn">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Re-print CN Label" && "bg-[#F3F6F9]"
                  }`}
                >
                  Re-print CN Label
                </li>
              </a>
            </Link>
            <Link href="/booking/cancel-booking">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Cancel Booking Records" && "bg-[#F3F6F9]"
                  }`}
                >
                  Cancel Booking Records
                </li>
              </a>
            </Link>
            <Link href="/booking/generate-loadsheet">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Generate Load Sheet" && "bg-[#F3F6F9]"
                  }`}
                >
                  Generate Load Sheet
                </li>
              </a>
            </Link>
            <Link href="/booking/complain-request">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Complain/Service Request" && "bg-[#F3F6F9]"
                  }`}
                >
                  Complain/Service Request
                </li>
              </a>
            </Link>
            <Link href="/booking/create-event">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Create Events" && "bg-[#F3F6F9]"
                  }`}
                >
                  Create Events
                </li>
              </a>
            </Link>
            <Link href="/booking/pickup-request">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Pickup Request" && "bg-[#F3F6F9]"
                  }`}
                >
                  Pickup Request
                </li>
              </a>
            </Link>
            <Link href="/booking/create-return">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Create Return" && "bg-[#F3F6F9]"
                  }`}
                >
                  Create Return
                </li>
              </a>
            </Link>

            {/* <Link href="/booking/international-booking">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "International Booking" && "bg-[#F3F6F9]"
                  }`}
                >
                  International Booking
                </li>
              </a>
            </Link>
            <Link href="/booking/mms-booking">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "MMS Booking" && "bg-[#F3F6F9]"
                  }`}
                >
                  MMS Booking
                </li>
              </a>
            </Link>
            <Link href="/booking/pouch-manifest">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Pouch Manifest" && "bg-[#F3F6F9]"
                  }`}
                >
                  Pouch Manifest
                </li>
              </a>
            </Link>
            <Link href="/booking/security-scan-manifest">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Security Scan Manifest" && "bg-[#F3F6F9]"
                  }`}
                >
                  Security Scan Manifest
                </li>
              </a>
            </Link>
            <Link href="/booking/security-scan-forwarding">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Security Scan Forwarding" && "bg-[#F3F6F9]"
                  }`}
                >
                  Security Scan Forwarding
                </li>
              </a>
            </Link>

            <Link href="/booking/security-scan-recieving">
              <a>
                <li
                  className={`px-4 py-2 hover:bg-[#F3F6F9] ${
                    name === "Security Scan Recieving" && "bg-[#F3F6F9]"
                  }`}
                >
                  Security Scan Recieving
                </li>
              </a>
            </Link> */}
          </ul>
        </div>
      )}
    </>
  );
};

export default SingleBookingDropdown;
