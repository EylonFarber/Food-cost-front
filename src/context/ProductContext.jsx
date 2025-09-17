import axios from "axios";
import { Children, createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const homeUrl = "http://localhost:3000";
  const [priceList, setPriceList] = useState();
  const [ingredient, setIngredient] = useState({});

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
      .then((res) => (res.data))
      .catch((error) => console.log(error));
  }

  function deleteHandler(id) {
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
        deleteHandler,
        priceList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
