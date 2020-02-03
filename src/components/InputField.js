import React from 'react'
import PropTypes from 'prop-types'

class InputField extends React.Component {
  onChange = (e) => {
    this.props.onChange(e)
  }
  render() {
    const props = this.props
    return (
      <div className={props.formClass}>
       <label>{props.label}</label>
        <input className={props.inputClass} placeholder={props.inputPlaceholder} type={props.inputType} name={props.name} onChange={this.onChange}  />
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