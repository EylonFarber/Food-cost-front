import React from 'react'
import Button from '../Button'
import { useAppContext } from '../../context/ProductContext'

export default function RecipeForm() {
    const {createRecipe} = useAppContext()
  return (
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">New Recipe</legend>

  <label className="label">Name</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Ingredients</label>
  <input type="password" className="input" placeholder="Password" />

    <label className="label">yields</label>
  <input type="password" className="input" placeholder="Password" />
<Button clickHandler={()=>createRecipe()} btnText='post new recipe' color='btn-warning' type='submit'/>
</fieldset>  )
}
