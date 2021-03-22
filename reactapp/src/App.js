import './App.css';
import './styles/styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/pages/web/Nav';
import Homebase from './components/pages/web/Homebase';

import AppState from './context/AppState';

function App() {
  return (
      <div className="App">
      <AppState>
        <Router>
          <Nav />
          <div style={{marginTop: '80px'}}></div>
          <Homebase />
        </Router>
      </AppState>
      </div>
  );
}


export default App;
