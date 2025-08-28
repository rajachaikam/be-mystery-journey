import React from "react";

function Dropdown({ label, options, onChange }) {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
