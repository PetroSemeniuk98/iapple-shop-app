import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../Home/Home";
import { TestFlexProp } from "../TestFlexProp";

import { ROUTES } from "../../utils/routes";
import { SingleProduct } from "../Products/SingleProduct";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.PRODUCTS} element={<SingleProduct />} />
    <Route path={ROUTES.CATIGORIES} element={<TestFlexProp />} />
  </Routes>
);

export { AppRoutes };
