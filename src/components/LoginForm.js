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
  //   let params = {
  //     username: 'ali',
  //     password: 'ali'
  //   })
  // }
    let headers = {
      'Authroization': 'Token 84cd72f2675b5991441a24e0808bdf37dba9b1b763521044ec32f00524ef53e6'
    }
    console.log(getDecryptData()[0].token)
    //  { headers: headers }
    // axiosInstance.post('login/', params).then(res => encryptData(res.data.token))
    axiosInstance.get('blogs/').then(res => console.log(res))
    
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