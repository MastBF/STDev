import React, { useState } from "react";
import "assets/styles/index.css";
import request from "utils/request";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Delete from "./Delete";
import { useDispatch, useSelector } from "react-redux";
import { showDeleteModal, hideDeleteModal } from "store/Delete/actions";
import { setClickedComponentId } from 'store/Delete/actions';

function Card(props) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(showDeleteModal());
    dispatch(setClickedComponentId(props.id));
  };
  return (
    <div className="images">
      <div className="card">
        <img src={props.image} alt="" />
        <div className="comment ">
          <p>
            <b>Name</b>
            <span className="tools">
              <Link to={`edit/${props.id}`}>
                <MdModeEdit className="edit" />
              </Link>
              <a onClick={onDelete}>
                <RiDeleteBin6Line className="delete" />
              </a>
            </span>
            <br />
            {props.name} <br />
            <br />
            <b>Description</b>
            <br />
            {props.description}
            <br />
            <br />
            <b>Category</b>
            <br />
            {props.category}
          </p>
          <Delete id ={props.id} setData={props.setData} updateCurrentPageOnDelete={props.updateCurrentPageOnDelete}/>
        </div>
      </div>
    </div>
  );
}

export default Card;
