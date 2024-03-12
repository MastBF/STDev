export const SHOW_DELETE_MODAL = "SHOW_DELETE_MODAL";
export const HIDE_DELETE_MODAL = "HIDE_DELETE_MODAL";

export const showDeleteModal = () => ({
  type: SHOW_DELETE_MODAL,
});

export const hideDeleteModal = () => ({
  type: HIDE_DELETE_MODAL,
});

export const setClickedComponentId = (id) => ({
  type: 'SET_CLICKED_COMPONENT_ID',
  payload: id,
});