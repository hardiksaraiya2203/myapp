import React, { useEffect, useState } from 'react'
import axios from 'axios'
import authToken from './Custom';

export default function TokenAccount() {

    const [data,setData] = useState([])

    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('tokenNew'));
        authToken.get('/accounts'
        ).then(y=>{
          console.log(y.data)
        }).catch(y=>{
            console.log(y);
        })
    },[])
  return (
    <div>
      Accounts
    </div>
  )
}

          // ,{
          //     headers: {
          //         'Content-Type': "application/json",
          //         Authorization: `Bearer ${token.jwtToken}`           
          //     }
          // }