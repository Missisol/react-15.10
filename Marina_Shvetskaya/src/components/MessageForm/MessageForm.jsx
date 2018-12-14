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
      <Fragment>
        <div className="form-group">
          <input onChange={this.handleChange} className="form-control" type="text" name="author" value={author} placeholder="Enter your nickname" />
        </div>
        <div className="form-group">
          <textarea onChange={this.handleChange} className="form-control" name="text" value={text} />
        </div>
        <button onClick={this.handleSend} className="btn btn-primary mb-4">Send</button>
      </Fragment>
    )
  }
}