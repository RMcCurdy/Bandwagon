import AppContext from './AppContext';

const AppState = (props) => {
  return (
    <AppContext.Provider value={{
      message: "This is from the context",
      isLoggedIn: false,
      theme: 'dark',
      firstName: 'Robert',
      lastName: 'McCurdy',
      favoriteBadge: 'Cheese',
      username: 'Rajon'
    }}
    >
      {props.children}  
    </AppContext.Provider>
  );
};

export default AppState;
