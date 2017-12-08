// import module
import React from 'react';
import PropTypes from 'prop-types';

// import component
import ExtraLargeText from '../component/ExtraLargeText';
import LargeText from '../component/LargeText';
import MediumText from '../component/MediumText';

// import style
import './style.scss';

// TODO: dynamically append class name 'isActive' to element

function ChatDirectoryItem({ companyName, teamChatMembers, messengers }) {
  const teamChatMembersMap = teamChatMembers.map((member, index) => {
    return (
      <a href="#" key={index.toString()}>
        <MediumText content={member} key={index.toString()} />
      </a>
    );
  });
  const messengersMap = messengers.map((messenger, index) => {
    return (
      <a href="#" key={index.toString()}>
        <MediumText content={messenger} key={index.toString()} />
      </a>
    );
  });
  return (
    <section className="chat-directory">
      <div className="company-name">
        <ExtraLargeText content={companyName} />
      </div>
      <div className="organization-name">
        <LargeText content="Team Chat Rooms:" />
        {teamChatMembersMap}
      </div>
      <div className="messenger-name">
        <LargeText content="Direct Message:" />
        {messengersMap}
      </div>
    </section>
  );
}

ChatDirectoryItem.defaultProps = {
  teamChatMembers: [],
  messengers: [],
};

ChatDirectoryItem.propTypes = {
  companyName: PropTypes.string.isRequired,
  teamChatMembers: PropTypes.arrayOf(PropTypes.string.isRequired),
  messengers: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ChatDirectoryItem;
