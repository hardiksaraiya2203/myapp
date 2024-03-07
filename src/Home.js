import React, { useEffect, useState } from 'react'

// const Home = () => {
//     // const name = "this is javascript"

//     let [counter, updateCounter] = useState(0);

//     const handleCounterA = () => {

//         updateCounter(counter + 1);
//     }
//     const handleCounterS = () => {

//         updateCounter(counter - 1);
//     }
//     return (
//         <div>
//             <div>{counter}</div>
//             <button onClick={handleCounterA}>+</button>
//             <button onClick={handleCounterS}>-</button>
//         </div>
//     )
// }
// export default Home

const Effect = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments").then(y => y.json()).then(y => {
            setData(y)
        })
    }, [])

    return (
        data.map((v) => {
            return <div>{v.id}</div>
        })

    )
}
export default Effect




