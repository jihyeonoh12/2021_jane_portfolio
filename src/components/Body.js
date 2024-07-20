
import React from 'react';
import Card from './Card'

import thumb_cdl from '../images/cdl/cdl.jpg';
import thumb_mealplan from '../images/meal_plan_menu/mobile.jpg';
import thumb_preference from '../images/preference/Preference.jpg';
import thumb_rewards from '../images/rewards/Rewards.jpg';
import thumb_popup from '../images/snack_popup/Rectangle 1698.png';
import thumb_dashboard from '../images/dashboard/dashboard_thumb.jpg';



import { NavLink } from 'react-router-dom';

class Body extends React.Component {
    render() {
        return (
            <div className="body">
            <div className="body_container">
                {/* <NavLink to="/post-sitewide-cta"><Card preheader="coding" image={thumb_sitewide_cta} title="Sitewide Promo CTA" description="Creating Automated CTA Buttons That Applies Promo Code"/></NavLink> */}
                <NavLink to="/post-snack-popup"><Card preheader="coding" image={thumb_popup} title="Snack Popup" description="Developing and A/B testing a popup modal for upselling add-ons"/></NavLink>
                <NavLink to="/post-rewards"><Card preheader="coding" image={thumb_rewards} title="Rewards & Referral" description="Developing the Rewards and Referral Page and Its Features"/></NavLink>
                <NavLink to="/post-preference"><Card preheader="coding" image={thumb_preference} title="Preference base" description="Converting meal plan base into preference base"/></NavLink>
                <NavLink to="/post-dashboard"><Card preheader="design" image={thumb_dashboard} title="Customer Dashboard" description="Designing and User-Testing Dashboard Prototypes"/></NavLink>
                <NavLink to="/post-cdl"><Card preheader="coding, design" image={thumb_cdl} title="CDL Meals" description="Rebranding and Rebuiding CDL website"/></NavLink>
                <NavLink to="/post-mealplan-menu"><Card preheader="design" image={thumb_mealplan} title="Menu + Meal Plan Page" description="Minimizing Drop-off Rates by Enhancing User Flow"/></NavLink>
                </div>
            </div>
        )

    }
}

export default Body