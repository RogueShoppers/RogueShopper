import React from 'react'
import {connect} from 'react-redux'
import {setFilter} from '../../store/products'

const FilterProduct = props => {
  const {getFilter} = props

  return (
    <div>
      <label>Filter by Category</label>
      <select
        className="browser-default"
        value={props.filter}
        onChange={event => getFilter(event.target.value)}
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
    filter: state.products.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFilter: filter => dispatch(setFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProduct)
