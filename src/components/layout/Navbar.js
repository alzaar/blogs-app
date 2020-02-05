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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Blogs</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/allblogs" className="nav-link">View Blogs</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs/" className="nav-link">Create Blog</Link>
              </li>
              <li className="nav-item">
                <Link to='/logout' className="nav-link" onClick={this.onClick} >Logout</Link>
              </li>
              <li className="nav-item">
                <Link to="/register/" className="nav-link">Sign up</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar