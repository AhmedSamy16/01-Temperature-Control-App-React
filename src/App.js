import { useState } from "react";

function App() {
  const [tempValue, setTempValue] = useState(10)
  const [tempColor, setTempColor] = useState("cold")
  function increase() {
    if (tempValue === 30) return
    const newVal = tempValue + 1
    if (newVal >= 15) {
      setTempColor("hot")
    }
    setTempValue(newVal)
  }
  function decrease() {
    if (tempValue === -10) return
    const newVal = tempValue - 1
    if (newVal < 15) setTempColor("cold")
    setTempValue(newVal)
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => increase()}>+</button>
        <button onClick={() => decrease()}>-</button>
      </div>
    </div>
  );
}

export default App;
