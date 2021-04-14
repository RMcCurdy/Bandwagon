import React, { useContext } from 'react';
import Votes from './Votes';
import Voted from './Voted';
import axios from 'axios';
import AppContext from '../../../../context/AppContext';

const GameCard = (props) => {
    const gameTime = props.gameTime;

    const {
        setClickVotedForTeamId,
        setGameDate,
    } = useContext(AppContext);

    const handleVoteClick = (accountId, gameId, newVoteId, refreshGameDate) => {
        const gameVoteRequest = {
            accountId: accountId,
            gameId: gameId,
            votedForTeamId: newVoteId,
        };
        axios
            .post(`http://localhost:5000/api/votes/`, gameVoteRequest)
            .then((resp) => {
                const votedForTeamIdReturnedFromDatabase = resp.data;
                console.log(
                    'click vote resp: ',
                    votedForTeamIdReturnedFromDatabase,
                ); //14
                // finally, once the data has come back from the api votes table
                setClickVotedForTeamId(
                    votedForTeamIdReturnedFromDatabase.votedForTeamId,
                );
                console.log('GameCard > refeshGameDate is: ', refreshGameDate);
                setGameDate(0);
                setGameDate(refreshGameDate);
            });
    };

    const votes = (
        <Votes
            handleVoteClick={handleVoteClick}
            accountId={props.accountId}
            gameId={props.gameId}
            gameDate={props.gameDate}
            homeTeamId={props.homeTeamId}
            visitorTeamId={props.visitorTeamId}
            votedForTeamId={props.votedForTeamId}
            isVotingDisabled={props.isVotingDisabled}
        />
    );
    const voted = (
        <Voted
            handleVoteClick={handleVoteClick}
            accountId={props.accountId}
            gameId={props.gameId}
            gameDate={props.gameDate}
            homeTeamId={props.homeTeamId}
            visitorTeamId={props.visitorTeamId}
            votedForTeamId={props.votedForTeamId}
            isVotingDisabled={props.isVotingDisabled}
        />
    );

    return (
        <div className='game'>
            <table cellSpacing='8' className='game-module'>
                <thead className='top-bar'>
                    <tr>
                        <th className='game-time' colSpan='2'>
                            {gameTime}
                            {/* {props.gameDate} | #{props.gameId} */}
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
                        <td rowSpan='2'>
                            {props.isVotingDisabled ? voted : votes}
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
