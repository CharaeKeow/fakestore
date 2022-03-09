import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import { getProducts } from '../store/products/action'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products = [] } = this.props.state;
    return (
      <ul>
        {products.map(product =>
          <Product key={product.id} product={product} />
        )}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.productReducers
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);