import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { EDIT_BLOG } from '../../config/constants'

class EditBlog extends React.Component {
  componentDidMount() {
    
  }
  render() {
    console.log(this.props.selectedBlog)
    return (
      <Form formFieldsDetails={this.props.blogFormDetails} selectedBlog={this.props.selectedBlog} type={EDIT_BLOG}  history={this.props.history} data={this.props.blogData}/>
    )
  }
}

const mapStateToProps = state => {
  return ({
    login: state.formReducer.login,
    loginFormDetails: state.formReducer.loginFormFieldsDetails,
    blog: state.formReducer.blog,
    blogFormDetails: state.formReducer.blogFormFieldsDetails,
    blogs: state.blogsReducer.blogs,
    selectedBlog: state.blogsReducer.selectedBlog
  })
}

export default connect(mapStateToProps, null)(EditBlog)