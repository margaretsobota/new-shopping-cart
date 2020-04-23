import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container, Title, Modal, Icon, Section, Button } from "rbx";
import "../style/card.css";
import "../style/shopping-cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

const ShoppingItem = ( { item, state } ) => {
  const price = (item.price).toFixed(2);
  var quantity = item.quantity;

  const deleteItem = () => {
    var i = 0;
    for (var thing of state.selected)
    {
      console.log(thing);
      if (thing.sku == item.sku)
      {
        var newArr = [...state.selected];
        if(item.quantity == 1)
        {
          newArr = newArr.filter(el =>  el.sku != item.sku);
        }
        else{
          //newArr = state.selected;
          newArr[i].quantity--;
          
        }
        state.setSelected(newArr);
        
      }
      i++;
        
    }
  };

   

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
              Quantity: { quantity }
            </p>
          </div>
        </Column>
        <Column offset={4}>
          <Button id= "delete-button" color="dark" rounded="true" align="right"
                  onClick= { () => deleteItem()}
          >
            <Icon id="delete" size="small">
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
  
  var items = state.selected;

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
                {items.map(item => <ShoppingItem item={item} state={state}>  
                                    </ShoppingItem>)}
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