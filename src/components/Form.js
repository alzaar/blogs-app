import React, { Component } from 'react'
// ---TODO--- Should go in reddux actions ¬¬¬¬¬¬¬
import { encryptData, axiosInstance, updateToken } from '../config/axiosConfig'
import InputField from './InputField'
import PropTypes from 'prop-types'

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
    axiosInstance.post(this.props.url, params).then(res => encryptData(res.data.token))
    // ---TODO---
    // Update Error Display 
    .catch(err => updateToken())
  }

  onChange = (e) => {
    let textMap = this.state.textMap
    textMap.set(e.target.name, e.target.value)
    this.setState(textMap)
  }
  render() {
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

export default Form