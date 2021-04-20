import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPostsEB = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPostsEB();

    console.log(data);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPostEB = (postEB) => async (dispatch) => {
  try {
    const { data } = await api.createPostEB(postEB);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePostEB = (id, postEB) => async (dispatch) => {
  try {
    const { data } = await api.updatePostEB(id, postEB);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePostEB = (id) => async (dispatch) => {
  try {
    await api.deletePostEB(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};