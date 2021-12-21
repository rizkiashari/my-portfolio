import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rizki Ashari | Home</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
