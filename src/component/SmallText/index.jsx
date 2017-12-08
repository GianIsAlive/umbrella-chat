import React from 'react';
import PropTypes from 'prop-types';

// import style

import './style.scss';

function SmallText({ content }) {
  return (
    <p className="small-text">
      {content}
    </p>
  );
}

SmallText.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SmallText;
