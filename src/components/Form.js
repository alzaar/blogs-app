import React, { Component } from 'react'
import { encryptData, axiosInstance, updateToken } from '../config/axiosConfig'
import InputField from './InputField'

class Form extends Component {
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
    .catch(err => updateToken())
  }

  onChange = (e) => {
    let textMap = this.state.textMap
    textMap.set(e.target.name, e.target.value)
    this.setState(textMap)
  }
  render() {
    // axiosInstance.get('blogs/').then(res => console.log(res))
    return (
    <div>
      <form  onSubmit={this.onSubmit}>
        <InputField label={'Username'} inputType={'text'} name={'username'} onChange={this.onChange}/>
        <InputField label={'Password'} inputType={'password'} name={'password'} onChange={this.onChange}/>
        <input type='submit' />
      </form>
    </div>
    )
  }
}

export default Form