/**
 * @copyright 2025 Seif Eddine Mouihbi
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import React from 'react';
import PropTypes from 'prop-types';

function TextField({
  classes = '',
  helperText,
  label,
  name,
  placeholder = '',
  fieldClasses='',
  ...rest
}) {
  return (
    <div className={`text-field-wrapper ${classes}`}>
      <label htmlFor={name} className="label-text">
        {label}
      </label>
      <input
        className={`text-field ${fieldClasses}`}
        id={name}
        placeholder={placeholder}
        {...rest}
      />

      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  );
}

TextField.PropTypes = {
  classes: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  fieldClasses: PropTypes.string,
};

export default TextField;
