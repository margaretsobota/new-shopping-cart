import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container, Title } from "rbx";
import "../style/card.css";
//import test from "./public/data/product-imgs/101_1.jpg";

const Card = ({product}) => {
  const price = (product.price).toFixed(2);
  //<img src={pic_url + product.id + ".jpg"}/>
  //<img src={process.env.PUBLIC_URL + "/data/product-imgs/100_1.jpg"}/>
  

  return (
    <Column id="card-column" size="one-fifth">
      <img src={process.env.PUBLIC_URL + "/data/product-imgs/" + product.sku + ".jpg"}/>
      <h1 id="card-title">
        { product.title }
      </h1>
      <Title id="price" size={4}>
        $ { price }
      </Title>
    </Column>
  );
};

export default Card;