import './ChatLogin.css';

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class ChatLogin extends Component {
  render() {
    const {handleChange, handleSend} = this.props;
    console.log(this.props);

    return (
      <form action="user" method="POST">
        <div className="form-group">
          <label htmlFor="nickname">Enter your nickname</label>
          <input onChange={handleChange} className="form-control" id="nickname" type="text" name="username"
                value={this.props.onChange.username} />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Enter your password</label>
          <input onChange={handleChange} className="form-control" id="pass" type="password" name="password"
                 value={this.props.onChange.password} />
        </div>
        <button onSubmit={handleSend} type="submit" className="btn btn-primary">Send</button>
      </form>
    )
  }
}