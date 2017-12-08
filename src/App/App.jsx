import React from 'react';

// component
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import ChatDirectory from '../ChatDirectory/ChatDirectory';
import ChatBox from '../ChatBox/ChatBox';

// style
import './style.scss';

function App() {
  return (
    <div className="app-container">
      <section className="first-column">
        <SideBarMenu />
      </section>
      <section className="second-column">
        <ChatDirectory />
      </section>
      <section className="third-column">
        <ChatBox />
      </section>
    </div>
  );
}

export default App;
