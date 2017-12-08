import React from 'react';
import PropTypes from 'prop-types';

// style import

import './style.scss';

function LargeText({ content, className }) {
  return (
    <h2 className={`large-text ${className}`}>
      {content}
    </h2>
  );
}

LargeText.defaultProps = {
  className: '',
};

LargeText.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LargeText;
