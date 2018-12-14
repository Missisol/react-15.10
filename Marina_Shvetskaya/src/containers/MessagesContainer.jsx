import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import MessagesList from 'components/MessagesList';
import MessageForm from 'components/MessageForm';
import { load, send, listen } from 'actions/messages';
import ChatList from "components/ChatList";

class MessagesContainer extends Component {
  componentDidMount() {
    const { loadMessages, listenMessages } = this.props;

    loadMessages();
    listenMessages();
  }

  render() {
    const { messages, send } = this.props;

    return (
      <Fragment>
        <div className="row">
          <ChatList />
          <div className="col">
            <MessageForm send={send} />
            <MessagesList messages={messages} />
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    messages: state.messages.entities,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadMessages: () => dispatch(load()),
    listenMessages: () => dispatch(listen()),
    send: (message) => send(message),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);