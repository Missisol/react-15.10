import { handleActions } from 'redux-actions';
import { messageReceived, messagesLoadComplete, messagesLoadFailed } from 'actions/messages';

const initialState = {
  entities: [],
};

export default handleActions({
  [messageReceived]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat([action.payload]),
    };
  },
  [messagesLoadComplete]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat(action.payload),
    };
  },
  [messagesLoadFailed]: (state) => {
    return {
      ...state,
      entities: [],
    }
  }
}, initialState);