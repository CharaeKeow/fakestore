import React from 'react';
import { connect } from 'react-redux';

import { getProduct } from '../store/products/action';

class Product extends React.Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const { params } = this.props.match.params;
    const product = this.props.product;
    return (
      <div style={{ 'margin': '12px', 'border': '1px solid #eee', 'borderRadius': 5, 'padding': '15px' }}>
        <p>{params}</p>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.category}</div>
        <div>RM {product.price}</div>
        <div>
          {product.rating.rate} || {product.rating.count}
        </div>
        <div style={{ 'display': 'flex' }}>
          <div
            style={{ border: '1px solid black', padding: 5, borderRadius: 5, marginTop: 5, cursor: 'pointer' }}
            onClick={() => console.log("Add to cart")}>
            Add to Cart
          </div>
        </div>
      </div >
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
    getProduct: () => dispatch(getProduct()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);