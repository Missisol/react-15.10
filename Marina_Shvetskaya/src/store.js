import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

function logger(store) {
  return function (next) {
    return function (action) {
      console.log('action', action);
      console.log('prev state', store.getState());

      let result = next(action);

      console.log('next state', store.getState());

      return result;
    }
  }
}

export default createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
  );


