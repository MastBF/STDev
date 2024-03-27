import request from 'utils/request';
import { category } from './constants';

export const reqCategory = async () => {
  return request(category);
};
