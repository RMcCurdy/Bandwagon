import AppContext from './AppContext';
import { useState } from 'react';

const AppState = (props) => {
  const initialGlobalState = {
    firstname: '',
    lastname: '',
    username: '',
    isLoggedIn: false,
    isAdmin: false,
    favoriteBadge: '',
    message: '',
  }

  const [globalState, setGlobalState] = useState(initialGlobalState);

  return (
    <AppContext.Provider value={{globalState, setGlobalState}}>
      {props.children}  
    </AppContext.Provider>
  );
};

export default AppState;
