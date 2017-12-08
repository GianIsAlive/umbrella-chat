import { combineReducers } from 'redux';
import sideBarReducer from './SideBarMenu/sideBarMenuReducer';
import chatDirectoryReducer from './ChatDirectory/chatDirectoryReducer';
import chatBoxReducer from './ChatBox/chatBoxReducer';

const umbrellaApp = combineReducers({
  sideBarReducer,
  chatDirectoryReducer,
  chatBoxReducer,
});

export default umbrellaApp;
