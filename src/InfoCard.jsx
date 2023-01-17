import React from "react";
import "./InfoCard.css"
const InfoCard = ({ userinfo }) => {
  return (
    
      <div className="card" style={{ width: "18" + "rem" }}>
        <img
          className="card-img-top"
          src={userinfo.picture.medium}
          alt={userinfo.name.first}
        />
        <div className="card-body">
          <h5 className="card-title">Users Information</h5>
          <p className="card-text">{userinfo.name.first}</p>
          <p className="card-text">{userinfo.name.last}</p>
        </div>
      </div>
    
  );
};

export default InfoCard;
