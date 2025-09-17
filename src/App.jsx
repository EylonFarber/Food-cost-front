import { Route, Routes } from "react-router";
import "./App.css";
import PriceList from "./pages/PriceList";
import ProductCard from "./components/ProductCard";
import UpdateProduct from "./pages/UpdateProduct";
import NewProduct from "./pages/NewProduct";
import RecipesList from "./pages/recipes/RecipesList";
import NewRecipe from "./pages/recipes/NewRecipe";

function App() {


  return (
    <>
      <Routes>
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/pricelist/new" element={<NewProduct/>} />
        <Route path="/pricelist/:id" element={< ProductCard/>} />
        <Route path="/pricelist/update/:id" element={< UpdateProduct/>} />
        <Route path="/recipes" element={< RecipesList/>} />
        <Route path="/recipes/new" element={<NewRecipe/>} />

      </Routes>
    </>
  );
}

export default App;
