import React, { useState } from "react";

function App() {
  const [totalAmount, setTotalAmount] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState(null);

  const calculateSplit = () => {
    if (!totalAmount || !people || people <= 0) {
      alert("Please enter valid values");
      return;
    }

    const splitAmount = (parseFloat(totalAmount) / parseInt(people)).toFixed(2);
    setResult(splitAmount);
  };

  return (
    <div className="container">
      <h1>💰 Expense Split Calculator</h1>

      <div className="card">
        <label>Total Expense (₹)</label>
        <input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          placeholder="Enter total amount"
        />

        <label>Number of People</label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          placeholder="Enter number of people"
        />

        <button onClick={calculateSplit}>Calculate</button>

        {result && (
          <div className="result">
            Each person should pay: ₹{result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
