import React from "react";
import "./employeeCard.css";



function EmployeeCard({ first, last, gender, department, city, country, email, phone, image, handleClick, handleClick2, cardClass }) {

    return (
        <div className="card">
            <div className="card-title">
                <h1 className="name">{first} {last}</h1>
            </div>
            <h1 className="clickable" onClick={handleClick}>{department}</h1>
            <h2 className="clickable" onClick={handleClick2}>{gender}</h2>
            <h2>{city}, {country}</h2>
            <h3>{email} </h3>
            <h3>{phone} </h3>
            <img className="image" src={image} alt="Employee Portrait" />
        </div>
    )
}

export default EmployeeCard;