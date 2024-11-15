import React from 'react';
import './EventGrid.css';

const EventGrid = ({title, image, subtitle, author, date}) => {
  return (
        <div className="event-card">
          <img src={image} alt={title} className="event-image" />
          <div className="event-content">
            <h2 className="event-title">{title}</h2>
            <p className="event-subtitle">{subtitle}</p>
            <p className="event-meta">
              <span>{date}</span> • <span>{author}</span>
            </p>
          </div>
        </div>
  );
};

export default EventGrid;
