import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counters() {

    const value = useSelector(state => state.counter.value);

    return (
        <div>
            <h1>Counter Redux</h1>
            <p>Value : {value}</p>
        </div>
    )
}

export default Counters
