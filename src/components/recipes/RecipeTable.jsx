import React, { useEffect } from "react";
import { useAppContext } from "../../context/ProductContext";
import Button from "../Button";

export default function RecipeTable() {
  const { recipeList, fetchRecipesList } = useAppContext();

  useEffect(() => {
    fetchRecipesList();
  }, []);

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {recipeList &&
          recipeList.map((recipe) => (
            <li className="list-row flex justify-between" key={recipe._id}>
              <div>{recipe.name}</div>
              <div>{recipe.pricePerKg}</div>
              <div>
                <Button btnText="info" color={"btn-info"} type="" />
                <Button btnText="update" color="btn-info" type="" />
                <Button btnText="delete" color="btn-error" type="" />
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
