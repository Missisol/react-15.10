import './ChatLogin.css';

import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ChatLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { send } = this.props;
    send(this.state);

    event.preventDefault();
  };

  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <form onSubmit={this.handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="nickname">Enter your nickname</label>
          <input onChange={this.handleChange} className="form-control" id="nickname" type="text" name="username"
                 value={this.state.username} />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Enter your password</label>
          <input onChange={this.handleChange} className="form-control" id="pass" type="password" name="password"
                 value={this.state.password} />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
        {/*<Link to={`/messages/${user.socketId}`} type="submit" className="btn btn-primary">Send</Link>*/}
      </form>
    )
  }
}