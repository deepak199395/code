import React, { useState } from 'react'
import axios from "axios"

const Axiospost = () => {
const data={fname:"",lname:""}
const [inputdata,setInputdata]=useState(data)

const Handlrchane=(e)=>{
setInputdata({...inputdata,[e.target.name]:e.target.value})
}

const Handleclick=(e)=>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/users',inputdata)
    .then((response)=>{
        console.log(response);
    })
}

  return (
    <div>
      <label>first name</label>
      <br/>
      <input name='fname' value={inputdata.fname} type='text' onChange={Handlrchane}/>
      <br/>
      <label>last name</label>
      <br/>
      <input name='lname' type='text' value={inputdata.lname} onChange={Handlrchane}/>
      <br/>
      <button onClick={Handleclick}>sumit</button>
    </div>
  )
}

export default Axiospost
