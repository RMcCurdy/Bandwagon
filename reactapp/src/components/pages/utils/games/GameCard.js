// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// import VotesButtonHome from './VotesButtonHome';

const GameCard = (props) => {
    const [votedForThisTeamId, setVotedForThisTeamId] = useState(
        props.votedForTeamId,
    );
    const voteRef = useRef(props.votedForTeamId);
    voteRef.current = votedForThisTeamId;

    const acctId = props.accountId;
    const gmId = props.gameId;

    const handleVoteClick = (updatedVotedForTeamId) => {
        console.log('clicked vote for TeamId: ', updatedVotedForTeamId);
        //setVotedForThisTeamId(updatedVotedForTeamId);
        //setMovies(prevMovies => ([...prevMovies, ...result]));
        setVotedForThisTeamId(updatedVotedForTeamId);
        console.log('votedForThisTeamId is: ', votedForThisTeamId);
        console.log('voteRef is: ', voteRef.current);
        const gameVoteRequest = {
            gameId: gmId,
            accountId: acctId,
            votedForTeamId: updatedVotedForTeamId,
            // votedForTeamId: votedForThisTeamId,
        };

        // axios.post(`http://localhost:5000/api/votes/${props.gameId}/${props.accountId}`, votedForThisTeamId,).then()...
        axios
            .post(`http://localhost:5000/api/votes/`, gameVoteRequest)
            .then((resp) => {
                const votedForTeamIdReturnedFromDatabase = resp.data;
                console.log(
                    'votedForThisTeamId response is: ',
                    votedForTeamIdReturnedFromDatabase,
                ); //14
                // setVotedForThisTeamId(votedForTeamIdReturnedFromDatabase);
                setVotedForThisTeamId(updatedVotedForTeamId);
                voteRef.current = votedForTeamIdReturnedFromDatabase;
                console.log(
                    'useState votedForThisTeamId is updated to: ',
                    votedForThisTeamId,
                );
                console.log(
                    'useRef voteRef.current is updated to: ',
                    voteRef.current,
                );
            });
    };

    useEffect(() => {}, [votedForThisTeamId, voteRef]);

    return (
        <div className='game'>
            <table cellSpacing='8' className='game-module'>
                <thead className='top-bar'>
                    <tr>
                        <th className='game-time' colSpan='2'>
                            {props.gameTime}
                        </th>
                        <th className='our-prediction'>Win %</th>
                        <th className='vote'>Vote</th>
                        <th className='score'>Score</th>
                    </tr>
                </thead>
                <tbody className='game-body'>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='logo-games logo-left'>
                            <img
                                className='logo-img'
                                src={`../../../img/profile-pics/${props.homeTeamName}.svg`}
                                alt='loading'
                            />
                        </td>
                        <td className='team-name-left'>{props.homeTeamName}</td>
                        <td className='pred-win'>{props.homeWinPercent}</td>
                        <td>
                        <button
                            value={props.homeTeamId}
                            onClick={(e) => handleVoteClick(e.target.value)}
                            className={`${
                                props.homeTeamId === props.voteReference
                                    ? 'vote-button voted-for'
                                    : 'vote-button not-voted-for'
                            }`}>
                            {props.homeTeamId === props.voteReference
                                ? '✔️'
                                : 'vote'}
                        </button>
                          {/* <VotesButtonHome homeTeamId={props.homeTeamId} voteReference={voteRef.current} /> */}
                        </td>
                        <td className='team-score'>{props.homeFinalScore}</td>
                    </tr>
                    <tr>
                        <td className='logo-games logo-left'>
                            <img
                                className='logo-img'
                                src={`../../../img/profile-pics/${props.visitorTeamName}.svg`}
                                alt='loading'
                            />
                        </td>
                        <td className='team-name-left'>
                            {props.visitorTeamName}
                        </td>
                        <td className='pred-lose'>{props.visitorWinPercent}</td>
                        <td>
                            <button
                                value={props.visitorTeamId}
                                onClick={(e) => handleVoteClick(e.target.value)}
                                className={`${
                                    props.visitorTeamId === voteRef.current
                                        ? 'vote-button voted-for'
                                        : 'vote-button not-voted-for'
                                }`}>
                                {props.visitorTeamId === voteRef.current
                                    ? '✔️'
                                    : 'vote'}
                            </button>
                        </td>
                        <td className='team-score'>
                            {props.visitorFinalScore}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GameCard;
