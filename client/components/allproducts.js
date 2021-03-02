import {render} from 'enzyme'
import React from 'react'
import {connect} from 'react-redux'

export default class AllProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>All Products</h1>
        {this.props.products.map(product => (
          <div key={product.id}>
            <img src={product.imageURL} />
            <h2>{product.name}</h2>
            <p>{product.shortDescription}</p>
            <h3>{product.price}</h3>
          </div>
        ))}
      </div>
    )
  }
}
