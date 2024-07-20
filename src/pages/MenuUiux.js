
import React from 'react';
import Card from '../components/Card'
import thumb_protein_plus from '../images/protein_plus/thumbnail_protein_plus.jpg';
import thumb_company from '../images/company/company.jpg';
import thumb_cdl from '../images/cdl/cdl.jpg';
import thumb_mealplan from '../images/meal_plan_menu/mobile.jpg';
import thumb_rebrand from '../images/rebrand/tray.png';

import thumb_dashboard from '../images/dashboard/dashboard_thumb.jpg';


import { NavLink } from 'react-router-dom';

class MenuUiux extends React.Component {
    render() {
        return (
            <div className="body px-0 py-[120px]">
            <h1>UIUX Projects</h1>
            <div className="body_container">
            <NavLink to="/post-dashboard"><Card preheader="design" image={thumb_dashboard} title="Customer Dashboard" description="Designing and User-Testing Dashboard Prototypes"/></NavLink>
            <NavLink to="/post-company"><Card preheader="coding, design" image={thumb_company} title="Company Page" description="Designing and Building Company Page"/></NavLink>
            <NavLink to="/post-cdl"><Card preheader="coding, design" image={thumb_cdl} title="CDL Meals" description="Rebranding and Rebuiding CDL website"/></NavLink>
            <NavLink to="/post-mealplan-menu"><Card preheader="design" image={thumb_mealplan} title="Menu + Meal Plan Page" description="Minimizing Drop-off Rates by Enhancing User Flow"/></NavLink>
            <NavLink to="/post-rebrand"><Card preheader="design" image={thumb_rebrand} title="Fresh N' Lean" description="Revamping Corporate Identity and Redesigning Packaging"/></NavLink>
            <NavLink to="/post-protein-plus"><Card preheader="design" image={thumb_protein_plus} title="Protein+ Meal Service Page" description="Redesigning service page"/></NavLink>

                </div>
            </div>
        )

    }
}

export default MenuUiux