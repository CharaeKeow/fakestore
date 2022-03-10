import React from 'react';
import { connect } from 'react-redux';

import { getCart } from '../store/carts/actions'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }

  calcTotal(cart) {
    let total = 0;
    cart.map(item => total += item.price);
    return total;
  }

  render() {
    const { cart = [] } = this.props.state;
    return (
      <>
        <p>Cart: ({cart.length})</p>
        <p>Total: RM {this.calcTotal(cart)}</p>
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