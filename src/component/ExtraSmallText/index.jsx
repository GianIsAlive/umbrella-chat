import React from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

function ExtraSmallText({ content, className }) {
  return (
    <p className={`e-small-text ${className}`}>
      {content}
    </p>
  );
}

ExtraSmallText.defaultProps = {
  className: '',
};

ExtraSmallText.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ExtraSmallText;
