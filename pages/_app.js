import "antd/dist/antd.css";
import "../styles/globals.css";
import FetchInitials from "../libs/FetchInitials";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <CookiesProvider>
        <>
          <FetchInitials />
          <Component {...pageProps} />
        </>
      </CookiesProvider>
    </RecoilRoot>
  );
}

export default MyApp;
