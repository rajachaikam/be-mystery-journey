import React from "react";
import placeholder from "../assets/placeholder.jpg";
import statue from "../assets/nyc_statue.jpg";
import centralPark from "../assets/nyc_central_park.jpg";
import empireState from "../assets/nyc_empire_state.jpg";

const imagesMap = {
  "Statue of Liberty": statue,
  "Central Park": centralPark,
  "Empire State Building": empireState,
};

function AttractionCard({ attraction }) {
  const imgSrc = imagesMap[attraction.name] || placeholder;

  return (
    <div className="card">
      <img src={imgSrc} alt={attraction.name} />
      <div className="card-content">
        <h3>{attraction.name}</h3>
        <p>{attraction.description}</p>
        <p className="tags">Tags: {attraction.tags.join(", ")}</p>
      </div>
    </div>
  );
}

export default AttractionCard;
