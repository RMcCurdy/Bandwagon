import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';

import axios from 'axios';

function Badges() {

  const { id } = useContext(AppContext);

  const [badges, setBadges] = useEffect([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/Badges/${id}`).then((resp) => {
        console.log('badge response is: ', resp.data);
        setBadges(resp.data);
    });
  }, [setBadges, id]);

  return (
    <div className='badges'>
      
      <span className='badges-header'>
        <h1>My Badges</h1> 
      </span>

      <div className='badges-grid'>
        
        <div className='badge-data'><img src='../../../img/badges-test/badge1.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge2.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge3.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge4.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge5.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge6.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge7.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge8.png' className='badge-icon' alt='loading' ></img><p>Badge description goes here.</p></div>
      </div>

      <span className='badges-header'>
        <h1>All Badges</h1> 
      </span>

      <div className='badges-grid'>
        <div className='badge-data'><img src='../../../img/badges-test/badge1.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge2.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge3.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge4.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge5.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge6.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge7.png' className='badge-icon' alt='loading'></img><p>Badge description goes here.</p></div>
        <div className='badge-data'><img src='../../../img/badges-test/badge8.png' className='badge-icon' alt='loading' ></img><p>Badge description goes here.</p></div>
      </div>
    </div>
  )
}

export default Badges