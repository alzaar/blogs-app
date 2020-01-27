import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../Form'
import { selectBlog } from '../../actions/blogsActions';
class EditBlog extends React.Component {
  render() {
    console.log(this.props, 'from edit blog')
  return (
    <Form formFieldsDetails={this.props.blogFormDetails} selectedBlog={this.props.selectedBlog} type={'view_blog'}  history={this.props.history} data={this.props.blogData}/>
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