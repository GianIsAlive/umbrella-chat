import { connect } from 'react-redux';

// component
import ChatBoxItem from './ChatBoxItem';

const mapStateToProps = (state) => {
  console.log('This is the state: ', state.chatBoxReducer);
  return state.chatBoxReducer;
};

const ChatBox = connect(mapStateToProps)(ChatBoxItem);

export default ChatBox;
