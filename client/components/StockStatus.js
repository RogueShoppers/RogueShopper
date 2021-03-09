import React from 'react'

const StockStatus = props => {
  const {product, allProd} = props

  const outOfStockMessage = allProd ? (
    <p className="red-text">Out Of Stock</p>
  ) : (
    <p className="red-text">Sorry, this item is currently out of stock</p>
  )

  const outOfStock = product.quantity === 0
  const stockStatus = outOfStock ? (
    <div>{outOfStockMessage}</div>
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
