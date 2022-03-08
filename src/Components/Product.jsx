import React from 'react'

export class Product extends React.Component {
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
      </div >
    )
  }
}