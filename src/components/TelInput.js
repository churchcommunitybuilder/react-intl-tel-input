import React, { Component, PropTypes } from 'react';

class TelInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    fieldName: PropTypes.string,
    fieldId: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleKeyPress: PropTypes.func,
    handleOnBlur: PropTypes.func,
  };

  render() {
    return (
      <input type="tel" autoComplete="off"
        className={this.props.className}
        disabled={this.props.disabled ? 'disabled' : false}
        readOnly={this.props.readonly ? 'readonly' : false}
        name={this.props.fieldName}
        id={this.props.fieldId}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.handleInputChange}
        onBlur={this.props.handleOnBlur}
        data-test="phone-number-input"
      />
    );
  }
}

export default TelInput;
