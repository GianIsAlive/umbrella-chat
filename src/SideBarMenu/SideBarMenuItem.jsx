import React from 'react';
import PropTypes from 'prop-types';

// action
import {
  toggleHomeButton,
  toggleBotButton,
  toggleNotificationButton,
  toggleCalendarButton,
  toggleInviteButton,
} from './SideBarMenuAction';
import RoundButton from '../component/RoundButton';

// image
import HomeIcon from '../assets/home-icon.svg';
import BotIcon from '../assets/bot-icon.svg';
import NotificationIcon from '../assets/notification-icon.svg';
import CalendarIcon from '../assets/calendar-icon.svg';
import InviteIcon from '../assets/invite-icon.svg';

function SideBarItem({
  homeButtonState,
  botButtonState,
  notificationButtonState,
  calendarButtonState,
  inviteButtonState,
  dispatch,
}) {
  return (
    <menu className="sidebar-menu">
      <RoundButton
        buttonName="sb-home"
        buttonImg={`dist/${HomeIcon}`}
        buttonState={homeButtonState}
        onClick={() => {
          dispatch(toggleHomeButton('active'));
        }}
      />
      <RoundButton
        buttonName="sb-bot"
        buttonImg={`dist/${BotIcon}`}
        buttonState={botButtonState}
        onClick={() => {
          dispatch(toggleBotButton('active'));
        }}
      />
      <RoundButton
        buttonName="sb-notification"
        buttonImg={`dist/${NotificationIcon}`}
        buttonState={notificationButtonState}
        onClick={() => {
          dispatch(toggleNotificationButton('active'));
        }}
      />
      <RoundButton
        buttonName="sb-calendar"
        buttonImg={`dist/${CalendarIcon}`}
        buttonState={calendarButtonState}
        onClick={() => {
          dispatch(toggleCalendarButton('active'));
        }}
      />
      <RoundButton
        buttonName="sb-invite"
        buttonImg={`dist/${InviteIcon}`}
        buttonState={inviteButtonState}
        onClick={() => {
          dispatch(toggleInviteButton('active'));
        }}
      />
    </menu>
  );
}

SideBarItem.propTypes = {
  homeButtonState: PropTypes.string.isRequired,
  botButtonState: PropTypes.string.isRequired,
  notificationButtonState: PropTypes.string.isRequired,
  calendarButtonState: PropTypes.string.isRequired,
  inviteButtonState: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default SideBarItem;
