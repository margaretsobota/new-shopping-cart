import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container } from "rbx";

const Card = ({product}) => {
  

  return (
    <Column size="one-quarter">
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