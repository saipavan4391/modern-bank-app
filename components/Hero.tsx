import React from "react";
import Image from "next/image";

import styles from "../styles/styles";
import GetStarted from "./GetStarted";

const Hero = (props: any) => {
  return (
    <section
      id="home"
      className={`${styles.flexStart} flex-col md:p-0 px-8`}
    >
      <div className={`flex md:flex-row flex-col justify-between items-center text-white`}>
        <div className={`flex-col ${styles.flexStart} `}>
          <div className={`flex flex-1 flex-row gap-2`}>
            <img src="/assets/arrow-up.svg" />
            <div className={`${styles.paragraph}`}>
              <span> 20% </span>
              <span className="text-gray-400">DISCOUNT FOR</span>{" "}
              <span>1 MONTH ACCOUNT</span>{" "}
            </div>
          </div>
          <div className={`flex flex-col justify-start items-start w-full leading-tight `}>
            <div className={`ss:text-[64px] text-[52px] -pb-[20px]`}>
              The Next
            </div>
            <div className={`ss:text-[64px] text-[52px] text-gradient`}>
              Generation
            </div>
            <div className={`ss:text-[64px] md:hidden block text-[52px] -pb-[20px]`}>
              Payment Method
            </div>
            <div className={`${styles.paragraph}  md:hidden block text-gray-400 pt-4`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </div>
          </div>
        </div>
        <div className={`m-4 cursor-pointer`}>
          <GetStarted></GetStarted>
        </div>

        <div className="relative">
          <img
            src="/assets/robot.png"
            alt="robot"
            className={` w-[100%] h-[100%] `}
          ></img>
        </div>
      </div>
      <div className={`${styles.flexStart} flex-col md:block hidden lg:-mt-64 md:-mt-48 m-2` }>
        <div className={`ss:text-[64px] text-[52px] text-white`}>Payment Method</div>
        <div className={`${styles.paragraph} max-w-[550px] text-gray-400 pr-32`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </div>
      </div>
    </section>
  );
};

export default Hero;
