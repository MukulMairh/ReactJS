import logo from './logo.svg';
import './App.css';
import Customer from './customer';
import { useState } from 'react';
import Cities from './cities/cities';
import User from './user/user';

function App() {

  const [customerName, setCustomerName] = useState("Devang");

  return (
    <div className="App">
      <Customer customerName={customerName} setCustomerName={setCustomerName}></Customer>
      <p>customerName : {customerName}</p>

      <Cities></Cities>
      <User></User>
    </div>
  );
}

export default App;
