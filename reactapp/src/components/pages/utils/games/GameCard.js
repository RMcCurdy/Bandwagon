import Votes from './Votes';

const GameCard = (props) => {
    const gameId = props.gameId;
    const gameTime = props.gameTime;
    const homeTeamId = props.homeTeamId;
    const visitorTeamId = props.visitorTeamId;
    const homeWinPercent = props.homeWinPercent;
    const visitorWinPercent = props.visitorWinPercent;
    const homeFinalScore = props.homeFinalScore;
    const visitorFinalScore = props.visitorFinalScore;
    const homeTeamName = props.homeTeamName;
    const visitorTeamName = props.visitorTeamName;
    const accountId = props.accountId;
    const votedForTeamId = props.votedForTeamId;

    return (
        <div className='game'>
            <table cellSpacing='8' className='game-module'>
                <thead className='top-bar'>
                    <tr>
                        <th className='game-time' colSpan='2'>
                            {gameTime}
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
                                src={`../../../img/profile-pics/${homeTeamName}.svg`}
                                alt='loading'
                            />
                        </td>
                        <td className='team-name-left'>{homeTeamName}</td>
                        <td className='pred-win'>{homeWinPercent}</td>
                        <td rowSpan='2'>
                                <Votes
                                    accountId={accountId}
                                    gameId={gameId}
                                    homeTeamId={homeTeamId}
                                    visitorTeamId={visitorTeamId}
                                    votedForTeamId={votedForTeamId}
                                    isDisabled={(homeFinalScore > 0 || visitorFinalScore > 0) ? 'disabled' : ''}
                                />  
                        </td>
                        <td className='team-score'>{homeFinalScore}</td>
                    </tr>
                    <tr>
                        <td className='logo-games logo-left'>
                            <img
                                className='logo-img'
                                src={`../../../img/profile-pics/${visitorTeamName}.svg`}
                                alt='loading'
                            />
                        </td>
                        <td className='team-name-left'>
                            {props.visitorTeamName}
                        </td>
                        <td className='pred-lose'>{visitorWinPercent}</td>
                        <td className='team-score'>{visitorFinalScore}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GameCard;
