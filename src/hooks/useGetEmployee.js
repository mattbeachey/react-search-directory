import {useState, useEffect} from "react"
import axios from 'axios'

export function useGetEmployee(){

    //useState is an array with [0] being a variable and [1] being a method setting the value of that varialbe
    const [employee, setEmployee] = useState("")

    function getEmployee(){
        axios.get('https://randomuser.me/api/')
            .then(res => setEmployee(res.data.results[0]))
    }

    //this is making getEmployee run on page load, because the second part of the argumen [] is empty 
    //useEffect causes the component to re-render
    useEffect(()=>{
        getEmployee()
    },[])

    return {employee, getEmployee}
}