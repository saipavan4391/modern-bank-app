import React from "react";
import { paymentsTitle, paymentsContent } from "../data/payments";
import styles from "../styles/styles";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

const Payments = () => {
  return (
    <section
      id="payments"
      className={`${styles.flexCenter} md:flex-row-reverse  flex-col  mt-16 md:p-0 px-8 gap-8 `}
    >
      <div
        className={`flex flex-col justify-center items-start gap-2 md:w-2/3 w-full`}
      >
        <div className={`${styles.h2}`}>{paymentsTitle}</div>
        <div className={`${styles.paragraph} max-w-[500px] text-gray-400`}>
          {paymentsContent}
        </div>
        <Button></Button>
      </div>
      <div className={`flex flex-col justify-center items-start gap-4`}>
        <img
          src="/assets/bill.png"
          alt="bill"
          className={` md:w-[85%] w-[100%] md:h-[85%] h-[100%] `}
        ></img>{" "}
      </div>
    </section>
  );
};

export default Payments;
