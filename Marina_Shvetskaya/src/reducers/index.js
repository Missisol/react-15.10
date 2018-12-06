import { combineReducers } from "redux";
import commentsReducer from './comments'
import topPostsReducer from './topPosts'
import messagesReducer from './messages';

export default combineReducers({
  comments: commentsReducer,
  posts: topPostsReducer,
  messages: messagesReducer,
})