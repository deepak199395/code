import React, { useState } from 'react'
import axios from "axios"
const PostAxios = () => {

    const data={fname:"",lname:""}
const [inputdata,setinputdata]=useState(data)

const handleChange=(e)=>{
    setinputdata({...inputdata,[e.target.name]:e.target.value})
}

// post
const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/users',inputdata)
    .then((response)=>{
        console.log(response);
    })
}
// put
const HandleUpdate=(e)=>{
    e.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/users/1',inputdata)
    .then((response)=>{
        console.log(response);
    })
}
//delete
const handledelete=(e)=>{
    e.preventDefault()
    axios.delete('https://jsonplaceholder.typicode.com/users/1',inputdata)
    .then((response)=>{
        console.log(response);
    })
}
  return (
    <div>
      <label>name</label>
      <br/>
      <input name='fname' type='text' value={inputdata.fname}  onChange={handleChange}/>
      <br/>
      <label>lastname</label>
      <br/>
      <input name='lname' type='text' value={inputdata.lname} onChange={handleChange}/>
      <br/>
      <button onClick={handlesubmit}>summit</button>
      <button onClick={HandleUpdate}>update</button>
      <button onClick={handledelete}>delete</button>
    </div>
  )
}

export default PostAxios
