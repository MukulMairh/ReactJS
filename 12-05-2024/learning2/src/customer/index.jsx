//rfce

import React from 'react';

function Customer(props) {
  const { customerName, setCustomerName } = props;

  const handleChange = (event) => {
    console.log(event.target);
    setCustomerName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Enter Name'
        onChange={handleChange}
        value={customerName}
      />
    </div>
  );
}

export default Customer;