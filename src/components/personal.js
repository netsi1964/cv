import React from "react";
import Avatar from "react-avatar";

const Personal = props => {
  const googleMapURL = `http://maps.google.com/?q=${props.street || ""},${props.zip || ""} ${props.city || ""},${props.country || ""}`;
  return (
    <div className="area person area--personal">
      <div className="person-base">
        <div className="person-name">
          {props.name}
        </div>
        <div className="person-address">
          {/*
           Could add more features like a Google static map
           <img src="https://maps.googleapis.com/maps/api/staticmap?zoom=10&&center=aarhusvej 12,8800 viborg,danmark&size=355x200&style=element:labels&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry" />
           */}
          <a href={googleMapURL} target="_blank" rel="noopener noreferrer">
            {props.street}
          </a>
        </div>
        <div className="person-city">
          <a href={googleMapURL} target="_blank" rel="noopener noreferrer">
            {props.zip}
            {props.city}
          </a>
        </div>
        <div className="person-country">
          <a href={googleMapURL} target="_blank" rel="noopener noreferrer">
            {props.country}
          </a>
        </div>
        <div className="person-phone">
          <a href={`tel:${props.phone.replace(/[ ]/g, "")}`} target="_blank" rel="noopener noreferrer">
            {props.phone}
          </a>
        </div>
        <div className="person-email">
          <a href={`mailto:${props.email}`}>
            {props.email}
          </a>
        </div>
      </div>
      <div className="person-avatar">
        <Avatar email={props.email} round={true}/>
      </div>
    </div>
  );
};

export default Personal;
