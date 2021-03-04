import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMe} from '../store/user'
import {Link} from 'react-router-dom'

class MyUserAccount extends Component {
  componentDidMount() {
    this.props.getMe()
  }
  render() {
    const {firstName, lastName, preferredName, address, email} = this.props.user

    return (
      <div className="container">
        <h2>Hi {!preferredName ? firstName : preferredName}!</h2>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Profile</span>
                <div>
                  <p>First Name: {firstName}</p>
                  <p>Last Name: {lastName}</p>
                  <p>Preferred Name: {preferredName}</p>
                  <p>Address: {address}</p>
                  <p>Email: {email}</p>
                  <p>Password: ******</p>
                </div>
              </div>
              <div className="card-action">
                <Link to="/me/edit">Edit</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <h5>Order History</h5>
        <table className="highlight">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[Placeholder]</td>
              <td>[Placeholder]</td>
            </tr>
            <tr>
              <td>[Placeholder]</td>
              <td>[Placeholder]</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMe: () => dispatch(getMe())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyUserAccount)
