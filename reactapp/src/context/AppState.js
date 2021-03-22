import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
 
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [favoriteBadge, setFavoriteBadge] = useState('');
  const [message, setMessage] = useState('');

  return (
    <AppContext.Provider value={{firstname, setFirstName, lastname, setLastName, username, setUserName, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, favoriteBadge, setFavoriteBadge, message, setMessage}}>
      {props.children}  
    </AppContext.Provider>
  );
};

export default AppState;
