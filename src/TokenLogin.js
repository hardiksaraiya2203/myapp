import React, { useState } from 'react'
import axios from 'axios'

export default function TokenLogin() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(' https://real-pear-fly-kilt.cyclic.app/accounts/authenticate', data)
            .then(y => {
                localStorage.setItem('tokenNew', JSON.stringify(y.data));
            }).catch(y=>{
                console.log('error from api');
            })


    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='email' onChange={handleInput} />
            <input type='text' name='password' onChange={handleInput} />

            <button type='submit' value='Save'>Save</button>
        </form>
    )
}
