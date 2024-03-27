import request from 'utils/request';
import { signInPath, signUpPath, userMe } from './constants';
export const reqSignUp = async (data) => {
  return request.post(signUpPath, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const reqSignIn = (data) => {
  return request.post(signInPath, data);
};

export const reqGetMe = async () => {
  try {
    return await request(userMe);
  } catch (err) {
    console.log(err);
  }
};
