import React from "react";
import "../../styles/Product.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ url, name, concentration, qty_left, days_left }) => {
  return (
    <div className="product-info">
      <div className="product-image">
        <img src={url} alt={name} />
      </div>
      <div className="product-text-info">
        <h4>{name}</h4>
        <p className="concentration">{concentration}</p>
        <p className={qty_left > 10 ? "underline-normal" : "underline-critical"}>
          Quedan {qty_left} comprimidos
        </p>
        <p className={qty_left > 10 ? "underline-normal" : "underline-critical"}>
          Para {days_left} días
        </p>
      </div>
      <div className="cart-icon">
        <IconButton size="large" aria-label="Add to shopping cart">
          <AddShoppingCartIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default Product;
