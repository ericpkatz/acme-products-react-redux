import React from 'react';
import { connect } from 'react-redux';
import { createProduct, deleteProduct } from './store';
import faker from 'faker';

const ProductList = ({ products, deleteProduct, createProduct })=> {
  return (
    <div>
    <button onClick={ createProduct }>Create Product</button>
  <ul>
    {
      products.map( product => <li key={ product.id}>{ product.name } { product.rating }<button onClick={()=> deleteProduct(product)}>x</button></li>)
    }
  </ul>
    </div>
  );
};

const mapStateToProps = ({ products })=> ({ products });
const mapDispatchToProps = (dispatch)=> {
  return {
    deleteProduct: (product)=> dispatch(deleteProduct(product)),
    createProduct: ()=> dispatch(createProduct({
      name: faker.commerce.product(),
      rating: faker.random.number()
    }))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
