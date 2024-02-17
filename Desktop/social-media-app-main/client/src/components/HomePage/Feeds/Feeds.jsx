import React, { useState } from "react";
import "./Feeds.css";
import image from "../images/profile-13.jpg";
import likedPhoto2 from "../images/pic2.jpg";
import likes from "../images/profile-12.jpg";
import likes2 from "../images/profile-11.jpg";
import likes3 from "../images/profile-14.jpg";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

function Feeds() {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [idData, setIdData] = useState('')
  const name = "gven";
  const likeCollectionRef = collection(db, "gven");
  let obj = { username: name, userID: 34 };
  const addLike = async () => {
    setLiked(!liked);
    if (localStorage.isAuth) {
      if (!liked) {
        try {
        const data = await addDoc(likeCollectionRef, obj);
        setIdData(data.id)
          console.log("done");
        } catch (error) {
          console.error("Error adding document:", error);
        }
      } else { 
        try {
         
          let postDoc = doc(db, "gven", idData);
          await deleteDoc(postDoc);
          console.log("deleted");
        } catch (err) {
          console.error(err);
        }
      }
    }else {
      alert('You need to be LogIn')
    }
  };

  let onBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className="feeds">
      <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src={image} alt="" />
            </div>
            <div className="ingo">
              <h3>Lana Rose</h3>
              <small>Dubai, 15minutes Ago</small>
            </div>
            <span className="edit">
              <i>
                <HiOutlineDotsHorizontal />
              </i>
            </span>
          </div>
        </div>
        <div className="photo">
          <img src={likedPhoto2} alt="" />
        </div>
        <div className="action-buttons">
          <div className="interaction-buttons">
            <span>
              <i className={`heart ${liked ? "liked" : ""}`} >
                <FaRegHeart />
              </i>
            </span>
            <span>
              <i>
                <FaRegComment />
              </i>
            </span>
            <span>
              <i>
                <CiShare2 />
              </i>
            </span>
          </div>
          <div
            className={` ${bookmark ? "bookmarked" : ""}`}
            
          >
            <span>
              <i>
                <CiBookmark />
              </i>
            </span>
          </div>
        </div>
        <div className="liked-by">
          <span>
            <img src={likes} alt="" />
          </span>
          <span>
            <img src={likes2} alt="" />
          </span>
          <span>
            <img src={likes3} alt="" />
          </span>
          <p>
            Liked by <b>Ernest Achiever</b> and <b>2,324others</b>
          </p>
        </div>
        <div className="caption">
          <p>
            <b>Lana Rose</b> Lorem ipsum dolor sit quisqum eius.
            <span className="harsh-tag">#lifestyle</span>
          </p>
        </div>
        <div className="comments text-muted">View all 277 comments</div>
      </div>
    </div>
  );
}

export default Feeds;
