import React from 'react'
import { cardDealTitle, cardDealDesc } from '../data/carddeal'
import styles from '../styles/styles'
import Button from './Button'
import FeatureCard from './FeatureCard'

const CardDeal = () => {
  return (
    <section id="features" className={`${styles.flexCenter} md:flex-row flex-col mt-16 md:p-0 px-8  gap-32`}>
    <div className={`flex flex-col justify-center items-start gap-2 `}>
      <div className={`${styles.h2Text}`}>{cardDealTitle}</div>
      <div className={`${styles.paragraph} max-w-[500px] text-gray-400`}>
        {cardDealDesc}
      </div>
      <Button></Button>
    </div>
    <div className={`flex flex-col justify-center items-start`}>
    <img
          src="/assets/card.png"
          alt="bill"
          className={` md:w-[85%] w-[100%] md:h-[85%] h-[100%] `}
        ></img>{" "}
    </div>
  </section>
  )
}

export default CardDeal