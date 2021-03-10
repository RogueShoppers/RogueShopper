import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../../store/products'
import StockStatus from '../../utils/StockStatus'
import TagChip from './TagChip'
import {Link} from 'react-router-dom'

const MoreLikeThis = props => {
  const {tags, getProducts, products} = props

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h2>Similar Products</h2>
      {tags &&
        tags.map(tag => {
          const similarProducts = products
            .filter(product => product.tags.some(obj => obj.type === 'destroy'))
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)

          return (
            <div key={tag.id}>
              <TagChip tag={tag} />
              <div className="row">
                {similarProducts.map(product => {
                  return (
                    <div key={product.id}>
                      <div className="col s12 m3">
                        <div className="card small">
                          <div className="center card-image">
                            <img
                              src={product.imageURL}
                              alt="product img"
                              style={{height: 150, width: 150}}
                            />
                          </div>
                          <div className="center card-content">
                            <Link to={`/products/${product.id}`}>
                              <h6>{product.name}</h6>
                            </Link>
                            <h6>${product.price}</h6>
                            <h6>
                              <StockStatus
                                product={product}
                                allProd="allProd"
                              />
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(MoreLikeThis)
