import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container } from "rbx";
import Card from "./Card"

const CardList = ( { products } ) => {
  

  return (
    <Column.Group multiline={true} >
      { products.map(product => 
          <Card key={ product.id } product= { product } />) }
    </Column.Group>
  );
};

export default CardList;