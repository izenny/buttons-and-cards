import React from "react";
import "./Useradd.css";
import Likebutton from "../Like/Likebutton";
const Useradd = () => {
  return (
    <div>
      <div className="card">
        <div className="card-info">
          <div className="card-avatar">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="card-title">Steve Jobs</div>
          <div className="card-subtitle">CEO &amp; Co-Founder</div>
          <div>
            <Likebutton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Useradd;
