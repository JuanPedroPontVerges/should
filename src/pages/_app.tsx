import { type AppType } from "next/app";

import { api } from "~/utils/api";

import localFont from "next/font/local";

import "~/styles/globals.css";

export const calSans = localFont({ src: "./fonts/CalSans-SemiBold.woff2" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
