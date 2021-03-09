import React from 'react'

const StockStatus = props => {
  const {product} = props

  const outOfStock = product.quantity === 0
  const stockStatus = outOfStock ? (
    <p className="red-text">Sorry, this item is currently out of stock</p>
  ) : product.quantity <= 10 ? (
    <p className="orange-text text-darken-1">{`Hurry! Only ${
      product.quantity
    } items left!`}</p>
  ) : (
    <p className="teal-text">In Stock!</p>
  )
  return stockStatus
}

export default StockStatus
