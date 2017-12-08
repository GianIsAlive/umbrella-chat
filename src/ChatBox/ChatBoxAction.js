export const displayCurrentTime = () => {
  return {
    type: 'DISPLAY_CURRENT_TIME',
    currentTime: Date.now(),
  };
};

export const writeMessage = (messenger, content, time) => {
  return {
    type: 'WRITE_MESSAGE',
    message: {
      messenger,
      content,
      time,
    },
  };
};

export const postMessage = (message) => {
  return {
    type: 'POST_MESSAGE',
    message,
  };
};
