export const toggleHomeButton = (buttonState) => {
  return {
    type: 'TOGGLE_HOME_BUTTON',
    homeButtonState: buttonState,
  };
};

export const toggleBotButton = (buttonState) => {
  return {
    type: 'TOGGLE_BOT_BUTTON',
    botButtonState: buttonState,
  };
};

export const toggleNotificationButton = (buttonState) => {
  return {
    type: 'TOGGLE_NOTIFICATION_BUTTON',
    notificationButtonState: buttonState,
  };
};

export const toggleCalendarButton = (buttonState) => {
  return {
    type: 'TOGGLE_CALENDAR_BUTTON',
    calendarButtonState: buttonState,
  };
};

export const toggleInviteButton = (buttonState) => {
  return {
    type: 'TOGGLE_INVITE_BUTTON',
    inviteButtonState: buttonState,
  };
};
