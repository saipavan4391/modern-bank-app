import React from 'react'
import styles from '../styles/styles'
import {motion} from "framer-motion"
import { navVariants } from '../utils/motion'

const GetStarted = () => {
  return (
    <motion.div
    variants={navVariants}
    whileTap="hover"
     className={`${styles.flexCenter} p-1 w-[160px] h-[160px] rounded-full bg-blue-gradient`}>
        <div className={`flex  justify-center items-center   w-[100%] h-[100%] rounded-full bg-primary gap-2 pl`}>
            <div className={`${styles.paragraph}`}>Get <br/> Started</div>
            <img  src='/assets/arrow-up.svg' ></img>
        </div>
    </motion.div>
  )
}

export default GetStarted