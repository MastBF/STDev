import { SAVE_DATE } from './constants';

const initialState = {
  savedDate: null,
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATE:
      return {
        ...state,
        savedDate: action.payload,
      };
    default:
      return state;
  }
};

export default dateReducer;
