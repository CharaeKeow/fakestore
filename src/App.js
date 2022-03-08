import './App.css';
import React from 'react';
import axios from 'axios';

import { Product } from './Components/Product'

/*
 React.PureComponent is better than Component in some cases due to it implements `shouldComponent()` by default (doing shallow comparison)
 as per https://linguinecode.com/post/react-component-vs-purecomponent, use PureComponent when the React component
 won't be mutatd by state or props. All children need to be pure as well.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        const products = res.data;
        this.setState({
          products
        })
      })
  }

  render() {
    return (
      <ul>
        {this.state.products.map(product =>
          <Product key={product.id} product={product} />
        )}
      </ul>
    )
  }
}

export default App;
