import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gsap } from "gsap";
import Style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rizki Ashari | Home</title>
      </Head>
      <div className={Style.container}></div>
    </>
  );
};

export default Home;
