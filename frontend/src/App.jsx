import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown.jsx";
import AttractionCard from "./components/AttractionCard.jsx";
import "./App.css";

function App() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [attractions, setAttractions] = useState([]);
  const BASE_URL = "https://be-mystery-backend.onrender.com";


  useEffect(() => {
    fetch(`${BASE_URL}/states`)
  .then(res => res.json())
  .then(data => setStates(data));

  }, []);

  const loadCities = (stateId) => {
    setSelectedState(stateId);
    fetch(`${BASE_URL}/cities/${stateId}`)
      .then(res => res.json())
      .then(setCities);
  };

  const loadAttractions = () => {
    fetch(`${BASE_URL}/attractions/${selectedCity}`)
      .then(res => res.json())
      .then(setAttractions);
  };

  return (
    <div className="app-container">
      <h1>Be Mystery Journey</h1>

      <div className="controls">
        <Dropdown label="State" options={states} onChange={loadCities} />
        {selectedState && (
          <Dropdown label="City" options={cities} onChange={setSelectedCity} />
        )}
        <button onClick={loadAttractions} disabled={!selectedCity}>
          Load Attractions
        </button>
      </div>

      <div className="cards">
        {attractions.map(a => (
          <AttractionCard key={a.id} attraction={a} />
        ))}
      </div>
    </div>
  );
}

export default App;
