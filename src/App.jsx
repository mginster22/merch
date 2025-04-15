import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./components/Pages/HomePage/HomePage";
import SewingPage from "./components/Pages/SewingPage";
import AllProductsPage from "./components/Pages/AllProductsPage/AllProductsPage";
import { useSelector } from "react-redux";
import BasketPopup from "./components/Pages/AllProductsPage/BasketPopup";

const App = () => {
  const isBasketPopupVisible = useSelector(
    (state) => state.ui.isBasketPopupVisible
  );
  return (
    <div className="">
       {isBasketPopupVisible && <BasketPopup />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/powuv" element={<SewingPage />} />
        <Route path="/vsetovaru" element={<AllProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
