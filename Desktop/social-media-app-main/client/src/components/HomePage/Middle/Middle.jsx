import React from "react";
import "./Middle.css";
import ProfilePhotoMyself from "../images/profile-1.jpg";
import ProfilePhoto from "../images/profile-8.jpg";
import ProfilePhoto1 from "../images/profile-9.jpg";
import ProfilePhoto2 from "../images/profile-10.jpg";
import ProfilePhoto3 from "../images/profile-11.jpg";
import ProfilePhoto4 from "../images/profile-12.jpg";
import ProfilePhoto5 from "../images/profile-13.jpg";
import Feeds from "../Feeds/Feeds";

function Middle() {
  return (

    <div className="middle">
        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatum sit iusto omnis atque sequi deserunt ex necessitatibus, dolorum aperiam, neque asperiores fugit dolore minus laboriosam veritatis, et eum ducimus! */}
        <div className="stories">
          <div className="story">
            <div className="profile-photo">
              <img src={ProfilePhoto} alt="" />
            </div>
            <p className="name">Your Story</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src={ProfilePhoto1} alt="" />
            </div>
            <p className="name">Gago Mardaker</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src={ProfilePhoto2} alt="" />
            </div>
            <p className="name">Harust tgha 777</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src={ProfilePhoto3} alt="" />
            </div>
            <p className="name">Aram Karam</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src={ProfilePhoto4} alt="" />
            </div>
            <p className="name">Antaneli Tyom</p>
          </div>
          <div className="story">
            <div className="profile-photo">
              <img src={ProfilePhoto5} alt="" />
            </div>
            <p className="name">Cyber Saqo</p>
          </div>
        </div>
        <form className="create-post">
          <div className="profile-photo">
            <img src={ProfilePhotoMyself} alt="" />
          </div>
          <input
            type="text"
            placeholder="What's on Your Mind, Mike?"
            id="create-post"
          />
          <input type="submit" value="Post" className="btn btn-primary" />
        </form>

        <Feeds />
        <Feeds />
        <Feeds />
        <Feeds />
        <Feeds />

      </div>
    
  );
}

export default Middle;
