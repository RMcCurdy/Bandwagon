import React, { useRef } from 'react';

const Voted = (props) => {

    const voteRef = useRef(props.votedForTeamId);
    voteRef.current = props.votedForTeamId;

    return (
        <>
            <div>
                <div className='vote-locked-button'>
                    {props.homeTeamId === voteRef.current ? (
                        <>
                            <div>✔️</div>
                        </>
                    ) : (
                        <img
                            src={'/img/misc/lock-15.png'}
                            style={{ width: '20px' }}
                            alt='lock'
                        />
                    )}
                </div>
                <div style={{ marginBottom: '8px' }}></div>
                <div className='vote-locked-button'>
                    {props.visitorTeamId === voteRef.current ? (
                        <>
                            <div>✔️</div>
                        </>
                    ) : (
                        <img
                            src={'/img/misc/lock-15.png'}
                            style={{ width: '20px' }}
                            alt='lock'
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Voted;
