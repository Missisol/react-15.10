
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class ChatLoginContainer extends Component {
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
    event.preventDefault();
  };

  render() {
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
        <button  type="submit" className="btn btn-primary">Send</button>
      </form>
    )
  }
}