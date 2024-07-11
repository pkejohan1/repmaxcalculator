import React, { useState } from "react";
import "./App.css";
import HistorySlot from "./HistorySlot.js";

function History({ slots }) {
  return (
    <div className="container">
      <h2>Previous Calculations</h2>
      <ul>
        {slots.map((slot, index) => (
          <HistorySlot
            id={index}
            key={index}
            reps={slot.reps}
            weight={slot.weight}
            max={slot.max}
          />
        ))}
      </ul>
    </div>
  );
}

export default History;
