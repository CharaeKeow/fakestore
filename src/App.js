import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import ProductList from './Components/ProductList';
import Product from './Components/Product'

/*
 React.PureComponent is better than Component in some cases due to it implements `shouldComponent()` by default (doing shallow comparison)
 as per https://linguinecode.com/post/react-component-vs-purecomponent, use PureComponent when the React component
 won't be mutatd by state or props. All children need to be pure as well.
*/
export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/products/:productId" element={<Product />} />
          <Route path="*" element={
            <h1>404 this page doesn't exist</h1>
          } />
        </Routes>
      </Router>
    )
  }
}
