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
    const randomNum = Math.floor(Math.random() * 4);
    let department;
    switch(randomNum) {
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
    console.log(department, randomNum)
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
        employeeArray.push(employeeObject)
      });
  }

  function filterEmployees(i, category){
    switch(category) {
      case "byDepartment":
        const array = finalEmployeeArray.filter(function(emp){
          console.log(i)
          return emp.department === i
        })
        return array
      case "byGender":
        const array2 = finalEmployeeArray.filter(function(emp){
          console.log(i)
          return emp.gender === i
        })
        return array2
      default:
    }

  }

  function sortArray(sortParam){
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

  return (
    <div>
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
