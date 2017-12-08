import React from 'react';
import PropTypes from 'prop-types';

// import style
import './style.scss';

function RoundButton({ buttonName, buttonImg, buttonState, onClick, className }) {
  return (
    <button
      className={`round-button ${buttonName} ${buttonState} ${className}`}
      onClick={onClick}
    >
      <img src={buttonImg} alt={`${buttonName} button`} />
    </button>
  );
}

RoundButton.defaultProps = {
  className: '',
};

RoundButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonImg: PropTypes.string.isRequired,
  buttonState: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default RoundButton;
