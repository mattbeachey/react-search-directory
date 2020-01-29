//loading GIF credit: https://gif-art.tumblr.com/

import React from "react";
import "./header.css";



function EmployeeCard({ handleClick3, handleClick4, handleChange, navBarClass }) {

    return (
        <div className={navBarClass}>
            <div className="topRow">
                Employee Directory 
            </div>
            <div className="midRow">
                <button onClick={handleClick3}>
                    Sort By Last Name
                </button>
                <input onChange={handleChange} placeholder="Search employees by name"/>
                <button onClick={handleClick4}>
                    Show All Employees
                 </button>
            </div>
            <div className="bottomRow">
                    <p>Click a department or country to filter results. Loading gif source: <a href="https://gif-art.tumblr.com/" target="blank"> https://gif-art.tumblr.com/</a></p>
            </div>
        </div>
    )
}

export default EmployeeCard;