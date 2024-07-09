import React, { useState } from "react";
import './App.css';
import RmCalculator from "./RmCalculator.js";
import History from "./History.js";
import HistorySlot from "./HistorySlot.js";

function App() {
  const [slots, setSlots] = useState([]);

  return (
    <div>
      <RmCalculator slots={slots} setSlots={setSlots}></RmCalculator>
      <History slots={slots} />
    </div>
  )

}

export default App;