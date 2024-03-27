import {
  HIDE_DELETE_MODAL,
  SET_CLICKED_COMPONENT_ID,
  SHOW_DELETE_MODAL,
} from './constants';

const initialState = {
  showModal: false,
  clickedComponentId: null,
};

const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case HIDE_DELETE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case SET_CLICKED_COMPONENT_ID:
      return {
        ...state,
        clickedComponentId: action.payload,
      };
    default:
      return state;
  }
};

export default deleteReducer;
