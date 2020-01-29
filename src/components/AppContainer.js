// React-Redux Config
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Route,
} from 'react-router-dom'
// Config -- Actions
import { getFormDetails, getBlogFormDetails } from '../actions/formActions'
import { getBlogsViewProps } from '../actions/blogsActions'
// Components
import Form from './Form'
import Navbar from './layout/Navbar'
import Home from './layout/Home'
import Blogs from './core/Blogs'
import EditBlog from './core/EditBlog'
import CustomAxios from '../config/axiosConfig';

const axios = new CustomAxios()

class AppContainer extends React.Component {
  async componentWillMount() {
    this.props.getFormDetails()
    this.props.getBlogFormDetails()
    if ((await axios.sessionValid())) {
      this.props.getBlogsViewProps()
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path={this.props.login.url}>
          <Form formFieldsDetails={this.props.loginFormDetails} type={this.props.login.type} history={this.props.history}/>
        </Route>
        <Route exact path={this.props.blog.url}>
          <Form formFieldsDetails={this.props.blogFormDetails} type={'POST_BLOG'}  history={this.props.history}/>
        </Route>
        <Route exact path={this.props.blogs.url} component={Blogs} />
        <Route exact path={'/edit'} component={EditBlog} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    login: state.formReducer.login,
    loginFormDetails: state.formReducer.loginFormFieldsDetails,
    blog: state.formReducer.blog,
    blogFormDetails: state.formReducer.blogFormFieldsDetails,
    blogs: state.blogsReducer.blogs
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getFormDetails: getFormDetails,
    getBlogFormDetails: getBlogFormDetails,
    getBlogsViewProps: getBlogsViewProps
  }, dispatch)
}

AppContainer.propTypes = {
  loginFormDetails: PropTypes.array.isRequired,
  login: PropTypes.object.isRequired,
  blogFormDetails: PropTypes.array.isRequired,
  blog: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
