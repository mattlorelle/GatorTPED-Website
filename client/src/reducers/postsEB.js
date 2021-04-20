import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (postsEB = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...postsEB, action.payload];
    case UPDATE:
      return postsEB.map((postEB) => (postEB._id === action.payload._id ? action.payload : postEB));
    case DELETE:
      return postsEB.filter((postEB) => postEB._id !== action.payload);
    default:
      return postsEB;
  }
};

