
import React from 'react';
import Card from './Card'
import '../styles/general.css';
import thumb_protein_plus from '../images/protein_plus/thumbnail_protein_plus.jpg';
import { NavLink } from 'react-router-dom';

class Body extends React.Component {
    render() {
        return (
            <div className="body">
            <div className="body_container">
                <NavLink to="/post-protein-plus"><Card image={thumb_protein_plus} title="Protein+ Meal Plan Page" description="Research and redesign of service page that tailored for its target audience"/></NavLink>
                <Card image={thumb_protein_plus} title="Protein Plus" description=""/>
                <Card image={thumb_protein_plus} title="Protein Plus" description=""/>
                <Card image={thumb_protein_plus} title="Protein Plus" description=""/>
                <Card image={thumb_protein_plus} title="Protein Plus" description=""/>
                </div>
            </div>
        )

    }
}

export default Body