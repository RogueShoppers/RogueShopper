import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {closeOpenOrder} from '../../store/orders'

const EditOrder = props => {
  const {selectedOrder} = props.location.state
  const [setOrder] = useState(null)
  //   console.log( 'props', selectedOrder)

  useEffect(() => {
    closeOpenOrder()
  }, [])

  useEffect(
    () => {
      //   handleChange().setOrder()

      //    const handleChange = (event) => {
      //         setOrder({product: ({
      //             [event.target.name]: event.target.defaultValue
      //           })})
      //         }
      //         console.log('product in handle change', setOrder)
      //         return handleChange
      console.log('inside handle change useEffect', setOrder)
    },
    [setOrder]
  )

  const handleChange = event => {
    return {[event.target.name]: event.target.value}
  }

  const handleSubmit = event => {
    event.preventDefault()
    editOrder({...selectedOrder})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Order Status:</label>
        <input
          name="completed"
          onChange={handleChange}
          //   defaultValue={String(order.completed)}
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
