// React-Redux Config
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Route,
} from 'react-router-dom'
// Config -- Actions
import { getFormDetails, getBlogFormDetails, getRegisterFormDetails } from '../actions/formActions'
import { getBlogsViewProps } from '../actions/blogsActions'
import { authtenticateUser } from '../actions/userActions'
// Components
import Form from './core/Form'
import Navbar from './layout/Navbar'
import HomeDashboard from './layout/HomeDashboard'
import Blogs from './core/Blogs'
import EditBlog from './core/EditBlog'
import CustomAxios from '../config/axiosConfig';

const axios = new CustomAxios()

class AppContainer extends React.Component {
  async componentWillMount() {
    this.props.getFormDetails()
    this.props.getBlogFormDetails()
    // if ((await axios.sessionValid())) {
      this.props.getBlogsViewProps()
    // }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={HomeDashboard} />
        <Route exact path={this.props.login.url}>
          <Form formFieldsDetails={this.props.loginFormDetails} type={this.props.login.type} history={this.props.history}/>
        </Route>
        <Route exact path={this.props.blog.url}>
          <Form formFieldsDetails={this.props.blogFormDetails} type={'POST_BLOG'}  history={this.props.history}/>
        </Route>
        <Route exact path={this.props.blogs.url} component={Blogs} />
        <Route exact path={'/edit'} component={EditBlog} />
        <Route exact path={'/register/'}>
          <Form formFieldsDetails={this.props.blogFormDetails} type={'POST_BLOG'}  history={this.props.history}/>
        </Route>
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
    blogs: state.blogsReducer.blogs,
    authtenticated: state.userReducer.authtenticated,
    register: state.formReducer.register
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getFormDetails: getFormDetails,
    getBlogFormDetails: getBlogFormDetails,
    getBlogsViewProps: getBlogsViewProps,
    authtenticateUser: authtenticateUser,
    registerFormDetails: getRegisterFormDetails
  }, dispatch)
}

AppContainer.propTypes = {
  loginFormDetails: PropTypes.array.isRequired,
  login: PropTypes.object.isRequired,
  blogFormDetails: PropTypes.array.isRequired,
  blog: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
