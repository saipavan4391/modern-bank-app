import React from "react";
import styles from "../styles/styles";

import { stats } from "../data/stats";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Stats = () => {
  return (
    <div className={`flex md:justify-between items-start md:flex-row flex-col py-16 pr-16 `}>
      {stats.map(({ id, title, value }: any) => (
        <div key={id} className={`flex flex-row items-center text-white gap-4 z-10 md:p-0 pl-8`}>
          <div className={`font-poppins font-semibold md:text-[40px] text-[52px]`}> {value}</div> 
          <div className={`font-poppins font-normal md:text-[20px] sm:text-[36px] text-[20px] text-gradient`}>{title}</div>
        </div>
      ))}{" "}
    </div>
  );
};


export default Stats;
