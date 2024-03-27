import { SUCCESS_MESSAGE } from './constants';

const initialState = {
  showSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      return {
        ...state,
        showSuccess: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
