import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container, Title, Modal, Icon, Section, Button } from "rbx";
import "../style/card.css";
import "../style/shopping-cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

const ShoppingItem = ( { item } ) => {
  const price = (item.price).toFixed(2);

  return (
    <Section>
      <Column.Group>
        <Column size="one-fifth">
          <img src={process.env.PUBLIC_URL + "/data/product-imgs/" + item.sku + ".jpg"}/>
        </Column>
        <Column size="one-third">
          <Title as="h4" id="shopping-title">
            {item.title}
          </Title>
          <div class="shop-desc">
            <p>
              { item.size } | { item.desc }
            </p>
            <p>
              Quantity: { item.quantity }
            </p>
          </div>
        </Column>
        <Column offset={4}>
          <Button id= "close-button" color="dark" rounded="true" align="right">
            <Icon id="close" size="small">
                <FontAwesomeIcon icon={faTimes} />
            </Icon>
          </Button>
          <p class="shop-price"> $ {price} </p>
        </Column>
      </Column.Group>
      
    </Section>
  );
};
 


const OpenModal = ( { state } ) => {
  const closeShopping = () => {
    document.getElementById("openModal").style.display="None";
  }
  
  const items = state.selected;

  const getTotal = () => {
    var total = 0.00;
    var item;
    for (item of state.selected)
    {
      total = total + item.price;
    }
    return total.toFixed(2);
  };

  var total = getTotal();

  useEffect(() => {
      total = getTotal();
   }, [state.selected])
  
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
                {items.map(item => <ShoppingItem item={item}> </ShoppingItem>)}
              </Modal.Content>
            </Modal.Card.Body>
            <Modal.Card.Foot>
              <Modal.Card.Title> 
                Total: ${total}
              </Modal.Card.Title> 
            </Modal.Card.Foot>
        </Modal.Card>
      </Modal.Background>
    </Column>

  );
};

const ShoppingCart = ({ state }) => {
  
  return (
    <div id="openModal" style={{ display: "None" }}>
      <OpenModal state={ state }> </OpenModal>
    </div>
   
  );
};

export default ShoppingCart;