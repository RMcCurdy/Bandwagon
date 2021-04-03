import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [totalPointsBalance, setTotalPointsBalance] = useState('');
  const [totalPointsSpent, setTotalPointsSpent] = useState('');
  const [totalPointsEarned, setTotalPointsEarned] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [favoriteBadge, setFavoriteBadge] = useState('');
  const [message, setMessage] = useState('');
  const [lboard, setLboard] = useState([]);
  const [gameDates, setGameDates] = useState([]);
  const [gameDate, setGameDate] = useState(0);
  const [gameData, setGameData] = useState([]);

  return (
    <AppContext.Provider value={{firstName, setFirstName, lastName, setLastName, username, setUserName, email, setEmail, totalPointsBalance, setTotalPointsBalance, totalPointsSpent, setTotalPointsSpent, totalPointsEarned, setTotalPointsEarned, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, profilePic, setProfilePic, dateCreated, setDateCreated, favoriteBadge, setFavoriteBadge, message, setMessage, lboard, setLboard, gameDates, setGameDates, gameDate, setGameDate, gameData, setGameData}}>
      {props.children}  
    </AppContext.Provider>
  );
};

export default AppState;
