import "antd/dist/antd.css";
import "../styles/globals.css";
import FetchInitials from "../libs/FetchInitials";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <>
        <FetchInitials />
        <Component {...pageProps} />
      </>
    </RecoilRoot>
  );
}

export default MyApp;
