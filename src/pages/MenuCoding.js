
import React from 'react';
import Card from '../components/Card'
import thumb_company from '../images/company/company.jpg';
import thumb_preference from '../images/preference/Preference.jpg';
import thumb_flexibleContent from '../images/flexible_content/FlexibleContent.jpg';
import thumb_sitewide_cta from '../images/sitewide_cta/PromoCTA.jpg';
import thumb_rewards from '../images/rewards/Rewards.jpg';
import thumb_popup from '../images/snack_popup/Rectangle 1698.png';
import thumb_fnl_homepage from '../images/fnl_homepage/FNL_thumb.jpg';
import thumb_cdl from '../images/cdl/cdl.jpg';
import thumb_weather_app from '../images/weather_app/thumb.jpeg';


import { NavLink } from 'react-router-dom';

class MenuCoding extends React.Component {
    render() {
        return (
            <div className="body px-0 py-[120px]">
                <h1>Coding Projects</h1>
                <div className="body_container">
                <NavLink to="/post-sitewide-cta"><Card preheader="coding" image={thumb_sitewide_cta} title="Sitewide Promo CTA" description="Creating Automated CTA Buttons That Applies Promo Code"/></NavLink>
                <NavLink to="/post-snack-popup"><Card preheader="coding" image={thumb_popup} title="Snack Popup" description="Developing and A/B testing a popup modal for upselling add-ons"/></NavLink>
                <NavLink to="/post-rewards"><Card preheader="coding" image={thumb_rewards} title="Rewards & Referral" description="Developing the Rewards and Referral Page and Its Features"/></NavLink>
                <NavLink to="/post-fnl-new-home"><Card preheader="coding" image={thumb_fnl_homepage} title="Fresh N Lean New Homepage" description="Building the new Fresh N Lean homepage"/></NavLink>
                <NavLink to="/post-preference"><Card preheader="coding" image={thumb_preference} title="Preference base" description="Converting meal plan base into preference base"/></NavLink>
                <NavLink to="/post-flexible-content"><Card preheader="coding" image={thumb_flexibleContent} title="Flexible Content" description="Refactor WordPress templates using flexible content"/></NavLink>
                <NavLink to="/post-cdl"><Card preheader="coding, design" image={thumb_cdl} title="CDL Meals" description="Rebranding and Rebuiding CDL website"/></NavLink>
                <NavLink to="/post-company"><Card preheader="coding, design" image={thumb_company} title="Company Page" description="Designing and Building Company Page"/></NavLink>
                <NavLink to="/post-weather-app"><Card preheader="coding" image={thumb_weather_app} title="Weather Dashboard" description="Building Weather Dashboard Utilizing the OpenWeather API"/></NavLink>

                </div>
            </div>
        )

    }
}

export default MenuCoding