import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {closeOpenOrder} from '../../store/orders'

const EditOrder = props => {
  const {selectedOrder} = props.location.state
  let [order, setOrder] = useState([])

  useEffect(() => {
    closeOpenOrder()
  }, [])

  useEffect(
    () => {
      setOrder(order)
      console.log('inside handle change useEffect', setOrder)
    },
    [setOrder]
  )

  const handleChange = event => {
    order = {id: selectedOrder.id, [event.target.name]: event.target.value}
  }

  setOrder = ((order) => {
    order.map(o => {
    {
      o.firstName,
      o.lastName,
      o.preferredName,
      o.email,
      o.address,
      o.isAdmin
    }
  }
)
})

  const handleSubmit = event => {
    event.preventDefault()
    editOrder({...order})
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
    editOrder: order => dispatch(closeOpenOrder(order))
  }
}

export default connect(mapState, mapDispatch)(EditOrder)
