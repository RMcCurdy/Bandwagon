import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [favoriteBadge, setFavoriteBadge] = useState('');
  const [message, setMessage] = useState('');

  return (
    <AppContext.Provider value={{firstName, setFirstName, lastName, setLastName, username, setUserName, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, favoriteBadge, setFavoriteBadge, message, setMessage}}>
      {props.children}  
    </AppContext.Provider>
  );
};

export default AppState;
