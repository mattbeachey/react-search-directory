import React, { useState } from 'react';
import EmployeeCard from './components/EmployeeCard'
import './App.css';

function App() {

  const [reduceBy, setReduceBy] = useState(0)

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  for (let i = 0; i < reduceBy; i++) {
    array.pop()
  }

  return (
    <div>
      <button onClick={() => setReduceBy(reduceBy + 1)}>
        Increment
    </button>
      <button onClick={() => setReduceBy(reduceBy - 1)}>
        Decremet
    </button>
      <div className="App">
        {array.map((item) => (
          <EmployeeCard />
        ))}
      </div>
    </div>
  );
}

export default App;
