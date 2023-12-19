import React from 'react';
import './switch.css'
export default function Switch() {
  return (
    <div className="switch-cont" >
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="switch"></label>
      </div>
  );
}
