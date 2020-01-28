import React, { useState } from 'react';
import axios from 'axios'
import EmployeeCard from './components/EmployeeCard'
import './App.css';

function App() {
  const [finalEmployeeArray, setFinalEmployeeArray] = useState([])

  //an array of random users is created from randomuser.me/api
  const employeeArray = []
  const numberDisplayed = 10;
  for (let i = 0; i < numberDisplayed; i++) {
    axios.get('https://randomuser.me/api/?nat=us')
      .then(function (res) {
        let employee = res.data.results[0]
        const employeeObject = {
          first: employee.name.first,
          last: employee.name.last,
          gender: employee.gender,
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

  console.log(employeeArray)

  function removeEmployee(){
    employeeArray.pop()
    console.log(employeeArray)
    return employeeArray
  }

  function remove(i){
    const array = finalEmployeeArray.filter(function(friend){
      console.log(i)
      return friend.gender === i
    })
    return array
  }

  function sortArray(){
    employeeArray.sort((a, b) => {
      if (a.last > b.last) {
        return 1 
      } else {
        return -1
      }
    })
    console.log(employeeArray)
    return employeeArray
  }

  function testArray(){
    return [{
      first: "dsfasd",
      last: "dsfasd",
      city: "dsfasd",
      country: "dsfasd",
      email: "dsfasd",
      phone: "dsfasd",
      image: "dsfasd",
    }]
  }



  return (
    <div>
      <button onClick={() => setFinalEmployeeArray(removeEmployee())}>
        Remove Employee
    </button>
    <button onClick={() => setFinalEmployeeArray(employeeArray)}>
        Get Employees
    </button>
    <button onClick={() => setFinalEmployeeArray(sortArray())}>
        Sort By Last Name
    </button>
      <div className="App">
        {finalEmployeeArray.map((employee) => (
          <EmployeeCard
          first={employee.first}
          last={employee.last}
          gender={employee.gender}
          city={employee.city}
          country={employee.country}
          email={employee.email}
          phone={employee.phone}
          image={employee.image}
          handleClick={() => setFinalEmployeeArray(remove(employee.gender))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
