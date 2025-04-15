import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./components/Pages/HomePage/HomePage";
import SewingPage from "./components/Pages/SewingPage";
import AllProductsPage from "./components/Pages/AllProductsPage/AllProductsPage";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/powuv" element={<SewingPage />} />
        <Route path="/vsetovaru" element={<AllProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
