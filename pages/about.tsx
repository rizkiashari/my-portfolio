import type { NextPage } from "next";
import React, { useEffect, useRef } from "react";
import Style from "../styles/About.module.css";
import Head from "next/head";
import { gsap } from "gsap";

const AboutPage: NextPage = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "elastic.inOut(1, 0.5)",
      }
    );
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "elastic.inOut(1, 0.5)",
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Rizki Ashari | About Me</title>
      </Head>
      <div className={Style.container}>
        <img src='/rectangle.png' className={Style.rectangle01} />
        <img src='/rectangle.png' className={Style.rectangle02} />
        <img src='/rectangle.png' className={Style.rectangle03} />
        <div className={Style.Content}>
          <div ref={imgRef} className={Style.ContainerImage}>
            <img src='/about-me.png' alt='About Me' className={Style.Image} />
          </div>
          <div ref={textRef} className={Style.ContainerText}>
            <h3 className={Style.Title}>About Me</h3>
            <p className={Style.Subtitle}>
              I’m Rizki Ashari and Frontend Developer from Indonesia
            </p>
            <p className={Style.Subtitle}>
              I always have solved some UI problems & understood concepts in
              HTML, CSS, JavaScript.
            </p>
            <p className={Style.Subtitle}>
              Currently, the main focus is on using JavaScript technology
            </p>
            <div className={Style.CVButton}>
              <a
                href='/Rizki_Ashari_CV.pdf'
                download={"CV_RizkiAshari.pdf"}
                className={Style.Button}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
