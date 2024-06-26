
import React from 'react';
import Card from '../components/Card'
import '../styles/general.css';
import thumb_protein_plus from '../images/protein_plus/thumbnail_protein_plus.jpg';
import thumb_company from '../images/company/company.jpg';
import thumb_cdl from '../images/cdl/cdl.jpg';
import thumb_mealplan from '../images/meal_plan_menu/mobile.jpg';
import thumb_rebrand from '../images/rebrand/tray.png';



import { NavLink } from 'react-router-dom';

class MenuCoding extends React.Component {
    render() {
        return (
            <div className="body px-0 py-[120px]">
            <h1>UIUX Projects</h1>
            <div className="body_container">
                <NavLink to="/post-company"><Card image={thumb_company} title="Company Page" description="Design company page and help build it on the website"/></NavLink>
                <NavLink to="/post-cdl"><Card image={thumb_cdl} title="CDL Meals" description="Redesigning and building CDL website"/></NavLink>

                <NavLink to="/post-protein-plus"><Card image={thumb_protein_plus} title="Protein+ Meal Plan Page" description="Research and redesign of service page that tailored for its target audience"/></NavLink>
                <NavLink to="/post-mealplan-menu"><Card image={thumb_mealplan} title="Reducing drop off rate by improving user flow" description="Updating user journey to the cart by fullfilling user's need"/></NavLink>
                <NavLink to="/post-rebrand"><Card image={thumb_rebrand} title="Rebranding Corporate Identity" description="Updating user journey to the cart by fullfilling user's need"/></NavLink>
                </div>
            </div>
        )

    }
}

export default MenuCoding