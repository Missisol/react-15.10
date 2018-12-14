import HomePage from 'components/HomePage/index';
import BlogContainer from 'containers/BlogContainer';
import CommentsContainer from 'containers/CommentsContainer';
import UsersContainer from 'containers/UsersContainer';
import CommentContainer from 'containers/CommentContainer';
import UserPostCommentsContainer from 'containers/UserPostCommentsContainer';
import MessagesContainer from 'containers/MessagesContainer';
import ChatLoginContainer from "containers/ChatLoginContainer";

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/blog',
    exact: true,
    component: BlogContainer,
  },
  {
    path: '/comments',
    exact: true,
    component: CommentsContainer,
  },
  {
    path: '/users',
    exact: true,
    component: UsersContainer,
  },
  {
    path: '/users/:id',
    exact: true,
    component: CommentContainer,
  },
  {
    path: '/users/:postId/:userId',
    exact: true,
    component: UserPostCommentsContainer,
  },
  {
    path: '/messages/:userChatId',
    exact: true,
    component: MessagesContainer,
  },
  {
    path: '/user',
    exact: true,
    component: ChatLoginContainer,
  },
];