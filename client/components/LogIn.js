import React, {Component} from 'react'

class LogIn extends Component {
  state = {
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

export default LogIn
