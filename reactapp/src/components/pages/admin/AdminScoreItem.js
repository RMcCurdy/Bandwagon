import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

const AdminScoreItem = (props) => {
    const { gameData, setGameData } = useContext(AppContext);

    const idx = props.objId;

    const gameTime = props.gameTime;
    const homeWinPercent = props.homeWinPercent;
    const visitorWinPercent = props.visitorWinPercent;
    const homeTeamName = props.homeTeamName;
    const visitorTeamName = props.visitorTeamName;

    //https://stackoverflow.com/questions/54035639/react-select-onchange-by-index
    const handleScoreUpdateHome = (finalScoreHome) => {
        console.log('home score index to update is:', idx);
        console.log('home score updated to', finalScoreHome);

        // from https://www.youtube.com/watch?v=VgtvOGnuG7U
        const copyOfAllGameDataObjects = [...gameData];
        copyOfAllGameDataObjects[idx] = {
            ...copyOfAllGameDataObjects[idx],
            homeFinalScore: finalScoreHome,
        };
        setGameData(copyOfAllGameDataObjects);
    };
    const handleScoreUpdateVisitor = (score) => {
        console.log('visitor score index to update is:', idx);
        console.log('visitor score updated to', score);

        // from https://www.youtube.com/watch?v=VgtvOGnuG7U
        const copyOfAllGameDataObjects = [...gameData];
        copyOfAllGameDataObjects[idx] = {
            ...copyOfAllGameDataObjects[idx],
            visitorFinalScore: score,
        };
        setGameData(copyOfAllGameDataObjects);
    };


    return (
        <div className='game' style={{ margin: '0.5rem auto' }}>
            {/* <pre>{JSON.stringify({ gameData })}</pre> */}
            <table cellSpacing='8' className='game-module'>
                <thead className='top-bar'>
                    <tr>
                        <th className='game-time' colSpan='2'>
                            {gameTime}
                        </th>
                        <th className='our-prediction'>Win %</th>
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
                        <td className='team-score'>
                            {' '}
                            <input
                                className='edit-profile-inputs'
                                type='text'
                                value={props.homeFinalScore}
                                onChange={(e) => {
                                    handleScoreUpdateHome(e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='logo-games logo-left'>
                            <img
                                className='logo-img'
                                src={`../../../img/profile-pics/${visitorTeamName}.svg`}
                                alt='loading'
                            />
                        </td>
                        <td className='team-name-left'>{visitorTeamName}</td>
                        <td className='pred-lose'>{visitorWinPercent}</td>
                        <td className='team-score'>
                            {' '}
                            <input
                                className='edit-profile-inputs'
                                type='text'
                                value={props.visitorFinalScore}
                                onChange={(e) =>
                                    handleScoreUpdateVisitor(e.target.value)
                                }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            {/* <div>
                <button onClick={(e) => handleSave()}>Save</button>
            </div> */}
        </div>
    );
};

export default AdminScoreItem;
