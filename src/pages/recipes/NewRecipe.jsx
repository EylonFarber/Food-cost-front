import React from 'react'
import RecipeForm from '../../components/recipes/RecipeForm';
import { useAppContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router';

export default function NewRecipe() {
  const { createRecipe } = useAppContext();
const navigate = useNavigate()
//   function submitHandler(e) {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const pricePerKg = e.target.totalPrice.value / e.target.sizeInKg.value;
//     const supplierId = e.target.supplierId.value;
//     const categoryId = e.target.categoryId.value;

    // createIngredient(name, pricePerKg, supplierId, categoryId);
    // navigate('/pricelist')
  
  return (
    <RecipeForm
    />
  )
}
