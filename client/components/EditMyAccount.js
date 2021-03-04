import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editMe} from '../store/user'
import {Link} from 'react-router-dom'

class EditMyAccount extends Component {
  constructor(props) {
    super(props)
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
    this.setState({
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      preferredName: this.props.user.preferredName,
      address: this.props.user.address,
      email: this.props.user.email,
      password: this.props.user.password
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.editUser(this.state)
  }

  render() {
    const {
      firstName,
      lastName,
      preferredName,
      address,
      email,
      password
    } = this.state

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="firstName" className="active">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="preferredName" className="active">
              Preferred Name
            </label>
            <input
              type="text"
              id="preferredName"
              value={preferredName}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="address" className="active">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="email" className="active">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password" className="active">
              Password
            </label>
            <input
              placeholder="******"
              type="password"
              id="password"
              defaultValue={password}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="submit" className="btn blue lighten-1">
              Update
            </button>

            <Link to="/me">
              <button type="submit" className="btn pink lighten-2">
                Cancel
              </button>
            </Link>
          </div>
        </form>
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
    editUser: user => dispatch(editMe(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMyAccount)
