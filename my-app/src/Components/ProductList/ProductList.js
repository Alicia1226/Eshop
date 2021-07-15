import React from 'react';
import ProductCard from "../ProductCard/ProductCard"
import './ProductList.css';

const ProductList=(props)=> {
 

    return (
      <>
      {props.products.map((products,i) => <ProductCard key={i} products={products}/> )}
      </>
    );
  }


export default ProductList;