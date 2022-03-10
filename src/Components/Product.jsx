import React from 'react';
import { connect } from 'react-redux';

import { setCart } from '../store/carts/actions';

class Product extends React.Component {
  handleAddToCart(product) {
    this.props.setCart(product);
  }

  render() {
    const selectedProduct = this.props.state;
    return (
      <div style={{ 'margin': '12px', 'border': '1px solid #eee', 'borderRadius': 5, 'padding': '15px' }}>
        <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '200px', height: '200px' }} />
        <div>{selectedProduct.title}</div>
        <div>{selectedProduct.description}</div>
        <div>{selectedProduct.category}</div>
        <div>RM {selectedProduct.price}</div>
        <div>
          Rating: {selectedProduct.rating.rate} || Reviews: {selectedProduct.rating.count}
        </div>
        <div style={{ 'display': 'flex' }}>
          <div
            style={{ border: '1px solid black', padding: 5, borderRadius: 5, marginTop: 5, cursor: 'pointer' }}
            onClick={() => this.handleAddToCart(selectedProduct)}>
            Add to Cart
          </div>
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.productReducers.selectedProduct,
    cart: state.cartReducers
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (product) => dispatch(setCart(product))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);