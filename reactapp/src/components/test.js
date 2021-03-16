import React from 'react';
import axios from 'axios';

function Test() {

  const getAccounts = () => {
    return axios.get('http://localhost:5000/api/Accounts')
    .then(resp => {
      console.log('response is: ', resp);
    });
  } 

  return (
    <div>
      <button >Test</button>
    </div>
  )
}

export default Test
