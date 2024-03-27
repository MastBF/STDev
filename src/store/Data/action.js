import { SAVE_DATE } from './constants';

export const saveDate = (date) => ({
  type: SAVE_DATE,
  payload: date,
});
