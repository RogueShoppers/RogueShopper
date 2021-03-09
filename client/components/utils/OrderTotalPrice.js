import React from 'react'

const OrderTotalPrice = props => {
  const {myOrder} = props
  return myOrder.products.reduce((total, product) => {
    return total + product.price * product['order-product'].orderQuantity
  }, 0)
}

export default OrderTotalPrice
