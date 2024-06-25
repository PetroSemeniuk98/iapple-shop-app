import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetProductIdQuery } from "../../features/api/apiSlise";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";

import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../features/products/productsSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { related } = useSelector((state) => state.productsReducer);

  const { data, isFetching, isLoading, isSuccess } = useGetProductIdQuery({
    id,
  });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isFetching, isLoading, isSuccess, navigate]);

  useEffect(() => {
    if (data) {
      dispatch(productAction.filteredProductRelatedByID(data.category.id));
    }
  }, [data, dispatch]);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
};

export { SingleProduct };
