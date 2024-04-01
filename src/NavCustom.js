import React, { useCallback, useContext } from 'react'
import LanguageContext from './Language/languageContext'

export default function NavCustom() {

    const {data,setData} = useContext(LanguageContext)
    const handleSelect = (e) =>{
        setData(e.target.value)
    }
  return (
    <div>

        <select onChange={handleSelect}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
        </select>
      
    </div>
  )
}
