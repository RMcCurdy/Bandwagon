import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Votes = (props) => {
    const accountId = props.accountId;
    const gameId = props.gameId;
    const homeTeamId = props.homeTeamId;
    const visitorTeamId = props.visitorTeamId;
    const originalVoteForTeamId = props.votedForTeamId;
    //==========================================

    const [newVoteForTeamId, setNewVoteForTeamId] = useState(originalVoteForTeamId);

    const voteRef = useRef(originalVoteForTeamId);
    // voteRef.current = originalVoteForTeamId;

    const handleVoteClick = (newVoteId) => {
        voteRef.current = newVoteId;
        console.log('handleVoteClick > newVoteId is: ', newVoteId);
        console.log('handleVoteClick > voteRef.current is: ', voteRef.current);

        //create request obj
        const gameVoteRequest = {
            accountId: accountId,
            gameId: gameId,
            votedForTeamId: newVoteId,
        };
        console.log('gameVoteRequest obj is: ', gameVoteRequest);

        axios
            .post(`http://localhost:5000/api/votes/`, gameVoteRequest)
            .then((resp) => {
                const votedForTeamIdReturnedFromDatabase = resp.data;
                console.log(
                    'votedForTeamIdReturnedFromDatabase response is: ',
                    votedForTeamIdReturnedFromDatabase,
                ); //14
                // finally, once the data has come back from the api votes table
                setNewVoteForTeamId(
                    votedForTeamIdReturnedFromDatabase.votedForTeamId,
                );
            });
    };

    useEffect(() => {
        // const handleVoteClickaddTwo = (e) => {
        //     return setCount(e.target.value);
        // };

        // document.title = `Voted for TeamId ${newVoteForTeamId}`;
        console.log('useEffect received vote id update :', newVoteForTeamId );
    }, [newVoteForTeamId]);

    return (
        <>
            {/* <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div> */}
            <div>
                <button
                    value={homeTeamId}
                    onClick={(e) => {handleVoteClick(e.target.value);}}
                    className={`${
                        homeTeamId === newVoteForTeamId
                            ? 'vote-button voted-for'
                            : 'vote-button not-voted-for'
                    }`}>
                    {homeTeamId === newVoteForTeamId ? '✔️' : 'vote'}
                </button>
                <div style={{ marginBottom: '8px' }}></div>
                <button
                    value={visitorTeamId}
                    onClick={(e) => {handleVoteClick(e.target.value);}}
                    className={`${
                        visitorTeamId === newVoteForTeamId
                            ? 'vote-button voted-for'
                            : 'vote-button not-voted-for'
                    }`}>
                    {visitorTeamId === newVoteForTeamId ? '✔️' : 'vote'}
                </button>
            </div>
        </>
    );
};

export default Votes;
