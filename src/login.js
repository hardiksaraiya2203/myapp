import React, { useState } from 'react'

const Login = () => {

    const [data,setData] = useState({firstName:"",lastName:"",contact:"",email:"",password:"",address:"",pincode:""})

    const handleFirstName = (e) =>{
        setData({...data,'firstName':e.target.value})
    }
    const handleLastName = (e) =>{
        setData({...data,'lastName':e.target.value})
    }
    const handleContact = (e) =>{
        setData({...data,'contact':e.target.value})
    }
    const handleEmail = (e) =>{
        setData({...data,'email':e.target.value})
    }
    const handlePassword = (e) =>{
        setData({...data,'password':e.target.value})
    }
    const handleAddress = (e) =>{
        setData({...data,'address':e.target.value})
    }
    const handlePincode = (e) =>{
        setData({...data,'pincode':e.target.value})
    }
    const handleSubmit = (e) =>{

        e.preventDefault();
        console.log(data);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type='text' onChange={handleFirstName}/>
        <input type='text'  onChange={handleLastName}/>
        <input type='tel'  onChange={handleContact}/>
        <input type='email'  onChange={handleEmail}/>
        <input type='password'  onChange={handlePassword}/>
        <input type='text'  onChange={handleAddress}/>
        <input type='number'  onChange={handlePincode}/>

        <input type='submit' value='Save'/>
      </form>
    </div>
  )
}

export default Login
