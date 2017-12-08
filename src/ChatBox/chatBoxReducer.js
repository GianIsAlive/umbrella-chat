const initialState = {
  currentTime: Date.now(),
  message: {
    messenger: '',
    content: '',
    time: '',
  },
  messages: [],
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_CURRENT_TIME':
      return {
        currentTime: action.currentTime,
      };
    case 'WRITE_MESSAGE':
      return {
        messages: state.messages,
        message: {
          messenger: action.message.messenger,
          content: action.message.content,
          time: action.message.time,
        },
      };
    case 'POST_MESSAGE':
      return {
        messages: [
          ...state.messages,
          action.message,
        ],
        message: {
          content: '',
        },
      };
    default:
      return state;
  }
};

export default handleAction;
