import React from 'react';
import 'assets/styles/index.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Delete from './Delete';
import { useDispatch } from 'react-redux';
import { showDeleteModal } from 'store/Delete/actions';
import { setClickedComponentId } from 'store/Delete/actions';
import PropTypes from 'prop-types';
function Card({
  id,
  image,
  description,
  category,
  setData,
  updateCurrentPageOnDelete,
  name,
}) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(showDeleteModal());
    dispatch(setClickedComponentId(id));
  };
  return (
    <div className="images">
      <div className="card">
        <img src={image} alt="" />
        <div className="comment">
          <p>
            <b>Name</b>
            <span className="tools">
              <Link to={`edit/${id}`}>
                <MdModeEdit className="edit" />
              </Link>
              <a onClick={onDelete}>
                <RiDeleteBin6Line className="delete" />
              </a>
            </span>
            <div className="cardInfo">
              {name}
              <b>Description</b>
              {description}
              <b>Category</b>
              {category}
            </div>
          </p>
          <Delete
            id={id}
            setData={setData}
            updateCurrentPageOnDelete={updateCurrentPageOnDelete}
          />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  updateCurrentPageOnDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
