import React from "react";
import styles from "../styles/Cart.module.css";
import ComputerIMG from "../imgs/computer.png";

const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2024</div>
          <h1 className={styles.head}> MACBOOK PRO 16 2024 with M3 procesor</h1>
          <button className={styles.button}>Shop now</button>
        </div>
        <div className={styles.image}>
          <img src={ComputerIMG} alt="computer" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
