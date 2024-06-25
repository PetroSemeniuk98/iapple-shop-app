import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Poster } from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { productAction } from "../../features/products/productsSlice";

const Home = () => {
  const { list, filtered } = useSelector(
    (products) => products.productsReducer
  );

  const { listCategories } = useSelector(
    (category) => category.categoriesReducer
  );

  const dispath = useDispatch();

  useEffect(() => {
    if (!list.length) return;

    dispath(productAction.filteredProductByPrice(1559));
  }, [list.length, dispath]);

  

  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Hello my Product" />
      <Categories categories={listCategories} amount={5} title={"CATEGORIES"} />
      <Banner />
      <Products products={filtered} amount={5} title="Less then 1600" />
    </>
  );
};

export { Home };
