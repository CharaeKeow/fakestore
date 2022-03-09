import React from 'react'

class Product extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div style={{ 'margin': '12px', 'border': '1px solid #eee', 'borderRadius': 5, 'padding': '15px' }}>
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

export default Product;