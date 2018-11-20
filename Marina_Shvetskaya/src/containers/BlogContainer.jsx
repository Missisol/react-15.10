import React, { Component, Fragment } from 'react';

import BlogList from 'components/BlogList';
import PropTypes from 'prop-types';

export default class BlogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
      page: 1,
    }
  }

  loadPosts = () => {
    const { page } = this.state;
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    .then((response) => response.json())
    .then((posts) => {
      this.setState({
        loading: false,
        page: page + 1,
        posts: this.state.posts.concat(posts),
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
    const { loadig, posts } = this.state;

    return (
      <Fragment>
        <BlogList posts={posts} />
        {loadig ? 'loading' : ''}
        <button className="btn btn-secondary float-right" onClick={this.handleClick}>
          More
        </button>
      </Fragment>
    )
  }
}