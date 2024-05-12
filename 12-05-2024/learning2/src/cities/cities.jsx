import React, { useState } from 'react';
import { useRef } from 'react';

function Cities() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = () => {
    console.log(cityInputRef.current);
    if (city!==""){
    setCities([...cities, city]); // using spread operator to add new city to the cities array
    setCity(""); // clear the input field after submitting

    //to set focus on city input element
    cityInputRef.current.focus();
    }else{
        cityInputRef.current.style.borderColor='red';
    }
  }

  /** 
  useRef hook, take reference of any dom element. work similar to getElementById.
  useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const ref = useRef(initialValue)

  if your value useRef Value your component will not re-render, 
  useState value updte your will re-render.
  */

  const cityInputRef = useRef(null);
 const userNameInputRef = useRef(null);

 const handleSubmitUserName = ()=>{
    const userName = userNameInputRef.current.value;
    console.log("Username =", userName);
 }

  return (
    <div>
        <h1>Controlled components</h1>
      <input
        type="text" 
        placeholder='Enter City Name'
        value={city}
        onChange={handleCityChange}
        ref={cityInputRef}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{JSON.stringify(cities)}</p>

      <ul>
        {
            cities.map((value, index)=>{
                return <li key={index}>{value}</li>
            })
        }
      </ul>

      <h1>Uncontrolled reference</h1>
    <input type="text" ref={userNameInputRef}/>
    <button onClick={handleSubmitUserName}>Submit user name</button>
    </div>
  );
}

export default Cities;
