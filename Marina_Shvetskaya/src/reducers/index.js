import { combineReducers } from "redux";
import commentsReducer from './comments'
import topPostsReducer from './topPosts'
import messagesReducer from './messages';
import usersReducer from './users';
import chatsReducer from './chats';

export default combineReducers({
  comments: commentsReducer,
  posts: topPostsReducer,
  messages: messagesReducer,
  users: usersReducer,
  chats: chatsReducer,
})