import React from 'react'
import {
  Link
} from 'react-router-dom'
class Navbar extends React.Component {
  render() {
    return (
      <div>
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar