import React from 'react'
import axios from 'axios'
import './App.css'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    let params = {
      params: {
        username: 'ali',
        password: 'ali'
      }
    }
    axios.post('login/', {
      "username":"",
      "password":""
      }).then(res => console.log(res))

      // axios({
      //   method: 'post',
      //   url: 'login/',
      //   data: {
      //     email : "test@gmail.com",
      //     username : 'test'
      //   }
      // })
      // .then(response => (console.log(response)))
  }
  // window.fetch('blogs/')
  // .then(function(response) {
  //   // The response is a Response instance.
  //   // You parse the data into a useable format using `.json()`
  //   return response.json();
  // }).then(function(data) {
  //   // `data` is the parsed version of the JSON returned from the above endpoint.
  //   console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  // });
  render () {
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
  );
  }
}

export default App;
