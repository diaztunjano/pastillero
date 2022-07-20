import React from "react";
import "../../styles/Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ url, name, concentration, qty_left, days_left }) => {
  return (
    <div class="product-info">
      <div class="product-image">
        <img src={url} alt={name} />
      </div>
      <div class="product-text-info">
        <h4>{name}</h4>
        <p class="concentration">{concentration}</p>
        <p class="underline-normal">Quedan {qty_left} comprimidos</p>
        <p class="underline-normal">Para {days_left} días</p>
      </div>
      <div class="cart-icon">
        <AddShoppingCartIcon />
      </div>
    </div>
  );
};

export default Product;
