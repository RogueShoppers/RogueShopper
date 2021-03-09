import React, {Component} from 'react'
import {logIn} from '../../store/user'
import {connect} from 'react-redux'
import ErrorFormMessage from '../CoreComponents/ErrorFormMessage'
import {Link} from 'react-router-dom'

class LogIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.id]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.logIn(this.state)
  }

  render() {
    const {email, password} = this.state
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
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
              Login
            </button>
          </div>
        </form>
        <br />
        <a href="/auth/google" className="waves-effect waves-light btn small">
          <i className="fab fa-google" />
          {'     '}
          Sign in with Google
        </a>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.users.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
