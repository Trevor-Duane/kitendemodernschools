import React from "react";
import "./NewzGrid.css";
import { Link } from "react-router-dom";

const NewzGrid = ({ id, title, image, subtitle, author, date }) => {
  return (
    <div className="newz-card">
      <img src={image} alt={title} className="newz-image" />
      <div className="newz-content">
        <h2 className="newz-title">{title}</h2>
        <p className="newz-subtitle">{subtitle}</p>
        <p className="newz-meta">
          <span>{date}</span> • <span>{author}</span>
        </p>
      </div>
      <div className="newz-card-button">
        <Link to={`/events/${id}`} className="btn newz-button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewzGrid;
