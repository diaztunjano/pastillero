import React from "react";
import Product from "../product/Product";
import "../../styles/ProductsList.css";

const ProductsList = () => {
  const info = {
    url: "https://d131ml7m6yr3wl.cloudfront.net/images/8632a5f3-546e-4a60-a4a0-55d7aaa8d8c6/large.jpeg",
    name: "Eutirox",
    concentration: "85 mg",
    qty_left: 18,
    days_left: 5,
  };
  return (
    <div class="items">
      <div class="header-list">
        <h4 class="title">Te queda:</h4>
      </div>
      <Product
        url={info.url}
        name={info.name}
        concentration={info.concentration}
        qty_left={info.qty_left}
        days_left={info.days_left}
      />
    </div>
  );
};

export default ProductsList;
