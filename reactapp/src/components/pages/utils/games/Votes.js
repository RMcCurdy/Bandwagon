import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';

const Votes = (props) => {
    const accountId = props.accountId;
    const gameId = props.gameId;
    const homeTeamId = props.homeTeamId;
    const visitorTeamId = props.visitorTeamId;
    const originalVoteForTeamId = props.votedForTeamId;
    const isvotingDisabled = props.isVotingDisabled;
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
            {/* <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div> */}
            <div>
                <button
                    disabled={props.isVotingDisabled}
                    value={props.homeTeamId}
                    onClick={(e) => {
                        props.handleVoteClick(
                            props.accountId,
                            props.gameId,
                            e.target.value,
                            props.gameDate,
                        );
                    }}
                    className={`${
                        props.homeTeamId === voteRef.current
                            ? 'vote-button voted-for'
                            : 'vote-button not-voted-for'
                    }`}>
                    {props.homeTeamId === voteRef.current
                        ? `✔️`
                        : `vote`}
                </button>
                {/* usr ${props.accountId} g${props.gameId}|${props.homeTeamId} */}
                <div style={{ marginBottom: '8px' }}></div>
                <button
                    disabled={props.isVotingDisabled}
                    value={props.visitorTeamId}
                    onClick={(e) => {
                        props.handleVoteClick(
                            props.accountId,
                            props.gameId,
                            e.target.value,
                            props.gameDate,
                        );
                    }}
                    className={`${
                        props.visitorTeamId === voteRef.current
                            ? 'vote-button voted-for'
                            : 'vote-button not-voted-for'
                    }`}>
                    {visitorTeamId === voteRef.current
                        ? `✔️`
                        : `vote`}
                </button>
                {/* usr ${props.accountId} g${props.gameId}|${props.visitorTeamId} */}
            </div>
        </>
    );
};

export default Votes;
