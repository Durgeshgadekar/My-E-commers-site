import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import SearchBar from './searchbar';
import ProductList from './productlist';
import './App.css';


const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const API_URL =  'https://api.escuelajs.co/api/v1/products';
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      {/* <App.css /> */}
      <Navbar cart = {cartProducts} setCart={setCartProducts} />
      <SearchBar onSearch={handleSearch}  cart = {cartProducts} setCart={setCartProducts} />
      <ProductList products={filteredProducts}  cart = {cartProducts} setCart={setCartProducts}/>
    </>
  );
};




export default App;
