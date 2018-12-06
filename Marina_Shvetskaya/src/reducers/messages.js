import { handleActions } from 'redux-actions';
import { messageReceived, messagesLoadComplete } from 'actions/messages';

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
}, initialState);