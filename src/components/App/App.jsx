import React, { useEffect, useState } from "react";
import { AppRoutes } from "../Routes/Routes";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { SideBar } from "../SideBar/SideBar";
import { useDispatch } from "react-redux";
import { categAction } from "../../features/categories/categoriesSlice";
import { productAction } from "../../features/products/productsSlice";
import { db } from "../../firebase";
import { get, ref } from "firebase/database";
import { TestFlexProp } from "../TestFlexProp";

const App = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categAction.getAllCategories());
    dispatch(productAction.getProducts());
  }, [dispatch]);

  useEffect(() => {
    const productRef = ref(db, "products");
    get(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        const arrayProducts = Object.entries(snapshot.val()).map(
          ([id, data]) => ({ id, ...data })
        );
        setProduct(arrayProducts);
      } else {
        console.log("Error,not fatching!");
      }
    });
  }, [product]);
  return (
    <div className="app">
      <Header />
      <div className="container">
        <SideBar />
        <AppRoutes />
      </div>

      <Footer />
      <TestFlexProp />
    </div>
  );
};
export { App };
