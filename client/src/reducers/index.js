import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import postsEB from './postsEB';

export const reducers = combineReducers({ posts, auth, postsEB });