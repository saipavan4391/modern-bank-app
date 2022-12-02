import Business from "../components/Business";
import CardDeal from "../components/CardDeal";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Payments from "../components/Payments";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

import styles from "../styles/styles";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div
        className={` lg:max-w-[1200px] mx-auto ${styles.marginX} ${styles.flexCenter} `}
      >
        <Navbar />
      </div>
      <div
        className={`container lg:max-w-[1200px] mx-auto ${styles.marginX} ${styles.flexStart} `}
      >
        <div className={`${styles.containerWidth}`}>
          <Hero />
          <Stats />
          <Business />
          <Payments />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
