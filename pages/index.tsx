import type { NextPage } from "next";
import Head from "next/head";
import { gsap } from "gsap";
import Style from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: -400,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: -400,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "elastic.in(2, 4.3)",
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Rizki Ashari | Home</title>
      </Head>
      <div className={Style.container}>
        <div ref={textRef} className={Style.content}>
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
        <img
          ref={imageRef}
          alt='Image'
          src='/Photo.png'
          className={Style.Image}
        />
      </div>
    </>
  );
};

export default Home;
