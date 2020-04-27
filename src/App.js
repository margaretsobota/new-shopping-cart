import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Container, Section } from "rbx";
import CardList from "./components/CardList";
import ShoppingCart from "./components/ShoppingCart";
import Sidebar from "react-sidebar";

import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyALArMC5OTgWFQu9tQJAR8xyizDmL4KoLc",
    authDomain: "new-shopping-cart-70d3d.firebaseapp.com",
    databaseURL: "https://new-shopping-cart-70d3d.firebaseio.com",
    projectId: "new-shopping-cart-70d3d",
    storageBucket: "new-shopping-cart-70d3d.appspot.com",
    messagingSenderId: "556592731947",
    appId: "1:556592731947:web:c47803e32095013b87d76e",
    measurementId: "G-D7SJF9XRSH"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref();

const App = () => {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState([]);
  const [inventory, setInventory] = useState({});
  const products = Object.values(data);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await fetch('./data/inventory.json');
      const json = await response.json();
      setInventory(json);
    };
    fetchInventory();
  }, []);


  // useEffect(() => {
  //   const handleData = snap => {
  //     if (snap.val()) setInventory(snap.val());
  //   }
  //   db.on('value', handleData, error => alert(error));
  //   return () => { db.off('value', handleData); };
  // }, []);


  return (
    
    <div>
      <Container>
        <CardList products = { products } state = { { selected, setSelected} } 
        inventoryState= { { inventory, setInventory } }/>
      </Container>
      <ShoppingCart state = { { selected, setSelected } }/>
    </div>
    
  );
};

export default App;
