import React from 'react'
import {
  Link
} from 'react-router-dom'
import CustomAxios from '../../config/axiosConfig'

const axios = new CustomAxios()

class Navbar extends React.Component {
  onClick = () => {
    let params = 'no_params'
    axios.post(params, '/logout')
  }
  render() {
    return (
      <div>
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
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