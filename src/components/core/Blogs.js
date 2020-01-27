import React from 'react'
import CustomAxios from '../../config/axiosConfig'
import { getBlogsViewProps, selectBlog } from '../../actions/blogsActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
const axios = new CustomAxios()

class Blogs extends React.Component {
  async componentWillUpdate() {
    setTimeout(async () => {
      if (!(await axios.sessionValid())) {
        this.props.history.push('/login')
      } else {
      this.props.getBlogsViewProps()
      }
    }, 1000)
  }
  handleClick = (e, data) => {
    switch (e.target.innerText) {
      case 'Edit':
        this.props.history.push('/edit')
        break
      case 'Delete':
        axios.delete('/delete', data)
        this.props.getBlogsViewProps()
        break
      case 'View':
        this.props.history.push(`/edit`)
        this.props.selectBlog(data)
      default:
        return 'No button'
    }
  }
  render() {
    let blogs = (this.props.blogs) ? this.props.blogs.map(blog => (
      <div key={blog.id}>
        <h2>
          {blog.title}
        </h2>
        <p>
          {blog.description}
        </p>
        <div>
          <button onClick={this.handleClick}>Edit</button>
          <button onClick={(e) => this.handleClick(e, blog)}>Delete</button>
          <button onClick={(e) => this.handleClick(e, blog)}>View</button>
        </div>
      </div>
    )) :
    ''
    return (
      <div>
        These are your blogs
        {blogs}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    blogs: state.blogsReducer.blogs.blogs
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getBlogsViewProps: getBlogsViewProps,
    selectBlog: selectBlog
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Blogs)