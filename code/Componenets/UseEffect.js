import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count,setCount]=useState(3)
const [data,setdata]=useState("deepak")

useEffect(()=>{
    console.log("componants");
},[count])

function HandleClick(){
setCount(count+1)
}

function Hanflechange(){
    setdata("amit")
}

  return (
    <div>
      <h1>couter {count}</h1>
      <button onClick={HandleClick}>click</button>
      <h1>name. {data} </h1>
      <button onClick={Hanflechange}>change</button>
    </div>
  )
}

export default UseEffect
