export const setAccessToken = (token) => {
  localStorage.setItem('jwtAccessToken', token);
};

export const getAccessToken = () => {
  return localStorage.getItem('jwtAccessToken');
};

export const setRefreshToken = (token) => {
  localStorage.setItem('jwtRefreshToken', token);
};

export const getRefreshToken = () => {
  return localStorage.getItem('jwtRefreshToken');
};
export const clearStorage = () => {
  localStorage.removeItem('jwtAccessToken');
  localStorage.removeItem('jwtRefreshToken');
};
