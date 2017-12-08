export const getInformation = () => {
  return {
    type: 'GET_INFORMATION',
    companyName: 'Grey Sloan',
    teamChatMembers: [
      'Grey Sloan Memorial',
      'Westside Radiology',
      'Goodwill Dermatology',
    ],
    messengers: [
      'Meredith Grey (You)',
      'Izzie Stevens',
      'Anne Chambers (patient)',
    ],
  };
};

export const getChannelHistory = () => {
  return {
    isSelected: true,
  };
};
