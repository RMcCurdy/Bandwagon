import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const [favoriteBadge, setFavoriteBadge] = useState('');
  const [message, setMessage] = useState('');
  const [lboard, setLboard] = useState([]);

  return (
    <AppContext.Provider value={{firstName, setFirstName, lastName, setLastName, username, setUserName, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, profilePic, setProfilePic, favoriteBadge, setFavoriteBadge, message, setMessage, lboard, setLboard}}>
      {props.children}  
    </AppContext.Provider>
  );
};

export default AppState;
