import './App.css';

import { Route } from 'react-router-dom';
import { useAuthenticate } from './hooks/useAuthenticate';
import ScrollToTop from './ScrollToTop';

import PasswordComponent from './components/PasswordComponent';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import MenuUiux from './pages/MenuUiux';
import MenuCoding from './pages/MenuCoding';

import Footer from './components/Footer';

import PostProteinPlus from './pages/PostProteinPlus';
import PostCompany from './pages/PostCompany';
import PostCdl from './pages/PostCdl';
import PostMealPlanMenu from './pages/PostMealPlanMenu';
import PostRebrand from './pages/PostRebrand';
import PostWeatherApp from './pages/PostWeatherApp';
import PostFlexibleContent from './pages/PostFlexibleContent';
import PostSitewideCTA from './pages/PostSitewideCTA';
import PostPreference from './pages/PostPreference';
import PostRewards from './pages/PostRewards';
import PostSnackPopup from './pages/PostSnackPopup';
import PostFnlNewHome from './pages/PostFnlNewHome';
import PostDashboard from './pages/PostDashboard';
import PostCheffy from './pages/PostCheffy';
import PostMeme from './pages/PostMeme';
import PostNote from './pages/PostNote';



function App() {

  const { authenticated, handlePasswordSubmit, errorMsg } = useAuthenticate();

  const renderContent = () => {
    if (authenticated) {
      return (
      <div className="App mt-[120px]">
      <Navbar />
      <ScrollToTop />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/uiux"><MenuUiux /></Route>
        <Route exact path="/coding"><MenuCoding /></Route>
        <Route exact path="/post-protein-plus"><PostProteinPlus /></Route>
        <Route exact path="/post-company"><PostCompany /></Route>
        <Route exact path="/post-cdl"><PostCdl /></Route>
        <Route exact path="/post-mealplan-menu"><PostMealPlanMenu /></Route>
        <Route exact path="/post-rebrand"><PostRebrand /></Route>
        <Route exact path="/post-weather-app"><PostWeatherApp /></Route>
        <Route exact path="/post-flexible-content"><PostFlexibleContent /></Route>
        <Route exact path="/post-sitewide-cta"><PostSitewideCTA /></Route>
        <Route exact path="/post-preference"><PostPreference /></Route>
        <Route exact path="/post-rewards"><PostRewards /></Route>
        <Route exact path="/post-snack-popup"><PostSnackPopup /></Route>
        <Route exact path="/post-fnl-new-home"><PostFnlNewHome /></Route>
        <Route exact path="/post-dashboard"><PostDashboard /></Route>
        <Route exact path="/post-cheffy"><PostCheffy /></Route>
        <Route exact path="/post-meme"><PostMeme /></Route>
        <Route exact path="/post-note"><PostNote /></Route>


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
