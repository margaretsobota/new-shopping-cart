import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container, Title, Button, Icon } from "rbx";
import "../style/card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
//fa-info-circle

import Sizes from "./Sizes";

const product_sizes = ["S", "M", "L", "XL"];

const Card = ({ product }) => {
  const price = (product.price).toFixed(2);

  var desc = product.description;
  if (desc == "")
    desc = "no description";

  const openShopping = () => {
    document.getElementById("openModal").style.display="block";
    //state.setOpen(true);
    
    //this.refs["openModal"].style.display="block";
  }
  
  return (
    <Column id="card-column" size="one-fifth">
      <img src={process.env.PUBLIC_URL + "/data/product-imgs/" + product.sku + ".jpg"}/>
      <h1 id="card-title">
        { product.title }
      </h1>
      <Title id="price" size={4}>
        $ { price }
      </Title>
      
      <Column.Group>
        <Sizes sizes={ product_sizes }/>
        
        <span class="desc">
          <Icon size="small">
              <FontAwesomeIcon icon={faInfoCircle} />
          </Icon>
            { desc }
        </span>
      </Column.Group>
      
      <Button fullwidth="true" color="dark"
        onClick = { () =>  openShopping()} >
        
        Add to Cart
      </Button>
     
      
    </Column>
  );
};

export default Card;