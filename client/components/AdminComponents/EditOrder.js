import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {closeOpenOrder} from '../../store/orders'

const EditOrder = props => {
  const {selectedOrder} = props.location.state
  let [order, setOrder] = useState([])

  useEffect(
    () => {
      setOrder(order)
    },
    [setOrder]
  )

  const handleChange = event => {
    order = {id: selectedOrder.id, [event.target.name]: event.target.value}
  }

  setOrder = order => {
   return order.map(o => {
      {
        o.completed
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    closeOpenOrder({...order})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Order Status:</label>
        <input
          name="completed"
          onChange={handleChange}
          defaultValue={String(selectedOrder.completed)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    selectedOrder: state.order,
    setOrder: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    closeOpenOrder: order => dispatch(closeOpenOrder(order))
  }
}

export default connect(mapState, mapDispatch)(EditOrder)
