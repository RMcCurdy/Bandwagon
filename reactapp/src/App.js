import './App.css';
import './styles/styles.css';
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import Nav from './components/Nav';
import Homebase from './components/Homebase';

import AppState from './context/AppState';

function App() {
  return (
      <div className="App">
      <AppState>
        <Router>
          <Nav />
          <Homebase />
        </Router>
      </AppState>
      </div>
  );
}


export default App;
