import React from "react";
import Product from "../product/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/ProductsList.css";

async function getProductsInfo(products, user_info) {
  const doses = {};
  const orders = user_info.payload;
  const days_passed = Math.trunc(
    (new Date().getTime() - new Date(orders[0].received_date).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  await orders.forEach((order) => {
    const products = order.details;
    products.forEach((product) => {
      // console.log(
      //   `Here product ID: ${product.product_id} || Qty: ${product.quantity}`
      // );
      if (doses[product.product_id]) {
        doses[product.product_id] += product.quantity;
      } else {
        doses[product.product_id] = product.quantity + 60 - days_passed;
      }
    });
  });

  const products_info = products.payload;
  const products_info_parsed = {};
  await products_info.forEach((product) => {
    products_info_parsed[product.id] = {
      url: product.imagesUrl,
      name: product.name,
      concentration: product.concentration,
      qty_left: doses[`${product.id}`],
      days_left: doses[`${product.id}`],
    };
    // console.log(`Doses: ${doses}`);
    // console.log(`Here dose for ID ${product.id}: ${doses[`${product.id}`]}`);
  });
  // console.log(`Here products_info_parsed: ${JSON.stringify(products_info_parsed)}`);

  return products_info_parsed;
}

const ProductsList = () => {
  const [dataProducts, setDataProducts] = useState(null);
  const [dataUserInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response_products = await axios.get(
          `https://private-anon-e22dc6085f-inventurestest.apiary-mock.com/products`
        );
        const response_user_info = await axios.get(
          `https://private-anon-e22dc6085f-inventurestest.apiary-mock.com/purchases`
        );

        setDataProducts(response_products.data);
        setUserInfo(response_user_info.data);

        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const products_info = getProductsInfo(dataProducts, dataUserInfo);


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
    <div className="items">
      <div className="header-list">
        <h4 className="title">Te queda:</h4>
      </div>
      {loading && <div>Cargando...</div>}
      {error && <div>Error: {error}</div>}
      <div className="products-list">
        
        {/* {products_info && 
          Object.entries(products_info).map(([key, value]) => (
            console.log(`Here key: ${key} || value: ${value}`),
            <Product
          url={key.url}
          name={key.name}
          concentration={key.concentration}
          qty_left={key.qty_left}
          days_left={key.days_left}
        />))} */}

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
