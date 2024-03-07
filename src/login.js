import React, { useState } from 'react'

const Login = () => {

    const [data,setData] = useState({firstName:"",lastName:""})

    const handleFirstName = (e) =>{
        setData({...data,'firstName':e.target.value})
    }
    const handleLastName = (e) =>{
        setData({...data,'lastName':e.target.value})
    }
    const handleSubmit = (e) =>{

        e.preventDefault();
        console.log(data);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type='email' onChange={handleFirstName}/>
        <input type='password'  onChange={handleLastName}/>

        <input type='submit' value='Save'/>
      </form>
    </div>
  )
}

export default Login
