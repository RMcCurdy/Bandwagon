import React from 'react'
import News from '../shared/News';
import Schedule from '../shared/Schedule';
import { useContext } from 'react';

import AppContext from '../../../context/AppContext';

function Account() {
  // const {firstName, username} = useContext(AppContext);

  return (
    <div>
      <News />
      <Schedule />
    </div>
  )
}

export default Account
