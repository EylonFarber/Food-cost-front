import React, { useEffect } from "react";

import { Route, Routes, useParams } from "react-router";
import "./App.css";
import PriceList from "./pages/PriceList";
import { useAppContext } from "./context/AppContext";
import ProductCard from "./components/ProductCard";
import UpdateProduct from "./pages/UpdateProduct";
import NewProduct from "./pages/NewProduct";

function App() {


  return (
    <>
      <Routes>
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/pricelist/new" element={<NewProduct/>} />
        <Route path="/pricelist/:id" element={< ProductCard/>} />
        <Route path="/pricelist/update/:id" element={< UpdateProduct/>} />
      </Routes>
    </>
  );
}

export default App;
