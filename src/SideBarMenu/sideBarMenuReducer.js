const initialState = {
  homeButtonState: 'active',
  botButtonState: '',
  notificationButtonState: '',
  calendarButtonState: '',
  inviteButtonState: '',
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_HOME_BUTTON':
      return Object.assign({
        homeButtonState: action.homeButtonState,
      }, {
        botButtonState: '',
        notificationButtonState: '',
        calendarButtonState: '',
        inviteButtonState: '',
      });
    case 'TOGGLE_BOT_BUTTON':
      return Object.assign({
        botButtonState: action.botButtonState,
      }, {
        homeButtonState: '',
        notificationButtonState: '',
        calendarButtonState: '',
        inviteButtonState: '',
      });
    case 'TOGGLE_NOTIFICATION_BUTTON':
      return Object.assign({
        notificationButtonState: action.notificationButtonState,
      }, {
        homeButtonState: '',
        botButtonState: '',
        calendarButtonState: '',
        inviteButtonState: '',
      });
    case 'TOGGLE_CALENDAR_BUTTON':
      return Object.assign({
        calendarButtonState: action.calendarButtonState,
      }, {
        homeButtonState: '',
        botButtonState: '',
        notificationButtonState: '',
        inviteButtonState: '',
      });
    case 'TOGGLE_INVITE_BUTTON':
      return Object.assign({
        inviteButtonState: action.inviteButtonState,
      }, {
        homeButtonState: '',
        botButtonState: '',
        notificationButtonState: '',
        calendarButtonState: '',
      });
    default:
      return state;
  }
};

export default handleAction;
