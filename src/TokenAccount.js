import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TokenAccount() {

    const [data,setData] = useState([])

    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('tokenNew'));
        axios.get('https://real-pear-fly-kilt.cyclic.app/accounts'
        // ,{
        //     headers: {
        //         'Content-Type': "application/json",
        //         Authorization: `Bearer ${token.jwtToken}`           
        //     }
        // }
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
