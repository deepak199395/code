import React, { useEffect, useState } from 'react'
import axios from "axios"
const Axios = () => {
const [Userdata,setdata]=useState([])

    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response)=>{
        console.log(response);
        setdata(response.data)
       })
    },[])



  return (
    <div>
      {Userdata.map((data)=>{
        return(
            <div>
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default Axios
