// React-Redux Config
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Config
import CustomAxios from '../config/axiosConfig'
import { UPDATE_TOKEN } from '../config/constants'

//Components
import InputField from './InputField'

// Axios Instance
const axios = new CustomAxios()

class Form extends Component {
  constructor(props) {
    super(props) 
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
    axios.post(params)
    // Refactor
    // let hour = new Date().getHours()
    // axios.encryptData(TIMESTAMP, hour)
  }

  onChange = (e) => {
    let textMap = this.state.textMap
    textMap.set(e.target.name, e.target.value)
    this.setState(textMap)
  }

  // componentWillMount() {
  //   let isAuth = axios.isValidTimeStamp()
  //   console.log(isAuth)
  // }

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

// Form.propTypes = {
//   formFieldsDetails: PropTypes.array.isRequired,
//   url: PropTypes.string.isRequired
// }


export default Form