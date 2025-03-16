/**
 * @copyright 2025 Seif Eddine Mouihbi
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Common button
 */

const Button = ({
  classes = '',
  variant = 'filled',
  color = 'primary',
  children,
  ...rest
}) => {
  return (
    <button className={`btn ${classes} ${variant} ${color}`} {...rest}>
      {children}
      <div className="state-layer"></div>
    </button>
  );
};

Button.PropTypes = {
  classes: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
