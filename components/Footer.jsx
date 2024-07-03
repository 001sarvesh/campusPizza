import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE CAMPUS PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <div className={styles.text}>
            <p className={styles.address}>
              IIIT Allahabad.
              <br /> Jhalwa, 12345
              <br /> +91-9029484
            </p>
            <p className={styles.address}>
              MNNIT, Allhabad
              <br /> Teliyarganj, 477474
              <br /> +91-388849399
            </p>
            <p className={styles.address}>
              United University
              <br /> Betia Chauraha , 58488
              <br /> +91-488392222
            </p>
            <p className={styles.address}>
              SambhuNath College
              <br /> Ramnagar, 39292
              <br /> +91-588383838
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br /> 9:00 AM – 22:00 PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 01:00 PM – 24:30 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
