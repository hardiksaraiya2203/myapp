import React, { useContext } from 'react'
import LanguageContext from './Language/languageContext'

export default function LanForm() {
    const {data} = useContext(LanguageContext)
    let obj = {
        en :{
            'firstName': 'firstName',
            'lastName': 'lastName'
        },
        hi :{
            'firstName': 'p name',
            'lastName': 'a name'
        }
    }
  return (
    <div>

        <label>
            {obj[data].firstName}
            <input type='text'></input>
        </label>
        <label>
            {obj[data].lastName}
            <input type='text'></input>
        </label>
        
      
    </div>
  )
}
