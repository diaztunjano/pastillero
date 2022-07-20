import React from "react";
import Product from "../product/Product";
import "../../styles/ProductsList.css";

const ProductsList = () => {
  return (
    <div class="items">
      <div class="header-list">
        <h4 class="title">Te queda:</h4>
      </div>
      <Product />
    </div>
  );
};

export default ProductsList;
