import React, { useState } from 'react';
import "rbx/index.css";
import { Column, Title, Button, Icon } from "rbx";
import "../style/card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Sizes from "./Sizes";

const Card = ({ product, state, inventoryState }) => {
  const price = (product.price).toFixed(2);
  const [sizeState, setSizeState] = useState("");
  const inventory = inventoryState.inventory;
  const inven_obj = inventory[product.sku];

  var sizes = [];

  var desc = product.description;
  if (desc === "")
    desc = "no description";

  
  for (var size in inven_obj)
  {
    if(inven_obj[size] > 0)
      sizes.push(size);
    else
      sizes.push(size + ": Out of stock");
      
  }

  console.log(sizes);

  const updateInventory = () => {

    const inven_cpy = {} 
    Object.assign(inven_cpy, inventoryState.inventory);
    for (var size in inven_obj)
    {
      if(size === sizeState)
        inven_cpy[product.sku][size] --;
        
    }
    inventoryState.setInventory(inven_cpy);

  };


  const addItem = () => {

    const newItem = {
      "sku": product.sku,
      "title": product.title,
      "price": product.price,
      "desc": product.description,
      "quantity": 1,
      "size": sizeState
    }

    var oldSelected = state.selected;

    for(var i =0; i < oldSelected.length; i++)
    {
      if (oldSelected[i].sku === newItem.sku && oldSelected[i].size === sizeState)
      {     
        var newArr = [...oldSelected];
        newArr[i].quantity = oldSelected[i].quantity + 1;
        state.setSelected(newArr);
        return;
      }
    }

    newArr = [newItem];
    var newSelected = oldSelected.concat(newArr);
    state.setSelected(newSelected);
    
    

  };

  const openShopping = () => {
    if( sizeState !== "" && inven_obj[sizeState] > 0)
    {
      document.getElementById("openModal").style.display="block";
      addItem();
      updateInventory();
    }
    else 
      alert("Please select valid size.");
    
  };
  
  
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
        <Sizes sizes={ sizes } state={ { sizeState, setSizeState } }/>
        
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