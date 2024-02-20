
import React from 'react';
import Card from './Card'
import '../styles/general.css';
import thumb_protein_plus from '../images/protein_plus/thumbnail_protein_plus.jpg';
import thumb_company from '../images/company/company.jpg';
import thumb_cdl from '../images/cdl/cdl.jpg';
import thumb_mealplan from '../images/meal_plan_menu/mobile.jpg';
import thumb_rebrand from '../images/rebrand/tray.png';
import thumb_weather_app from '../images/weather_app/thumb.jpeg';




import { NavLink } from 'react-router-dom';

class Body extends React.Component {
    render() {
        return (
            <div className="body">
            <div className="body_container">
                <NavLink to="/post-company"><Card image={thumb_company} title="Company Page" description="Design and styling of the company page"/></NavLink>
                <NavLink to="/post-cdl"><Card image={thumb_cdl} title="CDL Meals" description="Redesign and development of CDL website"/></NavLink>
                <NavLink to="/post-mealplan-menu"><Card image={thumb_mealplan} title="Menu + Meal Plan Page" description="Improvement user flow by rduction of drop off rate"/></NavLink>
                <NavLink to="/post-rebrand"><Card image={thumb_rebrand} title="Rebranding Corporate Identity" description="Change of branding to better appeal to company's target audience"/></NavLink>
                <NavLink to="/post-protein-plus"><Card image={thumb_protein_plus} title="Protein+ Meal Service Page" description="Research and redesign of service page tailored to the target audience"/></NavLink>
                <NavLink to="/post-weather-app"><Card image={thumb_weather_app} title="Weather Dashboard" description="Development of a weather dashboard using OpenWeather API"/></NavLink>

                </div>
            </div>
        )

    }
}

export default Body