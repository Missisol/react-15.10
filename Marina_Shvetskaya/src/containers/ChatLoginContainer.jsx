import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import ChatLogin from "components/ChatLogin";


export default class ChatLoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      onChange: {
        username: '',
        password: '',
      },
      onSubmit: false,
    };
  }

  static propTypes = {
    onChange: PropTypes.objectOf(
      PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string,
      })
    )
  };

  handleChange = (e) => {
    this.setState({
      onChange: {
        [event.target.name]: event.target.value,
      }
    });
  };

  handleSend = (e) => {
    this.setState({
      onSubmit: true,
    });
    event.preventDefault();
  };


  render() {
    return (
      <Fragment>
        <ChatLogin username={this.state.onChange.username} password={this.state.onChange.password}
                   onChange={() => this.handleChange}
                   onSubmit={() => this.handleSend}
        />
      </Fragment>
    )
  }
}


