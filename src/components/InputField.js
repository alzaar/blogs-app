import React from 'react'
import PropTypes from 'prop-types'

class InputField extends React.Component {
  onChange = (e) => {
    this.props.onChange(e)
  }
  render() {
    const props = this.props
    console.log(props)
    return (
      <div>
       <label>{props.label}</label>
        <input type={props.inputType} name={props.name} onChange={this.onChange}  />
      </div>
    )
  }
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputField

//Add Proptypes - TODO