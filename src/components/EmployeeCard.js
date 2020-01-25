import React from "react";
import { useGetEmployee } from "../hooks/useGetEmployee"



function EmployeeCard() {

    const { employee, getEmployee } = useGetEmployee()
    console.log(employee.name)
    console.log(employee)

    return (
        <div>
            <h1>{employee.name && employee.name.first} {employee.name && employee.name.last}</h1>
            <h2>{employee.location && employee.location.city}, {employee.location && employee.location.country}</h2>
            <h3>{employee.email} </h3>
            <h3>{employee.phone} </h3>
            <img src={employee.picture && employee.picture.large}/>
        </div>


    )


}

export default EmployeeCard;