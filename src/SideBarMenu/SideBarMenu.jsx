import { connect } from 'react-redux';

// component
import SideBarMenuItem from './SideBarMenuItem';

const mapStateToProps = (state) => {
  return state.sideBarReducer;
};

const SideBarMenu = connect(mapStateToProps)(SideBarMenuItem);

export default SideBarMenu;
