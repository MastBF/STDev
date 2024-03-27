import { SUCCESS_MESSAGE } from './constants';

export const setShowSuccess = (show) => ({
  type: SUCCESS_MESSAGE,
  payload: show,
});
