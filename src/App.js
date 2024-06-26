import './App.css';

import { Route } from 'react-router-dom';
import PasswordComponent from './components/PasswordComponent';
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
import { useAuthenticate } from './hooks/useAuthenticate';

function App() {

  const { authenticated, handlePasswordSubmit, errorMsg } = useAuthenticate();

  const renderContent = () => {
    if (authenticated) {
      return (
      <div className="App">
      <Navbar />
      <ScrollToTop />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/uiux-work"><MenuUiux /></Route>

        <Route exact path="/post-protein-plus"><PostProteinPlus /></Route>
        <Route exact path="/post-company"><PostCompany /></Route>
        <Route exact path="/post-cdl"><PostCdl /></Route>
        <Route exact path="/post-mealplan-menu"><PostMealPlanMenu /></Route>
        <Route exact path="/post-rebrand"><PostRebrand /></Route>
        <Route exact path="/post-weather-app"><PostWeatherApp /></Route>
      <Footer />
    </div>
      );
    } else {
      return <PasswordComponent onPasswordSubmit={handlePasswordSubmit} errorMsg={errorMsg}/>;
    }
  };

  return <div>{renderContent()}</div>;
}

export default App;
