import {createAction} from 'redux-actions';
import io from 'socket.io-client';

export const userReceived = createAction('[User] Received');
export const userLoadComplete = createAction('[User] Load complete');
export const userLoadFailed = createAction('[User] Loading failed');

const socket = io('http://localhost:3000');

// когда на клиентской стороне вызываем метод emit и передаем туда название (user) и параметры -> вызываем на серверной
// стороне это событие (user)
export const send = (user) => {
  socket.emit('user', user);
};

// метод, который слушает приходящие данные авторизации и бросает action userReceived
export const listen = () => (dispatch) => {
  socket.on('user', (user) => {
    console.log(user);
    dispatch(userReceived(user));
  });
};

// метод для загрузки авторизованного пользователя
export const load = () => (dispatch) => {
  fetch(`http://localhost:3000/chats/${socket.id}`)
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
      dispatch(userLoadComplete(user));
    })
    .catch(() => {
      dispatch(userLoadFailed())
    });
};

