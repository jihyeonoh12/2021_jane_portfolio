import './App.css';
import './styles/password.css';

import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'

import Home from './pages/Home';
import About from './pages/About';
import MenuUiux from './pages/MenuUiux';
import Footer from './components/Footer';

import PostProteinPlus from './pages/PostProteinPlus';
import PostCompany from './pages/PostCompany';
import PostCdl from './pages/PostCdl';
import PostMealPlanMenu from './pages/PostMealPlanMenu';
import PostRebrand from './pages/PostRebrand';
import PostWeatherApp from './pages/PostWeatherApp';

import ScrollToTop from './ScrollToTop';




import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'



function App() {
  return (

    // <Protect sha512='5522a95bd7abfa96fcbfe70557c1043b0f76c8311238bf888299c6f53a29b3a6c782a873663e70964bbb59dcf24f9158bf096df3c356115a629ff7db69c0047f'>

    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/uiux-work"><MenuUiux /></Route>

        <Route exact path="/post-protein-plus"><PostProteinPlus /></Route>
        <Route exact path="/post-company"><PostCompany /></Route>
        <Route exact path="/post-cdl"><PostCdl /></Route>
        <Route exact path="/post-mealplan-menu"><PostMealPlanMenu /></Route>
        <Route exact path="/post-rebrand"><PostRebrand /></Route>
        <Route exact path="/post-weather-app"><PostWeatherApp /></Route>






      </Switch>
      <Footer />

    </div>

    // </Protect>
  );
}

export default App;
