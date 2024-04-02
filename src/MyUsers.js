import React, { useCallback, useState } from 'react'
import MyUser from './MyUser';

export default function MyUsers() {

    const [data,setData]= useState([]);
    const [text,setText]= useState('')

    const handleChange = (e)=>{

        setText(e.target.value);

    }

    const deleteItem = useCallback((index)=>{

      let p = [...data]
      p.splice(index,1)
      setData(p)
    })

    const save = ()=>{
        let p = [...data];
        p.push(text);

        setData(p);

    }
  return (
    <div>

        <input type='text' onChange={handleChange}/>
        <button onClick={save}>save</button>
        {/* <MyUser data ={{data}}/> */}
        <MyUser data ={data} remove={deleteItem}/>
    </div>
  )
}