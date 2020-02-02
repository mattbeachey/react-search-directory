import React, { useState, useEffect} from "react";
import "./employeeCard.css";



function EmployeeCard({ first, last, department, city, country, email, phone, image, handleClick, handleClick2, cardClass }) {

    console.log(cardClass)

    const [carddd, setCarddd] = useState("none")

    useEffect(function(){
        console.log("changed")
        setCarddd("card")
    }, [cardClass])
    
    return (
        <div className={carddd}>
            <div className="card-title">
                <h1 className="name">{first} {last}</h1>
            </div>
            <h1 className="clickable" onClick={handleClick}>{department}</h1>
            <h2 className="clickable" onClick={handleClick2}>{city}, {country}</h2>
            <h3>{email} </h3>
            <h3>{phone} </h3>
            <img className="image" src={image} alt="Employee Portrait" />
        </div>
    )
}

export default EmployeeCard;