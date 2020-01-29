// React-Redux Config
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Config
import CustomAxios from '../config/axiosConfig'
// import { UPDATE_TOKEN } from '../config/constants'
import { VIEW_BLOGS_URL } from '../actions/actionConstants'
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
    axios.post(params, '', this.props.type)
    // Refactor
    // let hour = new Date().getHours()
    // axios.encryptData(TIMESTAMP, hour)
    setTimeout(() => this.props.history.push(VIEW_BLOGS_URL), 1000)
  }

  async componentWillMount() {
    if (this.props.type !== 'LOGIN') {
      if (!await axios.sessionValid()) {
        this.props.history.push('/login')
      }

    }
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
    let fields = this.props.formFieldsDetails
    if (fields[0] !== undefined) {
    fields[0].value = this.props.selectedBlog !== undefined ? this.props.selectedBlog.title : ''
    fields[1].value = this.props.selectedBlog !== undefined ? this.props.selectedBlog.description : ''
    }
    return (
      <div>
        <form  onSubmit={this.onSubmit}>
        {fields.map(field => (
          <InputField
            label={field.label}
            key={field.id}
            name={field.name}
            inputType={field.inputType}
            onChange={this.onChange}
            value={field.value}
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