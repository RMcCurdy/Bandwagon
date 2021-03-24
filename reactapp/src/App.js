import './App.css';
import './styles/styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/pages/web/Nav';
import Homebase from './components/pages/web/Homebase';

import AppState from './context/AppState';
// import { useContext } from 'react';
// import AppContext from '../../reactapp/src/context/AppContext';

function App() {

  // const [isLoggedIn] = useContext(AppContext);
  const style = {
    marginTop: '6em'
  }

  return (
      <div className="App">
      <AppState>
        <Router>
          <Nav />
          <div style={style}></div>
          <Homebase />
        </Router>
      </AppState>
      </div>
  );
}


export default App;
