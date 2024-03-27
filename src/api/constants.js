export const signUpPath = '/user/sign-up/';
export const signInPath = '/user/sign-in/';
export const userMe = '/user/me/';
export const category = '/category/';
export const postCreate = '/post/crud/';
export const posts = (pageCount, offset) => {
  return `post/crud/?limit=${pageCount}&offset=${offset}`;
};
export const postManipulate = (id) => {
  return `/post/crud/${id}/`;
};
export const refresh = (BASE_URL) => {
  return `${BASE_URL}/user/refresh/`;
};
