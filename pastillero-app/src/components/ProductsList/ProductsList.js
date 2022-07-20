import React from "react";
import Product from "../product/Product";
import "../../styles/ProductsList.css";

const ProductsList = () => {
  const info = {
    url: "https://d131ml7m6yr3wl.cloudfront.net/images/8632a5f3-546e-4a60-a4a0-55d7aaa8d8c6/large.jpeg",
    name: "Eutirox",
    concentration: "85 mg",
    qty_left: 5,
    days_left: 5,
  };
  const info2 = {
    url: "https://d131ml7m6yr3wl.cloudfront.net/images/1ad8abbe-66f5-42b4-820f-751aedc4b9af/large.jpeg",
    name: "Sertralina",
    concentration: "100 mg",
    qty_left: 22,
    days_left: 22,
  };
  const info3 = {
    url: "https://d131ml7m6yr3wl.cloudfront.net/images/51dd37a4-7445-40aa-a018-f5377d3f7235/large.jpeg",
    name: "Magnesio",
    concentration: "400 mg",
    qty_left: 30,
    days_left: 30,
  };
  return (
    <div class="items">
      <div class="header-list">
        <h4 class="title">Te queda:</h4>
      </div>
      <div class="products-list">
        <Product
          url={info.url}
          name={info.name}
          concentration={info.concentration}
          qty_left={info.qty_left}
          days_left={info.days_left}
        />
        <Product
          url={info2.url}
          name={info2.name}
          concentration={info2.concentration}
          qty_left={info2.qty_left}
          days_left={info2.days_left}
        />
        <Product
          url={info3.url}
          name={info3.name}
          concentration={info3.concentration}
          qty_left={info3.qty_left}
          days_left={info3.days_left}
        />
      </div>
    </div>
  );
};

export default ProductsList;
