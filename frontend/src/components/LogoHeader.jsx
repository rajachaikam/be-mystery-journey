// src/components/LogoHeader.jsx
import React from "react";

const LogoHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 20px",
        backgroundColor: "#f5f5f5", // optional background
        borderRadius: "8px",        // optional rounded container
      }}
    >
      <img
        src="/favicon.ico"
        alt="Logo"
        style={{
          width: "48px",
          height: "48px",
        }}
      />
      <span
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          color: "#222",   // text color
          fontFamily: "Arial, sans-serif",
        }}
      >
        BeMysteryJourney
      </span>
    </div>
  );
};

export default LogoHeader;
