import './App.css';
import './styles/password.css';

import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PostProteinPlus from './pages/PostProteinPlus';

import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'



function App() {
  return (

    <Protect sha512='fb31e21722dd473649f6744d8040bd51199b418c4196e10b5fb9df9abd09a416603807ae032086c76a238bc08c1fb2e3d5b89ceae5e05d5dbf1a655167c66f0f'>

    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/post-protein-plus"><PostProteinPlus /></Route>
      </Switch>
    </div>

    </Protect>
  );
}

export default App;
