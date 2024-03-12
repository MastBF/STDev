import { SHOW_DELETE_MODAL, HIDE_DELETE_MODAL } from "./actions";

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
    case "SET_CLICKED_COMPONENT_ID":
      return {
        ...state,
        clickedComponentId: action.payload,
      };
    default:
      return state;
  }
};

export default deleteReducer;
