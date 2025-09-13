import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Button from "./Button";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function ProductTable() {
  const { priceList, fetchPriceList ,deleteHandler} = useAppContext();
const navigate = useNavigate()
  useEffect(() => {
    fetchPriceList();

  }, [deleteHandler]);

  return (
    <>
    <Button clickHandler={()=>navigate(`/pricelist/new`)} btnText='create new ingredient' color='btn-warning' type=''/>
    <ul className="list bg-base-100 rounded-box shadow-md">
  
      
        {priceList &&
          priceList.map((product) => (
  <li className="list-row flex justify-between" key={product._id}>
      <div>{product.name}</div>
      <div>{product.supplierId}</div>
      <div>
        <Button clickHandler={()=>navigate(`/pricelist/${product._id}`)}  btnText='info'  color={'btn-info'}  type='' />
        <Button clickHandler={()=>navigate(`/pricelist/update/${product._id}`)}  btnText='update'  color='btn-info'  type='' />
        <Button clickHandler={()=>deleteHandler(product._id)}  btnText='delete'  color='btn-error'  type='' />
    </div>
  </li>
          ))}

</ul>
</>

  );
}
