import React from 'react';
import { connect } from 'react-redux';

const Product = ({ product})=> {
  if(!product){
    return null
  }
  return (
    <div>{ product.name }</div>
  );
};

const mapStateToProps = ({ products }, { id })=> {
  const product = products.find(product=> product.id === id);
  return {
    product
  };
};
export default connect(mapStateToProps)(Product);
