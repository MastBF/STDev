import request from 'utils/request';
import { userMe } from './constants';

export const reqUser = async () => {
  return request(userMe);
};
