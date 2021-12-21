import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gsap } from "gsap";
import Style from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Rizki Ashari | Home</title>
      </Head>
      <div className={Style.container}>
        <div className={Style.content}>
          <div className={Style.Title}>
            <h3>Hi, I’m Rizki Ashari Front end Developer</h3>
          </div>
          <button
            onClick={() => router.push("/about")}
            className={Style.Button}>
            About me
            <svg
              width='42'
              height='42'
              viewBox='0 0 42 42'
              fill='none'
              className={Style.arrow}
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M28.0175 19.25H7V22.75H28.0175V28L35 21L28.0175 14V19.25Z'
                fill='black'
              />
            </svg>
          </button>
        </div>
        <div className={Style.Image}>
          <Image
            src='/Photo.png'
            objectFit='cover'
            layout='responsive'
            alt='profile'
            quality={100}
            height={120}
            width={120}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
