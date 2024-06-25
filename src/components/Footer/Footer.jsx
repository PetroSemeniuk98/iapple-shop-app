import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";

import LOGO from "../../imgs/logo.svg";

import { ROUTES } from "../../utils/routes";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{" "}
        <a
          href={
            "https://www.instagram.com/petrosemen1uk1?igsh=MWV6eGVveTZxemUwag%3D%3D&utm_source=qr"
          }
          target="_blank"
          rel="noreferrer"
        >
          Petro Semeniuk
        </a>
      </div>
      <div className={styles.socials}>
        <a
          href={
            "https://www.instagram.com/petrosemen1uk1?igsh=MWV6eGVveTZxemUwag%3D%3D&utm_source=qr"
          }
          target="_blank"
          rel="noreferrer"
        >
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a
          href={"https://www.facebook.com/profile.php?id=100015503624325"}
          target="_blank"
          rel="noreferrer"
        >
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a
          href={
            "https://www.instagram.com/petrosemen1uk1?igsh=MWV6eGVveTZxemUwag%3D%3D&utm_source=qr"
          }
          target="_blank"
          rel="noreferrer"
        >
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export { Footer };
