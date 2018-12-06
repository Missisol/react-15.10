import {createAction} from 'redux-actions';

export const loadStarted = createAction('[TopPosts] Loading started');
export const loadCompleted = createAction('[TopPosts] Loading completed');
export const loadFailed = createAction('[TopPosts] Loading failed');

export const loadTopPostsAction = () => (dispatch, getState) => {
  const state = getState();
  dispatch(loadStarted());
  fetch(`https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=${state.posts.quantity}`)
    .then((response) => response.json())
    .then((posts) => {
      dispatch(loadCompleted(posts));
    })
    .catch(() => {
      dispatch(loadFailed())
    });
};