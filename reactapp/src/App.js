import './App.css';
import './styles/styles.css';
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import Nav from './components/Nav';
import Homebase from './components/Homebase';

function App() {
  return (
      <div className="App">
      <Router>
        <Nav />
        <Homebase />
      </Router>
      </div>
  );
}


export default App;
