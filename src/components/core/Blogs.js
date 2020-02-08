import React from 'react'
import CustomAxios from '../../config/axiosConfig'
import { getBlogsViewProps, selectBlog } from '../../actions/blogsActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
const axios = new CustomAxios()

class Blogs extends React.Component {
  async componentDidMount() {
    this.props.getBlogsViewProps()
    // axios.get('/blogs').then(res => console.log(res))
  }
  handleClick = (e, data) => {
    console.log(e.target.innerText)
    switch (e.target.innerText) {
      case 'Edit':
        this.props.history.push(`/blogs/${data.id}/`)
        this.props.selectBlog(data)
        break
      case 'Delete':
        axios.delete(`/blogs/${data.id}`, data)
        this.props.getBlogsViewProps()
        break
      case 'View':
        this.props.history.push(`/blog/${data.id}`)
        this.props.selectBlog(data)
        break
      default:
        return 'No button'
    }
  }
  render() {
    let blogs = (this.props.blogs) ? this.props.blogs.data.map(blog => (
      <div key={blog.id}>
        <h2>
          {blog.title}
        </h2>
        <p>
          {blog.description}
        </p>
        <div>
          <button onClick={(e) => this.handleClick(e, blog)}>Edit</button>
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