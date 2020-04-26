import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container } from "rbx";
import Card from "./Card"

const CardList = ( { products, state, inventoryState } ) => {

  return (
    <Column.Group multiline={true} centered={true}>
      { products.map(product => 
          <Card key={ product.sku } product= { product } state={ state } inventoryState= {inventoryState}/>) }
    </Column.Group>
  );
};

export default CardList;