import { useState, useEffect } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Changed to ${count}`);
  });

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleResetCount = () => setCount(0);

  return (
    <div className="container">
      <button onClick={handleIncrement}>Increment ⬆️</button>
      <button onClick={handleDecrement}>Decrement ⬇️</button>
      <button onClick={handleResetCount}>Reset Count</button>
      <h1 id="count">{count}</h1>
    </div>
  )
}

export default Counter;