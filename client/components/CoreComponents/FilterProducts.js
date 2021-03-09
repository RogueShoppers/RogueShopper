import React from 'react'
import {connect} from 'react-redux'

const FilterProducts = props => {
  const {products} = props

  return (
    <div>
      <h6>Filter by Category</h6>
      <select>
        <option value="">All</option>
      </select>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.all
  }
}

export default connect(mapStateToProps)(FilterProducts)
