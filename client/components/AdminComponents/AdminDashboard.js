import React, {Component} from 'react'
import {connect} from 'react-redux'
import AllUsers from './allUsers'
import ProductDashboard from './ProductDashboard'
import AllOrders from './OrdersDashboard'
import {searchDatabase} from '../../store/search'

class AdminDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchQuery: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handlePageClick = this.handlePageClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      searchQuery: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.search(this.state.searchQuery)
  }

  // handlePageClick(event) {
  //  this.setState({
  //    offset: 10
  //  })

  // }

  render() {
    return (
      <div className="container">
        <div id="adminSearch">
          <form onSubmit={this.handleSubmit}>
            <label>Search:</label>
            <input type="text" id="searchQuery" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id="adminUsersTable">
          <AllUsers />
        </div>
        <div id="adminProductsTable">
          <ProductDashboard />
        </div>
        <div id="adminOrdersTable">
          <AllOrders />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let search = {...state.searchQuery}
  const {match} = ownProps
  return {
    orders: state.orders.allClosedOrders,
    search: state.searchQuery
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    search: query => dispatch(searchDatabase(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
