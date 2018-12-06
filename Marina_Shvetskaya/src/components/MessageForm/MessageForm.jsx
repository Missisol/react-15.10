import './MessageForm.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSend = (e) => {
    const { send } = this.props;

    send(this.state);

    this.setState({ text: '' });
  };

  render() {
    const { author, text } = this.state;
    return (
      <div className="MessageForm">
        <input onChange={this.handleChange} type="text" name="author" value={author} /><br/>
        <textarea onChange={this.handleChange} name="text" value={text}></textarea><br/>
        <button onClick={this.handleSend}>Send</button>
      </div>
    )
  }
}