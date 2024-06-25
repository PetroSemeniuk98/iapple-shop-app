import React, { useEffect } from "react";
import { AppRoutes } from "../Routes/Routes";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { SideBar } from "../SideBar/SideBar";
import { useDispatch } from "react-redux";
import { categAction } from "../../features/categories/categoriesSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categAction.getAllCategories());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <SideBar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};
export { App };
