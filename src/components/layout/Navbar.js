import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { LOGOUT } from '../../config/constants'
import CustomAxios from '../../config/axiosConfig'

const axios = new CustomAxios()

class Navbar extends React.Component {
  onClick = () => {
    //NEED AUTHORIZATION HEADER
    //REFACTOR
    let params = {
      headers: {
        Authorization: axios.getHeader()
      }
    }
    axios.post(params, '/logout', LOGOUT)
    window.location.href = '/login'
  }
  render() {
    let showLogin = axios.isValidTimeStamp()
    return (
      <div>
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {showLogin ? '' :
            <li>
              <Link to="/login">Login</Link>
            </li>}
            <li>
              <Link to="/blogs">View Blogs</Link>
            </li>
            <li>
              <Link to="/blog">Create Blog</Link>
            </li>
            <li>
              <Link to='/logout' onClick={this.onClick} >Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar