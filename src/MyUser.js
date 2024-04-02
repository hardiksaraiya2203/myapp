import React from 'react'

function MyUser(props) {

    console.log(props);
    return (
        <div>

            {
                props.data.map((value, index) => {

                    return (<div>{value}<button onClick={() => {
                        props.remove(index)
                    }}>delete</button></div>)
                })
            }
        </div>
    )
}

// export default React.memo(MyUser, (pre, next) => {

//     if (pre.data.data.length == next.data.data.length) {
//         return true;
//     }
//     else {
//         return false;
//     }
// });
export default React.memo(MyUser);