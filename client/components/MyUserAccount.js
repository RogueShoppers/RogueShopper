import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMe} from '../store/user'

class MyUserAccount extends Component {
  componentDidMount() {
    console.log('componentDidMount')
    this.props.getMe()
  }
  render() {
    console.log('inside render()')
    const loggedInUser = this.props.user
    return loggedInUser.email
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
