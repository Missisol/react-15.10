import { handleActions } from 'redux-actions';
import { chatReceived, chatsLoadComplete, chatsLoadFailed } from 'actions/chats';

const initialState = {
  entities: [],
};

export default handleActions({
  [chatReceived]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat([action.payload]),
    };
  },
  [chatsLoadComplete]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat(action.payload),
    };
  },
  [chatsLoadFailed]: (state) => {
    return {
      ...state,
      entities: [],
    }
  }
}, initialState);