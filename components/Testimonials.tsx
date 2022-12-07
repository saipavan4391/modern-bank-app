import React from "react";
import {
  clients,
  testimonials,
  testSectionDesc,
  testSectionTitle,
} from "../data/testimonials";
import styles from "../styles/styles";
import Button from "./Button";
import Client from "./Client";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="payments"
      className={`flex flex-col justify-start items-center gap-8`}
    >
      <div
        className={`flex md:flex-row flex-col justify-start md:items-center items-start md:mt-16 m-4 md:p-0 px-8 md:gap-32 gap-4`}
      >
        <div className={`${styles.h2Text} md:w-2/5 w-full`}>{testSectionTitle}</div>
        <div className={`${styles.paragraph} max-w-[400px] text-gray-400`}>
          {testSectionDesc}
        </div>
      </div>

      <div
        className={`flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center mt-16 md:p-0 px-4`}
      >
        {testimonials.map(({ id, content, name, title, img }: any) => (
          <TestimonialCard
            key={id}
            id={id}
            img={img}
            name={name}
            title={title}
            content={content}
          > </TestimonialCard>
        ))}
      </div>

      <div
        className={`flex md:flex-row flex-col justify-between items-center mt-16 md:p-0 px-4 gap-16`}
      >
        {clients.map(({ id,logo }: any) => (
          <Client key={id} id={id} logo={logo}></Client>
        ))}
      </div>
      
    </section>
  );
};

export default Testimonials;
