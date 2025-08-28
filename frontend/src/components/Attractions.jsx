import React from "react";
import AttractionCard from "./AttractionCard";
import "./Attractions.css";

export default function Attractions({ attractions }) {
  return (
    <section className="attractions-section" id="attractions">
      {attractions.length > 0 && (
        <>
          <h2>Attractions</h2>
          <div className="attractions-grid">
            {attractions.map((a) => (
              <AttractionCard key={a.id} attraction={a} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
