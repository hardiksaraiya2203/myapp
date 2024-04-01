import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'

const Test = () => {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Product' element={<Product></Product>}></Route>
      
    </Routes>
  )
}

export default Test
