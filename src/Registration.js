import React, { useState } from 'react'
import axios from 'axios';

const Registration = () => {
    const [data,setData] = useState({firstName:"",lastName:"",title:"",email:"",password:"",confirmPassword:"",acceptTerms:true})

    const handleInput = (e) => {
        if(e.target.type == "checkbox")
        {
            setData({...data,[e.target.name]:e.target.checked});
        }
        else{
            setData({...data,[e.target.name]:e.target.value});
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(" https://real-pear-fly-kilt.cyclic.app/accounts/register",data).then(y=>{
            console.log(y.data);
        })

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInput} name='firstName'/>
        <input type='text' onChange={handleInput} name='lastName'/>
        <input type='text' onChange={handleInput} name='title'/>
        <input type='text' onChange={handleInput} name='email'/>
        <input type='text' onChange={handleInput} name='password'/>
        <input type='text' onChange={handleInput} name='confirmPassword'/>
        <input type='checkbox'/>

        <input type='submit' value='Save' />
      </form>
    </div>
  )
}

export default Registration
