//loading GIF credit: https://gif-art.tumblr.com/

import React from "react";
import "./header.css";



function EmployeeCard({ handleClick3, handleClick4, handleChange }) {

    return (
        <div className="nav">
            <div className="topRow">
                <button onClick={handleClick3}>
                    Sort By Last Name
                </button>
                <button onClick={handleClick4}>
                    Show All Employees
                 </button>
                <input onChange={handleChange} />
            </div>
            <div className="bottomRow">

            </div>
        </div>
    )
}

export default EmployeeCard;