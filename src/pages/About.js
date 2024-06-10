import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
              I am Teghpreet Singh Mago, an aspiring Software Engineer and Product Manager with a strong technical background and a passion for leveraging technology to drive innovation and solve complex problems. Currently, I am pursuing a Bachelor of Science in Computer Science with a specialisation in Intelligence (AI) and People (HCI) at the Georgia Institute of Technology.
            </div>
          </div>
        </div>
      </div>
    );
  }
}