import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";

export default function Hero({ states, cities, selectedState, setSelectedState, selectedCity, setSelectedCity, onExploreClick }) {
  const [showDropdowns, setShowDropdowns] = useState(false);

  const handleExploreClick = () => {
    setShowDropdowns(true);
    if (onExploreClick) onExploreClick(); // tell parent to scroll
  };

  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={`/assets/video/hero-video3.mp4?v=${Date.now()}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="hero-content">
        {!showDropdowns ? (
          <>
            <h1>Discover Hidden Wonders</h1>
            <p>Explore amazing places and plan your next adventure</p>
            <button className="cta-button" onClick={handleExploreClick}>
              Start Exploring
            </button>
          </>
        ) : (
          <div className="dropdowns">
            {/* State Dropdown */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>

            {/* City Dropdown */}
            {selectedState && (
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
