import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAppContext } from '../context/AppContext';
import Button from './Button';

export default function ProductCard() {
    const{fetchOneIngredient,ingredient,deleteHandler} = useAppContext()
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
fetchOneIngredient(id)

    },[])
function clickHandler(){
    deleteHandler(ingredient._id)
    navigate('/pricelist')
}
  return (
<div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">{ingredient.categoryId}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{ingredient.name}</h2>
      <span className="text-xl">{(ingredient.pricePerKg).toFixed(2)} euro/kg</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
supplier: {ingredient.supplierId}
      </li>
          <li>
category: {ingredient.categoryId}
      </li>
      </ul>
    <div className="mt-6">
            
        <Button clickHandler={()=>navigate(`/pricelist/update/${ingredient._id}`)}  btnText='update'  color='btn-info'  type='' />
        <Button clickHandler={clickHandler}  btnText='delete'  color='btn-error'  type='' />
              
   </div>
  </div>
</div>  )
}
