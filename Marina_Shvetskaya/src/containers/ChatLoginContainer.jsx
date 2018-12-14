import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import ChatLogin from 'components/ChatLogin';
import { send, listen, load } from 'actions/users';

class ChatLoginContainer extends Component {
  componentDidMount() {
    const { listenUsers, loadUser } = this.props;

    listenUsers();
    loadUser();
  }

  render() {
    const { send, user } = this.props;

    return (
      <Fragment>
        <ChatLogin send={send} user={user}/>
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    users: state.users.entities,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    listenUsers: () => dispatch(listen()),
    loadUser: () => dispatch(load()),
    send: (user) => send(user),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatLoginContainer);

