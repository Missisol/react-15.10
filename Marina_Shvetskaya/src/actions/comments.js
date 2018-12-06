import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Loading started');
export const loadCompleted = createAction('[Comments] Loading completed');
export const loadFailed = createAction('[Comments] Loading failed');

export const load = () => (dispatch, getState) => {
  const state = getState();
  dispatch(loadStarted());
  fetch(`https://jsonplaceholder.typicode.com/comments?_page=${state.comments.page}&_limit=10`)
    .then((response) => response.json())
    .then((comments) => {
      dispatch(loadCompleted(comments));
    })
    .catch(() => { dispatch(loadFailed()) });
};