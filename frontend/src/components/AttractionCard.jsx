import React from "react";
import "./AttractionCard.css"; // optional, extra styles if needed

function AttractionCard({ attraction }) {
  return (
    <div className="card">
      {/* Dynamic image: use attraction id */}
      <img
        src={`/assets/${attraction.id}.jpg`}
        alt={attraction.name}
        onError={(e) => {
          // fallback image if not found
          e.target.onerror = null;
          e.target.src = "/assets/default.jpg";
        }}
      />

      <div className="card-content">
        <h3>{attraction.name}</h3>
        <p>{attraction.description}</p>

        <div className="tags">
          {attraction.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AttractionCard;
