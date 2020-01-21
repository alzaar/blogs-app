import React, { Component } from 'react'
// ---TODO--- Should go in reddux actions ¬¬¬¬¬¬¬
import { CustomAxios } from '../config/axiosConfig'
import InputField from './InputField'
import PropTypes from 'prop-types'
import { getFormDetails } from '../actions/formActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { UPDATE_TOKEN } from '../config/constants'

const axios = new CustomAxios()

class Form extends Component {
  constructor(props) {
    super(props) 
    // ---TODO--- Change to redux state
    this.state = {
      textMap: new Map()
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    let map = this.state.textMap
    let params = {}
    let textFieldObj = Array.from(map).reduce((textFieldObj, [key, value]) => {
      textFieldObj[key] = value;
      return textFieldObj;
    }, {})
    Object.keys(textFieldObj).forEach(key => params[key] = textFieldObj[key])
    axios.post(this.props.url, params, UPDATE_TOKEN)
  }

  onChange = (e) => {
    let textMap = this.state.textMap
    textMap.set(e.target.name, e.target.value)
    this.setState(textMap)
  }
  // componentWillMount() {
  //   (this.props.getFormDetails())
  // }
  render() {
    // console.log(CustomAxios)
    return (
    <div>
      <form  onSubmit={this.onSubmit}>
        {this.props.formFieldsDetails.map(fieldData => (
          <InputField 
            key={fieldData.id} 
            label={fieldData.label} 
            inputType={fieldData.inputType} 
            name={fieldData.name} 
            onChange={this.onChange}
          />
        ))}
        <input type='submit' />
      </form>
    </div>
    )
  }
}

Form.propTypes = {
  formFieldsDetails: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getFormDetails: getFormDetails
  }, dispatch)
}

const mapStateToProps = state => ({
  testUrl: state.formReducer.url,
  testDetails: state.formReducer.formFieldsDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)