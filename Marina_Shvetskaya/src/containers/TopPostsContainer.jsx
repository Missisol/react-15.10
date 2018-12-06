import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import TopPosts from 'components/TopPosts';
import PropTypes from 'prop-types';
import { loadTopPostsAction } from "actions/topPosts";

// Контейнер с логикой рендеринга блока с последними постами
class TopPostsContainer extends Component {

  /**
   * Загружает комментарий по его id
   */
  componentDidMount() {
    const { loadTopPosts } = this.props;

    loadTopPosts();
  }

  render() {
    const {loading, posts} = this.props;

    return (
      <Fragment>
        <TopPosts posts={posts} />
        {loading ? 'loading' : ''}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    posts: state.posts.entities,
    loading: state.posts.loading,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    loadTopPosts: () => dispatch(loadTopPostsAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPostsContainer);
