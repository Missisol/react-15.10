import './ChatList.css';

import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";

import { load } from 'actions/chats';


class ChatList extends Component {
  componentDidMount() {
    const { loadChats } = this.props;

    loadChats();
  }

  render() {
    const { chats } = this.props;
    return (
      <div className="ChatList col-4">
        <h5>Active chats</h5>
        <ul>
          {chats.map((chat) => <li key={chat._id}>
            <Link to={`/messages/${chat._id}`}>
              {chat.username}
            </Link>
          </li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    chats: state.chats.entities,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadChats: () => dispatch(load()),
    // send: (user) => send(user),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);