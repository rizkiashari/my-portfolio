import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='description' content='My Portfolio Rizki Ashari' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
