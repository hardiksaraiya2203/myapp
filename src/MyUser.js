import React from 'react'

function MyUser(props) {

    console.log(props);
    return (
        <div>MyUser</div>
    )
}

export default React.memo(MyUser, (pre, next) => {

    if (pre.data.data.length == next.data.data.length) {
        return true;
    }
    else {
        return false;
    }
});