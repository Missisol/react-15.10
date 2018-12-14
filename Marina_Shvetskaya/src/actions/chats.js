import { createAction } from 'redux-actions';
import io from 'socket.io-client';

export const chatReceived = createAction('[Chat] Received');
export const chatsLoadComplete = createAction('[Chat] Load complete');
export const chatsLoadFailed = createAction('[Chat] Loading failed');

const socket = io('http://localhost:3000');

export const listen = () => (dispatch) => {
  socket.on('chat', (chat) => {
    dispatch(chatReceived(chat));
  });
};

export const load = () => (dispatch) => {
  fetch(`http://localhost:3000/chats`)
    .then((response) => response.json())
    .then((chat) => {
      dispatch(chatsLoadComplete(chat));
    })
    .catch(() => { dispatch(chatsLoadFailed()) });
};