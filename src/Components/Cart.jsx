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
      <div style={{ width: '100px', border: '1px solid #eee', borderRadius: 5, cursor: 'pointer', textAlign: 'center', }}>
        <p>Cart: ({cart.length})</p>
      </div>
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