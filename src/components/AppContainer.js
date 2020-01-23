// React-Redux Config
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Route,
  Link
} from 'react-router-dom'
// Config
import { getFormDetails, getBlogFormDetails } from '../actions/formActions'
// Components
import Form from './Form'
import Navbar from './layout/Navbar'
import Home from './layout/Home'


class AppContainer extends React.Component {
  componentWillMount() {
    this.props.getFormDetails()
    this.props.getBlogFormDetails()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path={this.props.login.url}>
          <Form formFieldsDetails={this.props.loginFormDetails} type={this.props.login.type}/>
        </Route>
        <Route exact path={this.props.blog.url}>
          <Form formFieldsDetails={this.props.blogFormDetails} type={this.props.blog.type} />
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
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getFormDetails: getFormDetails,
    getBlogFormDetails: getBlogFormDetails
  }, dispatch)
}

AppContainer.propTypes = {
  loginFormDetails: PropTypes.array.isRequired,
  login: PropTypes.object.isRequired,
  blogFormDetails: PropTypes.array.isRequired,
  blog: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
