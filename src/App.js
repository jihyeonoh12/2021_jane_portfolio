import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PostProteinPlus from './pages/PostProteinPlus';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/post-protein-plus"><PostProteinPlus /></Route>
      </Switch>
    </div>
  );
}

export default App;
