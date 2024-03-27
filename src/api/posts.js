import request from 'utils/request';
import { postCreate, postManipulate, posts } from './constants';

export const reqPosts = async (pageCount, offset = 0, signal) => {
  return request(posts(pageCount, offset), { signal });
};

export const createPost = async (data) => {
  return request.post(postCreate, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deletePost = async (id) => {
  return request.delete(postManipulate(id));
};

export const editPost = async (data, id) => {
  return request.put(postManipulate(id), data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const idPost = async (id) => {
  return request(postManipulate(id));
};
