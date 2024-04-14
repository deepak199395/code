import React, { useState } from 'react'
import axios from "axios"

const Axiosput = () => {
const data={fname:"",lname:""}
const [inputdata,setInputdata]=useState(data)

const Handlrchane=(e)=>{
setInputdata({...inputdata,[e.target.name]:e.target.value})
}
// post
const Handleclick=(e)=>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/users',inputdata)
    .then((response)=>{
        console.log(response);
    })
}
//put
const handleupdate=(e)=>{
    e.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/users/1',inputdata)
    .then((response)=>{
        console.log(response);
    })
}
// delete
const Handledelete=(e)=>{
    e.preventDefault()
    axios.delete('https://jsonplaceholder.typicode.com/users/1')
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
      <button onClick={handleupdate}>update</button>
      <button onClick={Handledelete}>delete</button>
    </div>
  )
}

export default Axiosput
