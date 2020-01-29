import React, { useState, useEffect } from 'react';
import axios from 'axios'
import EmployeeCard from './components/EmployeeCard'
import './App.css';
import LoadingGif from './components/LoadingGif';
import Header from './components/Header'


const numberDisplayed = 40;
let displaysLeft = numberDisplayed;
const employeeArray = []
const revertedEmployeeArray = []

function App() {
  const [finalEmployeeArray, setFinalEmployeeArray] = useState([])
  const [loadingClass, setLoadingClass] = useState("loading")
  const [loadingClass2, setLoadingClass2] = useState("loadText")
  const [navClass, setNavClass] = useState("noNav")
  const [color, setColor] = useState("#bde2ec")
  const [cardClass, setCardClass] = useState("none")
  

  //an array of random users is created from randomuser.me/api
  //each random user is randomly assigned a department
  if (displaysLeft > 0) {
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
      axios.get('https://randomuser.me/api')
        // eslint-disable-next-line no-loop-func
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
          displaysLeft--
          if (displaysLeft === 0) {
            setFinalEmployeeArray(employeeArray)
            setLoadingClass("done")
            setLoadingClass2("done")
            setColor("#3e8ca2")
            setCardClass("card")
            setNavClass("nav")
          }
        });
    }
  }

  //-------------------------funcitons to manipulate arrays via onClicks from components---------------------

  function filterEmployees(i, category) {
    switch (category) {
      case "byDepartment":
        const array = finalEmployeeArray.filter(function (emp) {
          return emp.department === i
        })
        return array
      case "byCountry":
        const array2 = finalEmployeeArray.filter(function (emp) {
          return emp.country === i
        })
        return array2
      default:
    }

  }

  function sortArray(sortParam) {
    const sortedEmpArray = finalEmployeeArray.slice().sort((a, b) => {
      if (a.last > b.last) {
        return 1
      } else {
        return -1
      }
    })
    return sortedEmpArray
  }

  function searchFilter(value) {
    const filteredEmpArray = employeeArray.slice().filter(function (employee) {
      const fullName = (employee.first + " " + employee.last).toLowerCase();
      return fullName.indexOf(value.toLowerCase()) > -1
    })
    setFinalEmployeeArray(filteredEmpArray)
  }


//----------------components----------------------------
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: `${color}`,
      transition: "all 4s"

    }}>
      <Header 
      navBarClass={navClass}
      handleClick3={() => setFinalEmployeeArray(sortArray())}
      handleClick4={() => setFinalEmployeeArray(revertedEmployeeArray)}
      handleChange={event => {
        const value = event.target.value
        searchFilter(value);
      }}
      />
      <LoadingGif gifClass={loadingClass} loadText={loadingClass2} />

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
            handleClick2={() => setFinalEmployeeArray(filterEmployees(employee.country, "byCountry"))}
            cardClass={cardClass}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
