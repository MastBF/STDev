import React, { useState } from "react";
import "assets/styles/index.css";
import request from "utils/request";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Delete from "./Delete";

function Card(props) {
  const onDelete = () => {
    props.setIsDelete(true);
  };
  return (
    <div className="images">
      <div className="card">
        <img src={props.image} alt="" />
        <div className="comment ">
          <p>
            <b>Name</b>
            <span className="tools">
              <button to={`edit/${props.id}`}>
                <MdModeEdit className="edit" />
              </button>
              <button onClick={onDelete}>
                <RiDeleteBin6Line className="delete" />
              </button>
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
        </div>
      </div>
    </div>
  );
}

export default Card;
