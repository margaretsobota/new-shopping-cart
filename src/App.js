import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Container, Section } from "rbx";
import CardList from "./components/CardList";
import ShoppingCart from "./components/ShoppingCart";
import Sidebar from "react-sidebar";

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    
    <div>
        <Container>
          <CardList products = { products }/>
        </Container>
      
        
        <ShoppingCart />
        
    
    </div>
    
  );
};

export default App;
