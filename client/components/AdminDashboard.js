import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editMe} from '../store/user'

class AdminDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      preferredName: '',
      address: '',
      email: '',
      password: '',
      isAdmin: false
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
      password: this.props.user.password,
      isAdmin: this.props.user.isAdmin
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
    //have admin user choose products or users dashboard
    return (
      <div className="container">
        <div id="adminSearch" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editMe: user => dispatch(editMe(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
