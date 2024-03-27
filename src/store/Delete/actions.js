import {
  HIDE_DELETE_MODAL,
  SET_CLICKED_COMPONENT_ID,
  SHOW_DELETE_MODAL,
} from './constants';

export const showDeleteModal = () => ({
  type: SHOW_DELETE_MODAL,
});

export const hideDeleteModal = () => ({
  type: HIDE_DELETE_MODAL,
});

export const setClickedComponentId = (id) => ({
  type: SET_CLICKED_COMPONENT_ID,
  payload: id,
});
