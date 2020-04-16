import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Column, Container, Title, Modal } from "rbx";
import "../style/card.css";
import Sidebar from "react-sidebar";
 


const OpenModal = () => {
  const closeShopping = () => {
    document.getElementById("openModal").style.display="None";
  }
  
  return (
    <Column id="modal-container">
        <Modal.Background >
          <Modal.Card>
            <Modal.Card.Head>
                <Modal.Card.Title> Shopping Cart </Modal.Card.Title>  
            </Modal.Card.Head>
          </Modal.Card>
        <Modal.Content>
          Content
        </Modal.Content>
        <Modal.Close onClick = { () =>  closeShopping()}/>
      </Modal.Background>
    </Column>

  );
}

const ShoppingCart = ({ items }) => {
  
  return (
    <div id="openModal" style={{ display: "None" }}>
      <OpenModal> </OpenModal>
    </div>
   
  );
};

export default ShoppingCart;