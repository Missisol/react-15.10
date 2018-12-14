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
    const reversed = messages.reverse();
    return (
      <div className="MessagesList">
        <ul>
          {reversed.map((message) => <li key={message._id}>{message.author}: {message.text} / ({message.timestamp})</li>)}
        </ul>
      </div>
    )
  }
}