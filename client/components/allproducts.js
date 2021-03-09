import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts, fetchSingleProduct} from '../store/products'
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'
import FilterProducts from './FilterProducts'
import {createNewOpenOrder} from '../store/orders'

const AllProducts = props => {
  const {products, addToCart, getProducts, getSingleProduct} = props
  const [offset, setOffset] = useState(0)
  const [perPage] = useState(16)
  // const [pageCount, setPageCount] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const productId = props.match.params.productId

  useEffect(
    () => {
      getProducts()
      getSingleProduct(productId)
    },
    [offset]
  )

  const handlePageClick = event => {
    const selectedPage = event.selected
    setOffset(selectedPage + 16)
  }

  const handleAddToCart = event => {
    event.preventDefault()
    const orderInfo = {
      productId,
      quantity
    }
    addToCart(orderInfo)
  }

  return (
    <div>
      <div className="row container">
        <h1 className="header">All Products</h1>
        <FilterProducts />
        <div className="row">
          {products.length !== 0
            ? products.slice(offset, offset + perPage).map(product => (
                <div key={product.id}>
                  <div className="col s12 m3">
                    <div className="card medium">
                      <div className="center card-image">
                        <img
                          src={product.imageURL}
                          alt="product img"
                          style={{height: 200, width: 200}}
                        />
                      </div>
                      <Link to={`/products/${product.id}`}>
                        <h2 className="center card-title">{product.name}</h2>
                      </Link>
                      <div className="center card-content">
                        <h5>${product.price}</h5>
                      </div>
                      {/* <div className="card-action">
                        <button
                          type="submit"
                          onClick={handleAddToCart}
                          className="center btn waves-effect waves-light btn-small"
                        >
                          Add To Cart
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))
            : 'No Products on Database'}
          <ReactPaginate
            className="waves-effect"
            previousLabel="prev"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={Math.ceil(products.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="center pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.all,
    product: state.products.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(fetchAllProducts()),
    getSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: orderInfo => dispatch(createNewOpenOrder(orderInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
