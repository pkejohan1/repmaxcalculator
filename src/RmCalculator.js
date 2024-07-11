import React, { useState } from "react";
import "./App.css";

function RmCalculator({ slots, setSlots }) {
  const [slot, setSlot] = useState({
    weight: 0,
    reps: 0,
    max: 0,
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const name = event.target.id;
    setSlot((prevValue) => {
      return {
        ...prevValue,
        [name]: newValue,
      };
    });
  }

  function handleSubmit() {
    const weight = slot.weight;
    const reps = slot.reps;
    const max = Math.round(weight * (1 + reps / 30));
    const newSlot = { ...slot, max: max };

    setSlot(newSlot);

    setSlots((prevSlots) => {
      return [newSlot, ...prevSlots];
    });
  }

  return (
    <div className="container">
      <h1 className="header">1RM: {slot.max}</h1>
      <input
        id="weight"
        type="text"
        placeholder="Weight"
        onChange={handleChange}
      />

      <input id="reps" type="text" placeholder="reps" onChange={handleChange} />

      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
}

export default RmCalculator;
