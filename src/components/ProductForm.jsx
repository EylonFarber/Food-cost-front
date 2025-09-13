import React from "react";

export default function ProductForm({ formTitle, submitHandler }) {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">{formTitle}</legend>

          <label className="label">name</label>
          <input type="text" className="input" name="name" />

          <label className="label">supplier</label>
          <input type="text" className="input" name="supplierId" />

          <label className="label">category</label>
          <input type="text" className="input" name="categoryId" />

          <label className="label">delivery size in kg</label>
          <input type="number" className="input" name="sizeInKg" />


          <label className="label">total price</label>
          <input type="number" className="input" name="totalPrice" />

          <button className="btn btn-neutral mt-4">submit</button>
        </fieldset>
      </form>
    </div>
  );
}
