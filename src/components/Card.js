import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container, Title, Dropdown, Button, Icon } from "rbx";
import "../style/card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//import test from "./public/data/product-imgs/101_1.jpg";

const product_sizes = ["S", "M", "L", "XL"];

const Sizes = ({ sizes }) => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>
          <span>Choose size</span>
          <Icon size="small">
            <FontAwesomeIcon icon={faAngleDown} />
          </Icon>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Content>
        {sizes.map(size => 
           <Dropdown.Item> {size} </Dropdown.Item>)}
        </Dropdown.Content>
      </Dropdown.Menu>
    </Dropdown>
  );
};

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
      <Sizes sizes={ product_sizes }/>
    </Column>
  );
};

export default Card;