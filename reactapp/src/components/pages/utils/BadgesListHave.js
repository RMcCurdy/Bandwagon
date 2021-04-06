import React from 'react'

const BadgesListHave = (props) => {
  return (
    <>
        <div className='badges-grid'>
            <div className='badge-data'>
                <img
                    src={`../../../img/badges/${props.badgeImage}`}
                    className='badge-icon'
                    alt='loading'></img>
                <p>{props.badgeDescription}</p>
            </div>
        </div>
    </>
);
}

export default BadgesListHave
