
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductItem from './productItem';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const ProductList = ({ products, cart, setCart }) => {
  console.log(11, cart)
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} cart = {cart} setCart={setCart}/>
      ))}
    </ProductGrid>
  );
};

export default ProductList;
