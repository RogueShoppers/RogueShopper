import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllProducts} from '../../store/products'
import {_toggleEdit} from '../../store/products'
import EditProduct from './EditProduct'
import Button from '@material-ui/core/Button'

const ProductDashboard = props => {
  const {products, getProducts, toggleEdit} = props
  const [offset, setOffset] = useState(0)
  const [perPage] = useState(10)
  const {isEditing} = useState()

  useEffect(
    () => {
      getProducts()
    },
    [offset]
  )

  const handlePageClick = event => {
    const selectedPage = event.selected
    setOffset(selectedPage + 1)
  }

  const handleEditClick = event => {
    // toggleEdit()
    let prodToEdit = event.target.value
    return prodToEdit
  }

  useEffect(
    () => {
      handleEditClick
    },
    [isEditing]
  )

  return (
    <div>
      <h3>Products</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Short Description</th>
            <th>Long Description</th>
            <th>Price</th>
            <th>Inventory Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.length !== 0 &&
            products.slice(offset, offset + perPage).map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.shortDescription}</td>
                <td>{product.longDescription}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                 {/* <Button value={product} component={Link} to="/editproduct">Edit</Button> */}
                 <Link to={{
                   pathname: "/editproduct",
                   state: {
                     selectedProduct: product
                   }}}>Edit</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* {isEditing && <div><EditProduct selectedProduct={prodToEdit}/></div>} */}
      <ReactPaginate
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
  )
}

const mapState = state => {
  console.log(state)
  return {
    products: state.products.all,
    selectedProduct: state.selected,
    isEditing: state.products.isEditing
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchAllProducts()),
    // toggleEdit: () => dispatch(_toggleEdit())
  }
}

export default connect(mapState, mapDispatch)(ProductDashboard)
