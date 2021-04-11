import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';

const Voted = (props) => {
    // const accountId = props.accountId;
    // const gameId = props.gameId;
    // const homeTeamId = props.homeTeamId;
    // const visitorTeamId = props.visitorTeamId;
    // const originalVoteForTeamId = props.votedForTeamId;
    // const isvotingDisabled = props.isVotingDisabled;
    //==========================================

    const voteRef = useRef(props.votedForTeamId);
    voteRef.current = props.votedForTeamId;

    // useEffect(() => {
    //     // const handleVoteClickaddTwo = (e) => {
    //     //     return setCount(e.target.value);
    //     // };

    //     // document.title = `Voted for TeamId ${newVoteForTeamId}`;
    //     console.log('Votes > useEffect > newVoteForTeamId :', voteRef.current);
    // }, [voteRef]);

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
