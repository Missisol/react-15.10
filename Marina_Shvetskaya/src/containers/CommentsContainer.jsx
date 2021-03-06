import React, { Component, Fragment } from 'react';

import CommentsList from 'components/CommentsList';
import PropTypes from 'prop-types';

export default class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
      page: 1,
    }
  }

  loadComments = () => {
    const { page } = this.state;
    this.setState({
      loading: true,
      page: page + 1,
    });
    fetch(`https://jsonplaceholder.typicode.com/comments?_sort=id&_order=desc&_limit=10&_page=${page}`)
    .then((response) => response.json())
    .then((comments) => {
      this.setState({
        loading: false,
        comments: this.state.comments.concat(comments),
      })
    })
    .catch(() => {this.setState({loading: false}); });
  }

  handleScroll = () => {
    if(document.documentElement.clientHeight - window.scrollY <= 0 ) {
      if(!this.state.loading) {
        this.loadComments();
      }
    }
  }

  componentDidMount() {
    this.loadComments();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { loading, comments } = this.state;

    return (
      <Fragment>
        <CommentsList comments={comments}/>
        {loading ? 'loading' : ''}
      </Fragment>
    )
  }
}