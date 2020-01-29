import React, { useState, useEffect } from 'react';
import axios from 'axios'
import EmployeeCard from './components/EmployeeCard'
import './App.css';

let finishedDisplays = 30;
const employeeArray = []
const revertedEmployeeArray = []

function App() {
  const [finalEmployeeArray, setFinalEmployeeArray] = useState([])

  //an array of random users is created from randomuser.me/api
  const numberDisplayed = 30;
  if (finishedDisplays > 0) {
    for (let i = 0; i < numberDisplayed; i++) {
      const randomNum = Math.floor(Math.random() * 4);
      let department;
      switch (randomNum) {
        case 0:
          department = "Development";
          break;
        case 1:
          department = "Marketing";
          break;
        case 2:
          department = "Sales";
          break;
        case 3:
          department = "Paper Pushing";
          break;
        default:
      }
      axios.get('https://randomuser.me/api/?nat=us')
        .then(function (res) {
          let employee = res.data.results[0]
          const employeeObject = {
            first: employee.name.first,
            last: employee.name.last,
            gender: employee.gender,
            department: department,
            city: employee.location.city,
            country: employee.location.country,
            email: employee.email,
            phone: employee.phone,
            image: employee.picture.large
          }
          revertedEmployeeArray.push(employeeObject)
          employeeArray.push(employeeObject)
          finishedDisplays--
          if (finishedDisplays == 0) {
            setFinalEmployeeArray(employeeArray)
          }
        });
    }
  }

  function filterEmployees(i, category) {
    switch (category) {
      case "byDepartment":
        const array = finalEmployeeArray.filter(function (emp) {
          return emp.department === i
        })
        return array
      case "byGender":
        const array2 = finalEmployeeArray.filter(function (emp) {
          return emp.gender === i
        })
        return array2
      default:
    }

  }

  function sortArray(sortParam) {
    employeeArray.sort((a, b) => {
      if (a.last > b.last) {
        return 1
      } else {
        return -1
      }
    })
    return employeeArray
  }

  function searchFilter(value){
    const filteredEmpArray = employeeArray.slice().filter(function(employee){
        const fullName = (employee.first + " " + employee.last ).toLowerCase();
        return fullName.indexOf(value.toLowerCase()) > -1
    })
    setFinalEmployeeArray(filteredEmpArray)
  }

  return (
    <div>
      <button onClick={() => setFinalEmployeeArray(employeeArray)}>
        Get Employees
    </button>
      <button onClick={() => setFinalEmployeeArray(sortArray())}>
        Sort By Last Name
    </button>
      <button onClick={() => setFinalEmployeeArray(revertedEmployeeArray)}>
        Show All Employees
    </button>
    <input onChange={event => {
      const value = event.target.value
      searchFilter(value);
      }}/>
      <div className="cardBox">
        {finalEmployeeArray.map((employee) => (
          <EmployeeCard
            first={employee.first}
            last={employee.last}
            gender={employee.gender}
            department={employee.department}
            city={employee.city}
            country={employee.country}
            email={employee.email}
            phone={employee.phone}
            image={employee.image}
            handleClick={() => setFinalEmployeeArray(filterEmployees(employee.department, "byDepartment"))}
            handleClick2={() => setFinalEmployeeArray(filterEmployees(employee.gender, "byGender"))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
