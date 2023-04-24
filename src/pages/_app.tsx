import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import NavBar from "~/components/nav-bar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <NavBar></NavBar>
    <Component {...pageProps} />
    </>;
};

export default api.withTRPC(MyApp);