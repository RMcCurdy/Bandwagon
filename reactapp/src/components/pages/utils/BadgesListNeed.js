import React from 'react'

const BadgesListNeed = (props) => {
  return (
    <>
          <div className='badges-item'>
                <img
                    src={`../../../img/badges/${props.badgeImage}`}
                    className='badge-icon'
                    alt='loading' />
                <p>{props.badgeDescription}</p>
                    </div>
    </>
  );
}

export default BadgesListNeed
