import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ExtraLargeText({ content, className }) {
  return (
    <h1 className={`e-large-text ${className}`}>
      {content}
    </h1>
  );
}

ExtraLargeText.defaultProps = {
  className: '',
};

ExtraLargeText.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ExtraLargeText;
