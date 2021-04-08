import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {Link, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/about"><About /></Route>
      </Switch>
    </div>
  );
}

export default App;
