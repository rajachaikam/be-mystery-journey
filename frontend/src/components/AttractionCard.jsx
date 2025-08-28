import React from "react";
import "./AttractionCard.css";

export default function AttractionCard({ attraction }) {
  const imgPath = `/assets/images/${attraction.id}.jpg`; // Make sure images are named by ID
  return (
    <div className="attraction-card">
      <img src={imgPath} alt={attraction.name} />
      <div className="card-body">
        <h3>{attraction.name}</h3>
        <p>Duration: {attraction.duration_hours} hours</p>
        <p>
          Price: {attraction.price_min} - {attraction.price_max} USD
        </p>
        {attraction.ticket_url && (
          <a href={attraction.ticket_url} target="_blank">
            Book Now
          </a>
        )}
      </div>
    </div>
  );
}
