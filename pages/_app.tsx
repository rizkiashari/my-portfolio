import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/normalize.css";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import SosialMedia from "../components/SosialMedia";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='description' content='My Portfolio Rizki Ashari' />
      </Head>
      <Navbar />
      <SosialMedia />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
