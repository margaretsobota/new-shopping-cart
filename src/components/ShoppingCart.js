import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container, Title, Modal, Icon, Section, Button } from "rbx";
import "../style/card.css";
import "../style/shopping-cart.css";
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

const ShoppingItem = ( {title, desc, quan, size, sku} ) => {
  return (
    <Section>
      <Column.Group>
        <Column size="one-fifth">
          <img src={process.env.PUBLIC_URL + "/data/product-imgs/" + sku + ".jpg"}/>
        </Column>
        <Column size="one-third">
          <Title as="h4" id="shopping-title">
            {title}
          </Title>
          <div class="shop-desc">
            <p>
              { size } | { desc }
            </p>
            <p>
              Quantity: { quan }
            </p>
          </div>
        </Column>
        <Column offset={4}>
          <Button id= "close-button" color="dark" rounded="true" align="right">
            <Icon id="close" size="small">
                <FontAwesomeIcon icon={faTimes} />
            </Icon>
          </Button>
          <p class="shop-price"> $ 11.45 </p>
        </Column>
      </Column.Group>
      
    </Section>
  );
};
 


const OpenModal = () => {
  const closeShopping = () => {
    document.getElementById("openModal").style.display="None";
  }
  
  return (
    <Column id="modal-container">
        <Modal.Background >
          <Modal.Card>
            <Modal.Card.Head>
                <Modal.Card.Title> 
                    <span> Shopping Cart </span>
                    <Icon size="small">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Icon>
                </Modal.Card.Title>  
                <Modal.Close onClick = { () =>  closeShopping()}/>
            </Modal.Card.Head>
            <Modal.Card.Body>
              <Modal.Content>
                <ShoppingItem title="Cat Tee Black T-Shirt" 
                  desc="Cool shirt with stuff"
                  quan="4"
                  size="L"
                  sku="12064273040195392"/>
                <ShoppingItem title="Dark Thug Blue-Navy T-Shirt" 
                  desc="Cool shirt with stuff"
                  quan="5"
                  size="S"
                  sku="12064273040195392"/>
                <ShoppingItem title="Sphynx Tie Dye Wine T-Shirt" 
                  desc="Cool shirt with stuff"
                  quan="1"
                  size="M"
                  sku="12064273040195392"/>
              </Modal.Content>
            </Modal.Card.Body>
        </Modal.Card>
      </Modal.Background>
    </Column>

  );
};

const ShoppingCart = ({ items }) => {
  
  return (
    <div id="openModal" style={{ display: "None" }}>
      <OpenModal> </OpenModal>
    </div>
   
  );
};

export default ShoppingCart;