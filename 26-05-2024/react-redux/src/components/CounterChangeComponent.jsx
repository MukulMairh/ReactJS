import React from 'react'
import { decrement, increment, incrementByValue } from '../redux/counter/counterSlice';
import { useDispatch } from 'react-redux';
function CounterChangeComponent() {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleIncrementBy5 = () => {
        dispatch(incrementByValue(5))
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrementBy5}>Increment by 5</button>

        </div>
    )
}

export default CounterChangeComponent
