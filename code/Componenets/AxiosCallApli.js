import React, { useEffect, useState } from 'react'
import axios from "axios"
const AxiosCallApli = () => {
const[userdata,setuserdata]=useState([])
    
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response);
        setuserdata(response.data)
    })
},[])




  return (
    <div>
      {userdata.map((data)=>{
      return(
        <div>
        <h1>{data.id}</h1>
        <h1>{data.name}</h1>
        <h1>{data.phone}</h1>
        <h3>{data.email}</h3>
        </div>
      )
      })}
    </div>
  )
}

export default AxiosCallApli
