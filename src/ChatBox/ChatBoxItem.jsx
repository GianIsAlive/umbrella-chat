import React from 'react';
import PropTypes from 'prop-types';

// component
import LargeText from '../component/LargeText';
import MediumText from '../component/MediumText';
import SmallText from '../component/SmallText';
import ExtraSmallText from '../component/ExtraSmallText';

// action
import {
  writeMessage,
  postMessage,
} from './ChatBoxAction';
import InputField from '../component/InputField';

// style
import './style.scss';

// image
import MeredithGreySmall from '../assets/meredith_grey_small.png';
import ReneeCollier from '../assets/renee_collier.png';

function ChatBoxItem({ message, messages, dispatch }) {
  console.log('This is message length: ', messages.length);
  const dateObj = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const messagesMap = messages.map((msg, idx) => {
    return (
      <div className="message-container" key={idx.toString()}>
        <div className="messenger-info">
          <div className="messenger-profile-photo">
            <img src={`dist/${MeredithGreySmall}`} alt="meredith grey" />
          </div>
          <div className="messenger">
            <SmallText content={msg.messenger} />
          </div>
          <div className="message-time">
            <ExtraSmallText content={msg.time} />
          </div>
        </div>
        <div className="message-content">
          <MediumText content={msg.content} />
        </div>
      </div>
    );
  });
  return (
    <section className="chat-box">
      <div className="current-channel">
        <LargeText content="Grey Sloan Memorial, 26 Members" />
      </div>
      <div className="channel-messages-container">
        <div className="channel-messages">
          <MediumText
            className="post-date"
            content={dateObj.toLocaleDateString('en-US', options)}
          />
          <div className="message-container">
            <div className="messenger-info">
              <div className="messenger-profile-photo">
                <img src={`dist/${ReneeCollier}`} alt="meredith grey" />
              </div>
              <div className="messenger">
                <SmallText content="Renee Collier" />
              </div>
              <div className="message-time">
                <ExtraSmallText content={dateObj.toLocaleTimeString()} />
              </div>
            </div>
            <div className="message-content">
              <MediumText content="Hello Kim, I’m Renee, Dr. Grey’s AI assistant. Our conversation is monitored by Dr. Grey. How can I help you today?" />
            </div>
          </div>
          {messagesMap}
          {messages.length >= 1 &&
            <div className="message-container">
              <div className="messenger-info">
                <div className="messenger-profile-photo">
                  <img src={`dist/${ReneeCollier}`} alt="meredith grey" />
                </div>
                <div className="messenger">
                  <SmallText content="Renee Collier" />
                </div>
                <div className="message-time">
                  <ExtraSmallText content={dateObj.toLocaleTimeString()} />
                </div>
              </div>
              <div className="message-content">
                <MediumText content="Sore throat is usually caused by common cold virus. The best medicine is rest and laughter. But if you have persistent, severe fever, or swollen glands, you should make an appointment and see Dr. Grey as soon as possible." />
              </div>
            </div>
          }
        </div>
      </div>
      <div className="message-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postMessage(message));
          }}
        >
          <InputField
            placeholder="Type message"
            value={message.content}
            onChange={
              (e) => {
                const time = `${dateObj.toLocaleTimeString()}`;
                dispatch(writeMessage('Meredith Grey', e.target.value, time));
              }
            }
          />
        </form>
      </div>
    </section>
  );
}

ChatBoxItem.propTypes = {
  message: PropTypes.shape({
    messenger: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      messenger: PropTypes.string,
      content: PropTypes.string,
      time: PropTypes.string,
    })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ChatBoxItem;
