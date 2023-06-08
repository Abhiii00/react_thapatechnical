import './App.css';
import React, { useState } from 'react';

let App = () => {
  let [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
  })
  

  let inputEvent = (e) => {
    let {value, name} = e.target
    
    setFullName((preValue)=>{
      return{
        ...preValue,
        [name]: value,
      }
    })
  }

  let onSubmit = (e) => {
    e.preventDefault()  
    alert('submit')
  }

  return (
    <>
      <div>
        <form >
          <h1>hello {fullName.fname} {fullName.lname} {fullName.email}</h1>
          <input type="text" placeholder='Enter Your Name' name="fname" onChange={inputEvent} value={fullName.fname} />
          <br /><input type="text" placeholder='Enter Your Name' name="lname" onChange={inputEvent} value={fullName.lname} />
          <br />
          <input type='email' placeholder='Enter Your email' name="email" onChange={inputEvent} value={fullName.email} />
          <br />
          <button onClick={onSubmit}>submit</button>
        </form>
      </div>
    </>
  )
}

export default App