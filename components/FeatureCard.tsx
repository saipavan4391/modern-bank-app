import next from 'next'
import React from 'react'
import styles from '../styles/styles'

import Image from "next/image"
import { features } from '../data/business'

const FeatureCard = (props:any) => {
  const {id,title,icon,content}=props
  return (
    <div className={`bg-dimBlue`}>
      <div className={`${styles.flexCenter} flex flex-row gap-8 m-8`}>
      <Image src={props.icon} width="32" height="32" alt='star'></Image>
      <div className={`flex flex-col justify-between items-start gap-2`}>
        <h3 className={` font-poppins font-semibold text-white`}>{title}</h3>
        <div className={`${styles.paragraph} font-poppins font-normal text-gray-400 `}>{content}</div>
      </div>
    </div>

   
      
    </div>
  )
}

export default FeatureCard