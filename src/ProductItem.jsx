import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
`;

const ProductName = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #666;
`;

const getImgLink = (url) => {
  let newUrl = url.substring(2, url.length - 1);
  return newUrl;
}



const ProductItem = ({ product, cart, setCart }) => {
  const isProdInCart = (prod) => {
    let flag = 0;
    cart.map((item) =>{
      if(item.id == prod.id){
        flag = 1;
      }
    })
    // console.log(44, flag)
    return flag;
  }

  const handleAddToCart = (prod) => {
    setCart((prev) => {
      return [prod, ...prev]
    })
  }

  const handleRemoveCart = (prod) => {
    let newArr = cart.filter((item) => {
      return item.id != prod.id
    })
    setCart(newArr);
  }
  
  return (
    <ProductCard>
      <ProductImage src={getImgLink(product.images[0])} alt={product.title} />
      <ProductName>{product.title}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
      {
        
        (isProdInCart( product) == 0) ? <button onClick={() => handleAddToCart( product)}>Add to cart</button>
        : <button onClick={() => handleRemoveCart(product)}>Remove from cart</button>
      }
    </ProductCard>
  );
};

export default ProductItem;
