import React, { useState } from 'react'

const ShowMoreTextToggle = ({ text }) => {
    const [showMore, setShowMore] = React.useState(false)

    const truncate = React.useMemo(() => {
        console.log('truncate is calculated');
        return text.slice(0, 30).concat('...');
    }, [text]);

    const myData = () => {
        console.log('mydata is calculated')
        return text.slice(0, 30).concat('...');

    }
    return (
        <div>

            <p onClick={() => setShowMore(!showMore)}>
                {showMore ? text : truncate} {showMore ? 'less' : 'more'}
            </p>

        </div>
    )
}

export default ShowMoreTextToggle
