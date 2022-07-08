import React from "react";

export default function Journal(props) {
  return (
    <div className="journal">
      <div className="image--crop">
        <img src={props.item.img} alt="" />
      </div>

      <div className="information">
        <div className="location">
          {
            <img
              src={require("../images/location-icon.png")}
              className="location--icon"
              alt=""
            />
          }
          <p className="location--country">
            {props.item.country}
            <a href={props.item.link}>
              <span>view on Google Maps</span>
            </a>
          </p>
        </div>

        <p className="title">{props.item.title}</p>

        <p className="date">{props.item.date}</p>

        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
