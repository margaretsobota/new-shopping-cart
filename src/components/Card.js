import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container } from "rbx";
//import test from "./public/data/product-imgs/101_1.jpg";

const Card = ({product}) => {
  const pic_url = process.env.PUBLIC_URL + "/data/product-imgs/";
  //<img src={pic_url + product.id + ".jpg"}/>

  return (
    <Column size="one-quarter">
      <img src={process.env.PUBLIC_URL + "/data/product-imgs/100_1.jpg"}/>
      <h1>
        { product.title }
      </h1>
      <h3>
        $ { product.price }
      </h3>
    </Column>
  );
};

export default Card;