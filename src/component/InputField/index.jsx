import React from 'react';
import PropTypes from 'prop-types';

// import style

import './style.scss';

function InputField({ value, onChange, className, placeholder }) {
  return (
    <input
      className={`input-field ${className}`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

InputField.defaultProps = {
  className: '',
  placeholder: 'text',
  value: '',
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default InputField;
