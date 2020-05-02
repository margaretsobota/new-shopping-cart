import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Container, Message, Button } from "rbx";
import CardList from "./components/CardList";
import ShoppingCart from "./components/ShoppingCart";

import firebase from 'firebase/app';
import 'firebase/database';

import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const SignIn = () => (
  <StyledFirebaseAuth
    uiConfig={uiConfig}
    firebaseAuth={firebase.auth()}
  />
);

const Welcome = ({ user }) => (
  <Message color="info">
    <Message.Header>
      Welcome, {user.displayName}
      <Button primary onClick={() => firebase.auth().signOut()}>
        Log out
      </Button>
    </Message.Header>
  </Message>
);

const Banner = ({ user }) => (
  <React.Fragment>
    { user ? <Welcome user={ user } /> : <SignIn /> }
  </React.Fragment>
);

const App = () => {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState([]);
  const [inventory, setInventory] = useState({});
  const [user, setUser] = useState(null);
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
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setInventory(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    
    <div>
      <Container>
        <Banner user={ user } />
        <CardList products = { products } state = { { selected, setSelected} } 
        inventoryState= { { inventory, setInventory } }/>
      </Container>
      <ShoppingCart state = { { selected, setSelected } } inventoryState = { { inventory, setInventory } }      />
    </div>
    
  );
};

export default App;
