import React, { useState } from "react";
import Cart from "./Cart";
import { UsestateValue } from "./Context";

const Cart1 = () => {
  const [{ basket }] = UsestateValue();

  return (
    <div className="">
      {basket?.map((k, l) => {
        return <Cart id={k.id} />;
      })}
    </div>
  );
};

export default Cart1;
