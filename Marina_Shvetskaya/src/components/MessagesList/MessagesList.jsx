import './MessagesList.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class MessagesList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="MessagesList">
        <ul>
          {messages.map((message) => <li key={message._id}>{message.author}({message.timestamp}): {message.text}</li>)}
        </ul>
      </div>
    )
  }
}