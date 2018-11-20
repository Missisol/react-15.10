import React, { Component, Fragment } from 'react';

import UsersList from 'components/UsersList';
import PropTypes from 'prop-types';

export default class UsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      users: [],
      page: 1,
    }
  }

  loadPosts = () => {
    const { page } = this.state;
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=6&_page=${page}`)
    .then((response) => response.json())
    .then((users) => {
      this.setState({
        loading: false,
        page: page + 1,
        users: this.state.users.concat(users),
      })
    })
    .catch(() => {this.setState({loading: false}); });
  }

  handleClick = () => {
    if(!this.state.loading) {
      this.loadPosts();
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { loading, users } = this.state;

    return (
      <Fragment>
        <UsersList users={users} />
        {loading ? 'loading' : ''}
        <button className="btn btn-secondary float-right" onClick={this.handleClick}>
          More
        </button>
      </Fragment>
    )
  }
}