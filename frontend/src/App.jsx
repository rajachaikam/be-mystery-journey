import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Attractions from "./components/Attractions";
import LogoHeader from "./components/LogoHeader";
import { API_BASE_URL } from "./api/apiconfig";
import "./App.css";

const App = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [attractions, setAttractions] = useState([]);

  const attractionsRef = useRef(null);

  // Fetch states
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/states`);
        const data = await res.json();
        setStates(data);
      } catch (err) {
        console.error("Error fetching states:", err);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) return setCities([]);
    const fetchCities = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/cities/${selectedState}`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error("Error fetching cities:", err);
      }
    };
    fetchCities();

    setSelectedCity("");
    setAttractions([]);
  }, [selectedState]);

  // Fetch attractions and scroll when city changes
  useEffect(() => {
    if (!selectedCity) return setAttractions([]);
    const fetchAttractions = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/attractions/${selectedCity}`);
        const data = await res.json();
        setAttractions(data);

        // Scroll after attractions render
        setTimeout(() => {
          attractionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } catch (err) {
        console.error("Error fetching attractions:", err);
      }
    };
    fetchAttractions();
  }, [selectedCity]);

  const handleExploreClick = () => {
    // Only reveals dropdowns in Hero, no scrolling
  };

  return (
    <div className="App">
      <LogoHeader />

      {/* Hero Section */}
      <Hero
        states={states}
        cities={cities}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onExploreClick={handleExploreClick}
      />

      {/* Attractions Section */}
      {attractions.length > 0 && (
        <div ref={attractionsRef}>
          <Attractions attractions={attractions} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
