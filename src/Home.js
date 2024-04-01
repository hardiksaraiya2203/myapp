import React, {  useState } from 'react'

const Home = () => {
    // const name = "this is javascript"

    let [counter, updateCounter] = useState(0);

    const handleCounterA = () => {

        updateCounter(counter + 1);
    }
    const handleCounterS = () => {

        updateCounter(counter - 1);
    }
    const handleCounterM = () => {

        updateCounter(counter * 2);
    }
    const handleCounterE = () => {

        updateCounter(counter ** 2);
    }
    const handleCounterD = () => {

        updateCounter(counter / 2);
    }
    const handleCounterMo = () => {

        updateCounter(counter % 2);
    }
    return (
        <div>
            <div>{counter}</div>
            <button onClick={handleCounterA}>+</button>
            <button onClick={handleCounterS}>-</button>
            <button onClick={handleCounterM}>*</button>
            <button onClick={handleCounterE}>**</button>
            <button onClick={handleCounterD}>/</button>
            <button onClick={handleCounterMo}>%</button>
        </div>
    )
}
export default Home

// const Effect = () => {
//     let [data, setData] = useState([])

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/comments").then(y => y.json()).then(y => {
//             setData(y)
//         })
//     }, [])

//     return (
//         data.map((v) => {
//             return <div>{v.id} {v.email} {v.body}</div>
//         })

//     )
// }
// export default Effect




