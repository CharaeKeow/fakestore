import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProducts, } from '../store/products/action'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products = [] } = this.props.state;
    return (
      <ul>
        <h1>Products</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map(product =>
            <Link
              key={product.id}
              style={{ width: '400px', height: '400px', border: '1px solid #eee', margin: 5, padding: 5, borderRadius: 5, cursor: 'pointer', color: 'black', textDecoration: 'none' }}
              to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
              <h3>{product.title}</h3>
              <p>RM {product.price}</p>
            </Link>
          )}
        </div>
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
    getProducts: () => dispatch(getProducts()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);