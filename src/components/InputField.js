import React from 'react'

class InputField extends React.Component {
  onChange = (e) => {
    this.props.onChange(e)
  }
  render() {
    const props = this.props
    return (
      <div>
       <label>{props.label}</label>
        <input type={props.inputType} name={props.name} onChange={this.onChange} />
      </div>
    )
  }
}

export default InputField

//Add Proptypes