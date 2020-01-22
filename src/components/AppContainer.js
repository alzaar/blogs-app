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
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {/* <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/login'>
          <Form formFieldsDetails={this.props.formDetails} url={this.props.url}/>
        </Route>
        <Route exact path='/blog'>
          <Form formFieldsDetails={this.props.blogsFormDetails} url={this.props.url}/>
        </Route> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loginUrl: state.formReducer.loginUrl,
    formDetails: state.formReducer.formFieldsDetails,
    blogUrl: state.formReducer.blogUrl,
    blogFormDetails: state.formReducer.blogFormDetails,
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getFormDetails: getFormDetails,
    getBlogFormDetails: getBlogFormDetails
  }, dispatch)
}

// AppContainer.propTypes = {
//   formDetails: PropTypes.array.isRequired,
//   url: PropTypes.string.isRequired,
// }

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
