// React-Redux Config
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// Config
import { getFormDetails } from '../actions/formActions'
// Components
import Form from './Form'


class AppContainer extends React.Component {
  componentWillMount() {
    this.props.getFormDetails()
  }
  render() {
    return (
      <div>
        <Form formFieldsDetails={this.props.formDetails} url={this.props.url}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    url: state.formReducer.url,
    formDetails: state.formReducer.formFieldsDetails
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getFormDetails: getFormDetails
  }, dispatch)
}

AppContainer.propTypes = {
  formDetails: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
