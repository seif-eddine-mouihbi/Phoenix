/**
 * @copyright 2025 Seif Eddine Mouihbi
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

PageTitle.PropTypes = {
  title: PropTypes.string,
};

export default PageTitle;
