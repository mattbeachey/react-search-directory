import React, { useState } from 'react';
import axios from 'axios'
import EmployeeCard from './components/EmployeeCard'
import './App.css';

function App() {
  const [finalEmployeeArray, setFinalEmployeeArray] = useState([])
  const [reduceBy, setReduceBy] = useState(0)

  //an array of random users is created from randomuser.me/api
  const employeeArray = []
  const numberDisplayed = 10;
  for (let i = 0; i < numberDisplayed; i++) {
    axios.get('https://randomuser.me/api/')
      .then(function (res) {
        let employee = res.data.results[0]
        const employeeObject = {
          first: employee.name.first,
          last: employee.name.last,
          city: employee.location.city,
          country: employee.location.country,
          email: employee.email,
          phone: employee.phone,
          image: employee.picture.large
        }
        const first = employee.name.first
        employeeArray.push(employeeObject)
      });
  }

  for (let i = 0; i < reduceBy; i++) {
    finalEmployeeArray.pop()
  }

  return (
    <div>
      <button onClick={() => setReduceBy(reduceBy + 1)}>
        Remove Employee
    </button>
      <button onClick={() => setReduceBy(reduceBy - 1)}>
        Add Employee
    </button>
    <button onClick={() => setFinalEmployeeArray(employeeArray.slice(0))}>
        Get Employees
    </button>
      <div className="App">
        {finalEmployeeArray.map((employee) => (
          <EmployeeCard
          first={employee.first}
          last={employee.last}
          city={employee.city}
          country={employee.country}
          email={employee.email}
          phone={employee.phone}
          image={employee.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
