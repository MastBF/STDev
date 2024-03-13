import React from "react";
import "assets/styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { hideDeleteModal } from "store/Delete/actions";
import { deletePost } from "api/posts";
import { reqPosts } from "api/posts";

function Delete(props) {
  const dispatch = useDispatch();
  const isDeleteModalVisible = useSelector((state) => state.delete.showModal);
  const postId = useSelector((state) => state.delete.clickedComponentId);
  const onDelete = async () => {
    await deletePost(postId);
    dispatch(hideDeleteModal());
    console.log('done')
    await reqPosts()
    .then((json) => props.setData(json.data.results))
    .catch((e) => console.log(e));
    props.updateCurrentPageOnDelete()
  };
  const onCancle = () => {
    dispatch(hideDeleteModal());
  };

  return (
    <div className={isDeleteModalVisible ? "deleteCard" : "notActive"}>
      <h1>Are you sure you want to delete the post?</h1>
      <button className="Delete" onClick={onDelete}>
        Delete
      </button>
      <button className="Cancle" onClick={onCancle}>
        Cancle
      </button>
    </div>
  );
}

export default Delete;
