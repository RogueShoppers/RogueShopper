import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../store/user'
import {fetchMyOpenOrder} from '../../store/orders'
import ErrorFormMessage from '../CoreComponents/ErrorFormMessage'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      preferredName: '',
      address: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getMyOpenOrder()
  }

  handleChange(evt) {
    this.setState({
      [evt.target.id]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    const {firstName, lastName, address, email, password} = this.state
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
            {!firstName ? (
              <span className="helper-text red-text text-accent-1">
                *Required
              </span>
            ) : (
              ''
            )}
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
            {!lastName ? (
              <span className="helper-text red-text text-accent-1">
                *Required
              </span>
            ) : (
              ''
            )}
          </div>

          <div className="input-field">
            <label htmlFor="preferredName">Preferred Name</label>
            <input
              type="text"
              id="preferredName"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
            {!email ? (
              <span className="helper-text red-text text-accent-1">
                *Required
              </span>
            ) : (
              ''
            )}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
            {!password ? (
              <span className="helper-text red-text text-accent-1">
                *Required
              </span>
            ) : (
              ''
            )}
          </div>
          {this.props.error.data ? (
            <ErrorFormMessage error={this.props.error} />
          ) : (
            ''
          )}

          <div>
            <button type="submit" className="btn blue lighten-1">
              Sign Up
            </button>
          </div>
        </form>
        <br />
        <a href="/auth/google" className="waves-effect waves-light btn small">
          <i className="fab fa-google" />
          {'     '}
          Sign up with Google
        </a>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.users.error,
    myOpenOrder: state.orders.myOpenOrder
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    signUp: newUser => dispatch(signUp(newUser, history)),
    getMyOpenOrder: () => dispatch(fetchMyOpenOrder())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
