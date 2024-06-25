import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Products.module.css";

const Products = ({ amount, title, products = [], style = {} }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ id, name, price, initial_price, images, category }) => (
          <Link to={`/products/${id}`} key={id} className={styles.product}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${images[2]})` }}
            />

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{name}</h3>
              <div className={styles.cat}>{category.name}</div>

              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.oldPrice}>{initial_price}$</div>
                </div>
                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.more}>
        <button>See more</button>
      </div>
    </section>
  );
};

export default Products;
