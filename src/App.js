import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/about"><About /></Route>
      </Switch>
    </div>
  );
}

export default App;
