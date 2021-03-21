import React from 'react'
import News from '../shared/News';
import Schedule from '../shared/Schedule';
import { useContext } from 'react';

import AppContext from '../../../context/AppContext';

function Account() {
  const {globalState, setGlobalState} = useContext(AppContext);

  return (
    <div>
      <p>Hello {globalState.firstName}</p>
      <p>Hello {globalState.username}</p>
      <News />
      <Schedule />
    </div>
  )
}

export default Account
