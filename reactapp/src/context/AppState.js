import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [totalPointsBalance, setTotalPointsBalance] = useState(0);
    const [totalPointsSpent, setTotalPointsSpent] = useState(0);
    const [totalPointsEarned, setTotalPointsEarned] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [profilePic, setProfilePic] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [topBadge, setTopBadge] = useState('');
    const [message, setMessage] = useState('');
    const [lboard, setLboard] = useState([]);
    const [gameDates, setGameDates] = useState([]);
    const [gameDate, setGameDate] = useState(0);
    const [gameData, setGameData] = useState([]);
    const [merchandise, setMerchandise] = useState([]);
    const [teams, setTeams] = useState([]);
    const [orderId, setOrderId] = useState(0);
    const [clickVotedForTeamId, setClickVotedForTeamId] = useState(0);

    return (
        <AppContext.Provider
            value={{
                id,
                setId,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                username,
                setUserName,
                email,
                setEmail,
                totalPointsBalance,
                setTotalPointsBalance,
                totalPointsSpent,
                setTotalPointsSpent,
                totalPointsEarned,
                setTotalPointsEarned,
                isLoggedIn,
                setIsLoggedIn,
                isAdmin,
                setIsAdmin,
                profilePic,
                setProfilePic,
                dateCreated,
                setDateCreated,
                topBadge,
                setTopBadge,
                message,
                setMessage,
                lboard,
                setLboard,
                gameDates,
                setGameDates,
                gameDate,
                setGameDate,
                gameData,
                setGameData,
                merchandise,
                setMerchandise,
                teams,
                setTeams,
                orderId,
                setOrderId,
                clickVotedForTeamId,
                setClickVotedForTeamId,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
