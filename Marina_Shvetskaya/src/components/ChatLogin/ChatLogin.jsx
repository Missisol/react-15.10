import './ChatLogin.css';

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class ChatLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSend = (e) => {
    alert(this.state.value);
    this.setState({username: ''});
    event.preventDefault();
  };

  render() {
    const {username, password} = this.state;

    return (
      <form action="user" method="POST">
        <div className="form-group">
          <label htmlFor="nickname">Enter your nickname</label>
          <input onChange={this.handleChange} className="form-control" id="nickname" type="text" name="username"
                 value={username}/>
        </div>
        <div className="form-group">
          <label htmlFor="pass">Enter your password</label>
          <input onChange={this.handleChange} className="form-control" id="pass" type="password" name="password"
                 value={password}/>
        </div>
        <button onSubmit={this.handleSend} type="submit" className="btn btn-primary">Send</button>
      </form>
    )
  }
}