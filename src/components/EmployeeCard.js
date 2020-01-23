import React from "react";
import { useGetEmployee } from "../hooks/useGetEmployee"



function EmployeeCard() {

    const { employee, getEmployee } = useGetEmployee()
    console.log(employee.name)

    return (
        <div>
            <h1>{employee.gender}</h1>
           
        </div>


    )


}

export default EmployeeCard;