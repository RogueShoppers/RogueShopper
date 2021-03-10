import React from 'react'
import {Link} from 'react-router-dom'
import {setFilter} from '../../store/products'
import {connect} from 'react-redux'

const TagChip = props => {
  const {tag, getFilter} = props
  return (
    <span className="chip" onClick={() => getFilter(tag.type)}>
      <Link to="/products">#{tag.type}</Link>
    </span>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getFilter: filter => dispatch(setFilter(filter))
  }
}
export default connect(null, mapDispatchToProps)(TagChip)
