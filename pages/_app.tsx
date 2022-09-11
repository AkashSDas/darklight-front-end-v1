import "../styles/globals.css";

import { AppProps } from "next/app";

import { Navbar } from "@components/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
