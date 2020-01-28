import React from "react";
import { useGetEmployee } from "../hooks/useGetEmployee"



function EmployeeCard({ first, last, gender, department, city, country, email, phone, image, handleClick, handleClick2 } ) {

    const { employee, getEmployee } = useGetEmployee()
    return (
        <div>
            <h1>{first} {last}</h1>
            <h1 onClick={handleClick}>{department}</h1>
            <h2 onClick={handleClick2}>{gender}</h2>
            <h2>{city}, {country}</h2>
            <h3>{email} </h3>
            <h3>{phone} </h3>
            <img src={image} alt="Employee Portrait"/>
        </div>
    )
}

export default EmployeeCard;