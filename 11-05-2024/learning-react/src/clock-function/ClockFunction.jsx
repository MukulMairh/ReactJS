import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

/**
 * In function component to make use of props you need to pass props as param.
    Function component were stateless before 16.8 version
    We also call it pure function. 

    After 16.8 version we have hooks which help us to handle state and many more functions 

    Hooks are nothing but it is js functions.
*/ 
const ClockFunction =(props)=>{
     console.log("Props from parent ===> ", props);

     //Destructuring
     const {heading, userName, children}= props;

    //State in function component. 
    //  useState=>. return array with values;
    // 1=> state variable name
    // 2=> 
    //syntax: const [state,setState]= userState(initialState)

    const [count, setCount]= useState(1); 
    const [name, setName]= useState("");
    const [time,setTime]= useState(new Date());
    const handleClick =()=>{
        setCount( count+1);
    }


    // useEffect hook => to handle component lifecycle related logic.
    useEffect(()=>{
        console.log("componentDidMount");

        const intervalId = setInterval(()=>{
            console.log("Interval method");
         setTime(new Date())
        },1000);

        return ()=>{
            console.log("componentWillUnmount");
            clearInterval(intervalId);
        }
    }, []);

    useEffect(()=>{
        //logic is depended on count, when count value is updated then fucntion will  be called. 
        console.log("componentDidUpdate- count");
    },[count]);

    useEffect(()=>{
        console.log("componentDidUpdate- time");
    }, [time]);



  

    return (
        <>
        <h1>{heading}</h1>
        <p>{userName}</p>
        <h3>time - {time.toLocaleTimeString()}</h3>
        <p>Count - {count}</p>
        <button onClick={handleClick}>Increment</button>
        {children} {/* Render children directly without wrapping <p> */}
    </>
        
    )
}

ClockFunction.propTypes = {
    // Define propTypes here
    heading: PropTypes.string.isRequired,
    userName: PropTypes.string
};


export default ClockFunction