import React from "react";

function Dropdown({ label, options, onChange }) {
  return (
    <div className="dropdown">
      <label style={{ marginRight: '8px', fontWeight: 500 }}>{label}:</label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="">--Select--</option>
        {options.map(opt => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
