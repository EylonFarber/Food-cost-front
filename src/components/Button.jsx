import React, { useState } from "react";
import { cn } from "../lib/util";

export default function Button({ clickHandler, btnText, color, type }) {
  return (
    <button
      className={cn(`btn md:text-l ${ color }`)}
      type={type}
      onClick={clickHandler}
    >
      {btnText}
    </button>
  );
}
