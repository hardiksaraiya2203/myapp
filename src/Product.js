import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'

const Product = () => {

    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(y => {
            setData(y.data)
        })
    }, [])

    console.log(data);

    return (
        <div>
            {
                data.map((value, index) => {
                    return (<ProductItem item={value} key={index} />)
                })
            }

        </div>
    )
}

export default Product
