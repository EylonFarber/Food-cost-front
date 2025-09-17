import React from "react";
import RecipeTable from "../../components/recipes/RecipeTable";
import Button from "../../components/Button";
import { useAppContext } from "../../context/ProductContext";
import { useNavigate } from "react-router";

export default function RecipesList() {
    const navigate = useNavigate()
  return (
    <>
      <Button clickHandler={()=>navigate('/recipes/new')} btnText="create new recipe" color="btn-warning" type="" />
      <RecipeTable />
    </>
  );
}
