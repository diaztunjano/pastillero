import React from "react";
import "../../styles/Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = () => {
  return (
    <div class="info">
      <div class="image"></div>
      <div class="text-info">
        {/* <h5>${props.name}</h5>
        <p>${props.info} mg</p>
        <p>Quedan ${props.comps_remaining} comprimidos</p>
        <p>Para ${props.days_left} días</p> */}
        <h5>Eutirox</h5>
        <p>75 mg</p>
        <p class="underline">Quedan 5 comprimidos</p>
        <p class="underline">Para 5 días</p>
      </div>
      <div class="cart-icon">
        <AddShoppingCartIcon/>
      </div>
    </div>
  );
};

export default Product;
