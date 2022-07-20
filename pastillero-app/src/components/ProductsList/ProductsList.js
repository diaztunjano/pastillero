import React from "react";
import Product from "../product/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/ProductsList.css";

async function getProductsInfo(products, user_info) {
  const doses = {};
  const orders = await user_info.payload;
  // console.log(`Here orders: ${JSON.stringify(orders)}`);
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

  const products_info = await products.payload;
  const products_info_parsed = [];
  await products_info.forEach((product) => {
    if (product.id in doses) {
      products_info_parsed.push([
        product.imagesUrl,
        product.name,
        product.concentration,
        doses[`${product.id}`],
      ]);
    }
  });

  return products_info_parsed;
}

const ProductsList = () => {
  const [dataProducts, setDataProducts] = useState(null);
  const [dataUserInfo, setUserInfo] = useState(null);
  const [finalInfo, setFinalInfo] = useState(null);
  const [loading, setLoading] = useState(true);

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
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getFinalInfo = async () => {
      try {
        const products_info = await getProductsInfo(dataProducts, dataUserInfo);
        setFinalInfo(products_info);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getFinalInfo();
  }, [dataProducts, dataUserInfo]);

  return (
    <div className="items">
      <div className="header-list">
        <h4 className="title">Te queda:</h4>
      </div>
      {loading && <div>Cargando...</div>}
      {finalInfo && (
        <div className="products-list">
          {finalInfo.map((product) => {
            return (
              <Product
                key={product[0]}
                url={product[0]}
                name={product[1]}
                concentration={product[2]}
                qty_left={product[3]}
                days_left={product[3]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
