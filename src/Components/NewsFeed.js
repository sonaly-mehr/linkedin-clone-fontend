import React from "react";
import user from "../images/user.jpg";
import { BsImage, BsYoutube, BsCalendar2Date } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import "./LinkedinFeed.css";
import UsersPosts from "./UsersPosts";

const NewsFeed = () => {
  return (
    <div className="newsfeed-section">
      <div className="post-section">
        <div className="post">
          <img src={user} alt="" />
          <input type="text" placeholder="Write a post" />
        </div>
        <div className="post-item-container">
          <div className="post-item">
            <BsImage className="post-item-icon" style={{color:'#378FE9'}}/>
            <h6>Photo</h6>
          </div>
          <div className="post-item">
            <BsYoutube className="post-item-icon" style={{color:'#5F9B41'}}/>
            <h6>Video</h6>
          </div>
          <div className="post-item">
            <BsCalendar2Date className="post-item-icon" style={{color:'#C37D16'}}/>
            <h6>Event</h6>
          </div>
          <div className="post-item">
            <MdArticle className="post-item-icon" style={{color:'#E16745'}}/>
            <h6>Write article</h6>
          </div>
        </div>
        <div className="post-border-bottom"></div>
      </div>
      <UsersPosts/>
    </div>
  );
};

export default NewsFeed;
