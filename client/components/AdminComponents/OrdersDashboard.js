import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import {connect} from 'react-redux'
import {fetchAllOrders} from '../../store/orders'

const AllOrders = props => {
  const {orders, getOrders} = props
  const [offset, setOffset] = useState(0)
  const [perPage] = useState(10)

  useEffect(
    () => {
      getOrders()
    },
    [offset]
  )

  const handlePageClick = event => {
    const selectedPage = event.selected
    setOffset(selectedPage + 1)
  }

  return (
    <div>
      <h3>Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length !== 0 &&
            orders.slice(offset, offset + perPage).map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.completed ? 'Complete' : 'Incomplete'}</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel="prev"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(orders.length / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="center pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  )
}

const mapStateToProps = ({orders}) => {
  return {
    orders: orders.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(fetchAllOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)
