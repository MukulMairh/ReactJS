import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


import ClockClass from './clock-class/ClockClass';
import ClockFunction from './clock-function/ClockFunction';


/**
 *  Props- Properties, values we are passing from parent to child component. 
 *  State- State are mutable
 *  When a  state is updated then page rerenders. 
 */
function App() {
  //props
  const headingClass = "Inside Clock Class Component";
  const headingFunction = "Inside Clock Function Component";
  const userName = "Intellipaat";

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className="App">
      <>
        <div>
          <h1>Main App</h1>
          <button onClick={handleClick}>Show/Hide component</button>
          {/* {
            show && <ClockClass heading={headingClass} userName={userName}></ClockClass>
          } */}

          {
            show && (
              <ClockFunction heading={headingClass} userName={userName}>
                <p> This is my child 1</p>
                <p> This is my child 2</p>
                <p> This is my child 3</p>
                <p> This is my child 4</p>
                <p> This is my child 5</p>
              </ClockFunction>

            )
          }

        </div>
      </>
    </div>
  );
}

export default App;
