import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "../../styles/Product.module.css";

import { ROUTES } from "../../utils/routes";

import { userAction } from "../../features/users/userSlice";

function Product(item) {
  const { name, price, images, memory } = item;

  const dispatch = useDispatch();

  const [currentIMG, setCurrentIMG] = useState();
  const [currentMemotyBTN, setCurrentMemotyBTN] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentIMG(images[1]);
  }, [images]);

  const addQuntity = () => {
    dispatch(userAction.addQuantity(item));
  };

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentIMG})` }}
        />

        <div className={styles["images-list"]}>
          {images.map((image, id) => (
            <div
              key={id}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentIMG(image)}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Memory:</span>

          <div className={styles.list}>
            {memory.map((item) => (
              <div
                className={`${styles.size} ${
                  currentMemotyBTN === item ? styles.active : ""
                }`}
                onClick={() => setCurrentMemotyBTN(item)}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.owerflow}>
          <p className={styles.description}>
            Швидка безкоштовна доставка — Обирай Айфон 14 в Ябко. Дивовижні
            можливості та особливий стиль, який точно оцінять всі! Новий iPhone
            14 в наявності! Неймовірна якість фото, швидкість роботи і
            надійність Apple!
          </p>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.add}
            disabled={!currentMemotyBTN}
            onClick={() => addQuntity}
          >
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
}

export default Product;
