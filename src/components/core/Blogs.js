import React from 'react'
import CustomAxios from '../../config/axiosConfig'

const axios = new CustomAxios()

class Blogs extends React.Component {
  componentWillMount() {
    axios.get()
  }
  render() {
    return (
      <div>
        These are your blogs
      </div>
    )
  }
}

export default Blogs