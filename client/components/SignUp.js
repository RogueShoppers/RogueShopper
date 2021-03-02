import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../store/user'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    preferredName: '',
    address: '',
    email: '',
    password: ''
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
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
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
            <input type="text" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" onChange={this.handleChange} />
          </div>

          <div>
            <button type="submit" className="btn blue lighten-1">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  }
}
export default connect(null, mapDispatchToProps)(SignUp)
