import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../store/products'
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'

const AllProducts = props => {
  const {products, getProducts} = props
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [perPage] = useState(10)
  const [pageCount, setPageCount] = useState(0)

  useEffect(
    () => {
      getProducts()
    },
    [offset]
  )

  handlePageClick = event => {
    const selectedPage = event.selected
    setOffset(selectedPage + 1)
  }

  return (
    <div>
      <div className="row container">
        <h1 className="header">All Products</h1>
        <div className="row">
          {products.length !== 0
            ? products.map(product => (
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
                    </div>
                  </div>
                </div>
              ))
            : 'No Products on Database'}
        </div>
      </div>
      <ul className="center pagination">
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        <li className="active">
          <a href="#!">1</a>
        </li>
        <li className="waves-effect">
          <a href="#!">2</a>
        </li>
        <li className="waves-effect">
          <a href="#!">3</a>
        </li>
        <li className="waves-effect">
          <a href="#!">4</a>
        </li>
        <li className="waves-effect">
          <a href="#!">5</a>
        </li>
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.all
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(fetchAllProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
