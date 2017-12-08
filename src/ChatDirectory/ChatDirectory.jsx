import { connect } from 'react-redux';

// action
import { getInformation } from './ChatDirectoryAction';

// component
import ChatDirectoryItem from './ChatDirectoryItem';

const mapStateToProps = (state) => {
  return state.chatDirectoryReducer;
};

const mapDispatchToProps = (dispatch) => {
  return dispatch(getInformation());
};

const ChatDirectory = connect(mapStateToProps, mapDispatchToProps)(ChatDirectoryItem);

export default ChatDirectory;
