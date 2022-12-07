import { data } from "autoprefixer";
import React from "react";
import styles from "../styles/styles";
import {
  businessDesc,
  businessText,
  businessTextAfter,
  features,
} from "../data/business";
import FeatureCard from "./FeatureCard";
import Button from "./Button";

const Business = () => {
  return (
    <section id="features" className={`${styles.flexCenter} md:flex-row flex-col  mt-16 md:p-0 px-8 md:gap-32 gap-4`}>
      <div className={`flex flex-col justify-center items-start gap-2 md:w-2/3 w-full`}>
        <div className={`${styles.h2Text} `}>{businessText}</div>
        <div className={`${styles.h2Text}`}>{businessTextAfter}</div>
        <div className={`${styles.paragraph} max-w-[500px] text-gray-400`}>
          {businessDesc}
        </div>
        <Button></Button>
      </div>
      <div className={`flex flex-col justify-center items-start gap-4`}>
        {features.map(({ id, icon,  title, content }: any) => (
            <FeatureCard key={id} id={id} icon={icon} title={title} content={content}></FeatureCard>
        ))}{" "}
      </div>
    </section>
  );
};

export default Business;
