import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Header.module.css";

import LOGO from "../../imgs/logo.svg";
import AVATAR from "../../imgs/avatar.jpg";

import { ROUTES } from "../../utils/routes";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>Solomia</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              name="search"
              type="search"
              placeholder="Search for anything..."
              autoComplete="off"
              // onChange={() => ""}
              // value={""}
            />
            {false && <div className={styles.box}></div>}
          </div>
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Header };
