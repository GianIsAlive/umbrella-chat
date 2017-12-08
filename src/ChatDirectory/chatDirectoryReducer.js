const initialState = {
  companyName: '',
  teamChatMembers: [],
  messengers: [],
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INFORMATION':
      return {
        companyName: action.companyName,
        teamChatMembers: action.teamChatMembers,
        messengers: action.messengers,
      };
    default:
      return state;
  }
};

export default handleAction;
