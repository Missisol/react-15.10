import { handleActions } from 'redux-actions';
import { userReceived, userLoadComplete, userLoadFailed } from 'actions/users';

const initialState = {
  entities: [],
};

export default handleActions({
  [userReceived]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat([action.payload]),
    };
  },
  [userLoadComplete]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat([action.payload]),
    };
  },
  [userLoadFailed]: (state) => {
    return {
      ...state,
      entities: [],
    }
  }
}, initialState);