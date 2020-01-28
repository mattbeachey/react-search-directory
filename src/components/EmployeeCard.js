import React from "react";
import { useGetEmployee } from "../hooks/useGetEmployee"



function EmployeeCard({ first, last, gender, city, country, email, phone, image, handleClick } ) {

    const { employee, getEmployee } = useGetEmployee()
    return (
        <div>
            <h1>{first} {last}</h1>
            <h2>{gender}</h2>
            <h2>{city}, {country}</h2>
            <h3>{email} </h3>
            <h3>{phone} </h3>
            <span className="remove" onClick={handleClick}>𝘅</span>
            <img src={image}/>
        </div>
    )
}

export default EmployeeCard;