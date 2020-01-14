import React, { Component } from 'react'
import { encryptData, axiosInstance, getDecryptData } from '../config/axiosConfig'
import { LOGIN_URL } from '../config/constants'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    let params = {
      username: this.state.username,
      password: this.state.password
    }
    axiosInstance.post(LOGIN_URL, params).then(res => encryptData(res.data.token))
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    // axiosInstance.get('blogs/').then(res => console.log(res))
    return (
    <div>
      <form  onSubmit={this.onSubmit}>
        <label>Name</label>
        <input type='text' name='username' onChange={this.onChange} />
        <label>Password</label>
        <input type='password' name='password' onChange={this.onChange} />
        <input type='submit' />
      </form>
    </div>
    )
  }
}

export default LoginForm