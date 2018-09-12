import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from './store';

const ProductList = ({ products, deleteProduct })=> {
  return (
  <ul>
    {
      products.map( product => <li key={ product.id}>{ product.name } <button onClick={()=> deleteProduct(product)}>x</button></li>)
    }
  </ul>
  );
};

const mapStateToProps = ({ products })=> ({ products });
const mapDispatchToProps = (dispatch)=> {
  return {
    deleteProduct: (product)=> dispatch(deleteProduct(product))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
