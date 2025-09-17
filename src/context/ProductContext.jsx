import axios from "axios";
import { Children, createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const homeUrl = "http://localhost:3000";
  const [priceList, setPriceList] = useState();
  const [ingredient, setIngredient] = useState({});
  const [recipeList, setRecipeList] = useState();

  function fetchRecipesList() {
    axios
      .get(`${homeUrl}/recipes`)
      .then((res) => setRecipeList(res.data))
      .catch((error) => console.log(error));
  }

  function createRecipe() {
    axios
      .post(`${homeUrl}/recipes`, {
        name: "lastNewRec",
        ingredients: [
          {
            productId: "68c58210089e841d7475a8a3",
            productAmountKg: 7,
          },
          {
            productId: "68c58210089e841d7475a8a3",
            productAmountKg: 1,
          },
        ],
        yeildKg: 5,
      })
      .then((res) => {
        console.log("Success:", res.data);
      })
      .catch((error) => console.error("Error:", error));
  }
  function fetchPriceList() {
    axios
      .get(`${homeUrl}/pricelist`)
      .then((res) => setPriceList(res.data))
      .catch((error) => console.log(error));
  }

  function createIngredient(name, pricePerKg, supplierId, categoryId) {
    axios
      .post(`${homeUrl}/pricelist`, {
        name: name,
        pricePerKg: pricePerKg,
        supplierId: supplierId,
        categoryId: categoryId,
      })
      .then((res) => {
        console.log("Success:", res.data);
      })
      .catch((error) => console.error("Error:", error));
  }

  function fetchOneIngredient(id) {
    axios
      .get(`${homeUrl}/pricelist/${id}`)
      .then((res) => setIngredient(res.data))
      .catch((error) => console.log(error));
  }

  function updateIngredient(
    id,
    nameInput,
    pricePerKgInput,
    supplierIdInput,
    categoryIdInput
  ) {
    axios
      .put(`http://localhost:3000/pricelist/${id}`, {
        name: nameInput,
        pricePerKg: pricePerKgInput,
        supplierId: supplierIdInput,
        categoryId: categoryIdInput,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }

  function deleteIngredient(id) {
    axios
      .delete(`http://localhost:3000/pricelist/${id}`)
      .then((res) => res)
      .catch((error) => console.log(error));
  }

  return (
    <AppContext.Provider
      value={{
        homeUrl,
        priceList,
        fetchPriceList,
        createIngredient,
        fetchOneIngredient,
        ingredient,
        updateIngredient,
        deleteIngredient,
        priceList,
        recipeList,
        setRecipeList,
        fetchRecipesList,
        createRecipe,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
