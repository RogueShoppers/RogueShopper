import React, {Component} from 'react'
import {logIn} from '../store/user'
import {connect} from 'react-redux'

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
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div>
            <button type="submit" className="btn blue lighten-1">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user))
  }
}

export default connect(null, mapDispatchToProps)(LogIn)
