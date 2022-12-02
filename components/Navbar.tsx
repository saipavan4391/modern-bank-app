import React, { useState } from "react";
import { logo } from "../public/assets";
import Image from "next/image";

import { motion } from "framer-motion";

import { navLinks } from "../data/navbar";
import { navVariants } from "../utils/motion";

const Navbar = (props: any) => {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      whileInView="show"
      initial="hidden"
      className="w-full flex py-6 px-2 justify-between items-center"
    >
      <Image src="/assets/logo.svg" alt="logo" width="128" height="128" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map(({ id, title, route }: any) => (
          <motion.li
            variants={navVariants}
            whileHover="hover"
            key={id}
            className={`font-poppins font-normal text-white text-[16px] mr-10`}
          >
            <a href={`#${id}`}>{title}</a>
          </motion.li>
        ))}
        ;
      </ul>

      <div className="sm:hidden flex flex-col justify-end items-center gap-4">
        <Image
          src={!toggleMenu ? "/assets/menu.svg" : "/assets/close.svg"}
          alt="menu"
          width="28"
          height="28"
          onClick={() => settoggleMenu((prev) => !prev)}
        ></Image>
        <div className="bg-black-gradient shadow-sm box-border">
          {toggleMenu ? (
            <motion.ul
            variants={navVariants}
            initial="hiddem"
            whileInView="show"
            className="list-none flex flex-col justify-end items-center m-6">
              {navLinks.map(({ id, title, route }: any) => (
                <motion.li
                  variants={navVariants}
                  whileHover="hover"
                  key={id}
                  className={`font-poppins font-normal text-white text-[16px] mr-4 pt-4 pb-3`}
                >
                  <a href={`#${id}`}>{title}</a>
                </motion.li>
              ))}
              ;
            </motion.ul>
          ) : null}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
