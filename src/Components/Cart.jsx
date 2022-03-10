import React from 'react';
import { connect } from 'react-redux';

import { getCart } from '../store/carts/actions'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }


  render() {
    const { cart = [] } = this.props.state;
    return (
      <>
        <p>Cart: ({cart.length})</p>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.cartReducers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);