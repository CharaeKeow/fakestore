import React from 'react';
import { connect } from 'react-redux';

import { getCart } from '../store/carts/actions';

class CartDetails extends React.Component {
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
    //console.log(cart);
    return (
      <>
        <h1>Carts</h1>
        <h4>Total: RM {this.calcTotal(cart)}</h4>
        {cart.map(item =>
          <div key={item.id}>
            <img src={item.image} alt={item.title} style={{ width: '200px', height: '200px' }} />
            <h3>{item.title}</h3>
            <p>RM {item.price}</p>
          </div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);