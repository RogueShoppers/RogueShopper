import React from 'react'

const CartItemCount = props => {
  const {myOrder} = props
  if (myOrder.id) {
    return myOrder.products.reduce((total, product) => {
      return total + product['order-product'].orderQuantity
    }, 0)
  } else {
    return 0
  }
}

export default CartItemCount
