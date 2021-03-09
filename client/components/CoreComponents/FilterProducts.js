import React from 'react'
import {connect} from 'react-redux'
import {filterProducts} from '../store/products'

const FilterProduct = props => {
  const {products} = props

  console.log('props inside FilterProducts--->', props)

  return (
    <div>
      <label>Filter by Category</label>
      <select
        className="browser-default"
        value={props.toyType}
        onChange={e => props.filterProducts(props.products, e.target.value)}
      >
        <option value="">All</option>
        <option value="chase">Chase</option>
        <option value="chew">Chew</option>
        <option value="destroy">Destroy</option>
        <option value="brain teaser">Brain Teaser</option>
        <option value="tug">Tug</option>
        <option value="fetch">Fetch</option>
        <option value="feed">Feed</option>
        <option value="squishy">Squishy</option>
      </select>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    toyType: state.products.toyType,
    filteredProducts: state.products.filteredItems
    // filtered: state.products.filtered,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterProducts: () => dispatch(filterProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProduct)
