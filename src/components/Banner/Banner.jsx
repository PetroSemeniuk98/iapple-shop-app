import React from "react";

import styles from "../../styles/Home.module.css";

import BannerIMG from "../../imgs/banner.png";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW YEAR
          <span>SALE</span>
          <button className={styles.more}> See more</button>
        </p>
      </div>
      <div
        className={styles.right}
        style={{ backgroundImage: `url(${BannerIMG})` }}
      >
        <p className={styles.discount}>
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  );
};

export default Banner;
