import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPosts from 'components/UserPosts';

// Контейнер с логикой рендеринга блока постов для каждого пользователя
export default class UserPostsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      userPosts: [],
      userId: props.user.id,
    };
  }

  /**
   * Загружает посты пользователя из хранилища
   */
  componentDidMount() {
    const { userId } = this.state;

    this.setState({
      loading: true,
      userId,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((userPosts) => {
        this.setState({
          loading: false,
          userPosts: this.state.userPosts.concat(userPosts),
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };

    render() {
    const {loading, userPosts} = this.state;

    return (
      <ul>
        {userPosts.map((post) => <UserPosts key={post.id} post={post} userId={this.userId}/>)}
        {loading ? 'loading' : ''}
      </ul>
    )
  }
}