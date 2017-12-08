import React from 'react';
import PropTypes from 'prop-types';

// import style

import './style.scss';

function MediumText({ content, className }) {
  return (
    <p className={`medium-text ${className}`}>
      {content}
    </p>
  );
}

MediumText.defaultProps = {
  className: '',
};

MediumText.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MediumText;
