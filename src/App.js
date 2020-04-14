import React, { useEffect, useState } from 'react';
import "rbx/index.css";
import { Container } from "rbx";
import CardList from "./components/CardList";

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
    // <ul>
    //   {products.map(product => <li key={product.sku}>{product.title}</li>)}
    // </ul>
    <Container>
      <CardList products = { products }/>
    </Container>
    
  );
};

export default App;
