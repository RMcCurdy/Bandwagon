import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../../../context/AppContext';

import axios from 'axios';
import BadgesListHave from './BadgesListHave';

function Badges() {

  const { id } = useContext(AppContext);

  const [badgesHave, setBadgesHave] = useState([])
  const [badgesNeed, setBadgesNeed] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/Badges/${id}`).then((resp) => {
        console.log('badge response is: ', resp.data);
        setBadgesHave(resp.data);
    });
  }, [setBadgesHave, id]);

  return (
    <div className='badges'>
      <>
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
    </>
    </div>
  )
}

export default Badges