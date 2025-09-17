import React, { useDebugValue, useEffect } from 'react'
import ProductForm from '../components/ProductForm'
import { useNavigate, useParams } from 'react-router'
import { useAppContext } from '../context/ProductContext'

export default function UpdateProduct() {
    const {ingredient, fetchOneIngredient, updateIngredient} = useAppContext()
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{fetchOneIngredient(id)},[])

function submitHandler(e){
e.preventDefault()

let nameInput = e.target.name.value;
let totalPriceInput = e.target.totalPrice.value
let sizeInKgInput = e.target.sizeInKg.value;
let supplierIdInput = e.target.supplierId.value;
let categoryIdInput = e.target.categoryId.value;
let pricePerKgInput = totalPriceInput/sizeInKgInput

 e.target.name.value  == "" && (nameInput = ingredient.name)
 e.target.supplierId.value == "" && (supplierIdInput = ingredient.supplierId)
 e.target.categoryId.value == "" && (categoryIdInput = ingredient.categoryId)
 totalPriceInput/sizeInKgInput == "" && (pricePerKgInput = ingredient.pricePerKg)

updateIngredient(ingredient._id, nameInput,pricePerKgInput,supplierIdInput,categoryIdInput)
navigate('/pricelist')

}

  return (
<ProductForm formTitle='update Ingredient' submitHandler={submitHandler}/>  )
}
