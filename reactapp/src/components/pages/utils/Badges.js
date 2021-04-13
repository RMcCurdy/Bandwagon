import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../../context/AppContext';

import axios from 'axios';
import BadgesListHave from './BadgesListHave';
import BadgesListNeed from './BadgesListNeed';

function Badges() {

  const { id } = useContext(AppContext);

  const [badgesHave, setBadgesHave] = useState([])
  const [badgesNeed, setBadgesNeed] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/Badges/have/${id}`)
    .then((resp) => {
        console.log('badge response is: ', resp.data);
        setBadgesHave(resp.data);
    });
  }, [setBadgesHave, id]);

  useEffect(() => {
    axios
        .get(`http://localhost:5000/api/Badges/need/${id}`)
        .then((resp) => {
            console.log('badge need response is: ', resp.data);
            setBadgesNeed(resp.data);
        });
}, [setBadgesNeed, id]);

  return (
      <div className='badges'>
      <span className='badges-header'>
        <h1>My Badges</h1>
      </span>

            <div className='badges-container'>
        {badgesHave[0] ? (
          badgesHave.map((row) => {
            return (
              <BadgesListHave
              key={row.id}
              badgeImage={row.badgeImage}
              badgeDescription={row.badgeDescription}
              />
              );
            })
            ) : (
              <p>loading...</p>
              )}
              </div>
              <hr style={{padding:'0'}} />
              
            <span className='badges-header'>
                <h1>Badges I Need</h1>
            </span>
            <div className='badges-container'>
                {badgesHave[0] ? (
                    badgesNeed.map((row) => {
                        return (
                            <BadgesListNeed
                                key={row.id}
                                badgeImage={row.badgeImage}
                                badgeDescription={row.badgeDescription}
                            />
                        );
                    })
                ) : (
                    <p>loading...</p>
                )}
            </div>
    </div>
  )
}

export default Badges