import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import { Product } from './Components/Product'
import { getProducts } from './store/products/action'

/*
 React.PureComponent is better than Component in some cases due to it implements `shouldComponent()` by default (doing shallow comparison)
 as per https://linguinecode.com/post/react-component-vs-purecomponent, use PureComponent when the React component
 won't be mutatd by state or props. All children need to be pure as well.
*/
class App extends React.Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
