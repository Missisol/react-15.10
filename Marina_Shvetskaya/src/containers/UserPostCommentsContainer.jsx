import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import UserPostCommentsWrap from 'components/UserPostCommentsWrap';
import UserPostComments from 'components/UserPostComments';


// Контейнер с логикой рендеринга поста пользователя с комментариями
export default class UserPostCommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {},
      userPosts: {},
      postComments: [],
      userId: props.match.params.userId,
      postId: props.match.params.postId,
    }
  }

  /**
   * Загружает данные для поста пользователя с комментариями
   */
  loadData() {
    const { userId, postId } = this.state;

    this.setState({
      loading: true,
    });

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          loading: false,
          user,
        });
      })
      .catch(() => {
        this.setState({loading: false});
      });

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((userPosts) => {
        this.setState({
          loading: false,
          userPosts,
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((postComments) => {
        this.setState({
          loading: false,
          postComments: this.state.postComments.concat(postComments),
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  /**
   * Вызывает методы для получения из хранилища информации
   */
  componentDidMount() {
    this.loadData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.userId = nextProps.match.params.userId;
      this.postId = nextProps.match.params.postId;
      this.setState({
        postComments: []
      });
      this.loadData();
    }
  }

  render() {
    const {loading, user, userPosts, postComments} = this.state;

    return (
      <Fragment>
        <UserPostCommentsWrap user={user} userPosts={userPosts}/>
        <UserPostComments postComments={postComments}/>
        {loading ? 'loading' : ''}
      </Fragment>
    )
  }
}