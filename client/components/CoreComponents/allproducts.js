import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts, fetchSingleProduct} from '../../store/products'
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'
import FilterProducts from './FilterProducts'
import {createNewOpenOrder} from '../../store/orders'

const AllProducts = props => {
  const {products, addToCart, getProducts} = props
  const [offset, setOffset] = useState(0)
  const [perPage] = useState(16)

  useEffect(
    () => {
      getProducts()
    },
    [offset]
  )

  const handlePageClick = event => {
    const selectedPage = event.selected
    setOffset(selectedPage + 16)
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
                    <div className="card large">
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
                        {/* <h5>{stockStatus}</h5> */}
                      </div>
                      <div className="center card-action">
                        <button
                          type="button"
                          onClick={() =>
                            addToCart({productId: product.id, quantity: 1})
                          }
                          className="center btn waves-effect waves-light btn-small"
                        >
                          Add To Cart
                        </button>
                      </div>
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

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    getProducts: () => dispatch(fetchAllProducts()),
    addToCart: orderInfo => dispatch(createNewOpenOrder(orderInfo, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
