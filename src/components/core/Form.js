// React-Redux Config
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Config
import CustomAxios from '../../config/axiosConfig'
// import { UPDATE_TOKEN } from '../config/constants'
import { LOGIN_TYPE } from '../../actions/actionConstants'
//Components
import InputField from './InputField'

// Axios Instance
const axios = new CustomAxios()

//CSS


class Form extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      textMap: new Map()
    }
  }
  onSubmit = async (e) => {
    e.preventDefault()
    let map = this.state.textMap
    let params = {}
    let textFieldObj = Array.from(map).reduce((textFieldObj, [key, value]) => {
      textFieldObj[key] = value;
      return textFieldObj;
    }, {})
    Object.keys(textFieldObj).forEach(key => params[key] = textFieldObj[key])
    let res = ( await axios.post(params, '', this.props.type)) 
    if (this.props.type === LOGIN_TYPE && res.status === 200) {
      console.log(res)
      // this.props.authenticateUser(res)
    }
  }

  async componentWillMount() {
    // if (this.props.type !== 'LOGIN') {
    //   if (!await axios.sessionValid()) {
    //     this.props.history.push('/login')
    //   }

    // }
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
      <div className='form_container'>
        <label  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '25%' }}>Login Form</label>
        <form  onSubmit={this.onSubmit}>
        {fields.map(field => (
          <InputField
            label={field.label}
            key={field.id}
            name={field.name}
            inputType={field.inputType}
            onChange={this.onChange}
            value={field.value}
            inputClass='form-control'
            inputPlaceholder={`Your ${field.label}`}
            formClass='form-group'
          />
        ))}
          <input type='submit' className='btn btn-primary' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%' }}/>
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