import { handleActions } from 'redux-actions';
import { loadStarted, loadCompleted, loadFailed } from "actions/topPosts";

const initialState = {
  entities: [],
  loading: false,
  quantity: 10,
};

export default handleActions({
  [loadStarted]: (state) => {
    return {
      ...state,
      loading: true
    };
  },
  [loadCompleted]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat(action.payload),
      loading: false,
      quantity: state.quantity,
    }
  },
  [loadFailed]: (state) => {
    return {
      ...state,
      loading: false,
    }
  },
}, initialState);