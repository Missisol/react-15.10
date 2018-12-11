import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChatLogin from "components/ChatLogin";


export default class ChatLoginContainer extends Component {

  render() {
    return (
      <Fragment>
        <ChatLogin />
      </Fragment>
    )
  }
}


