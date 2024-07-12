
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
// import PostContentRight from '../components/PostContentRight'
import PostGallery from '../components/PostGallery'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import Footer from '../components/Footer'
import ThreeColumn from '../components/ThreeColumn'

import PostContentList from '../components/PostContentList'



import Hero_protein_plus from '../images/protein_plus/2020 Protein Plus - hero.jpg';
import content1 from '../images/protein_plus/2020 Protein Plus - content1.png';
import icon1 from '../images/icons/User.png';
import icon2 from '../images/icons/SEO.png';
import icon3 from '../images/icons/Competitor.png';

import targetA from '../images/protein_plus/target-audience.jpg';




class PostProteinPlus extends React.Component {
    render() {
        return (
            <div className="post_body">
            <div className="post_container">
                <PostHero image={Hero_protein_plus} title="Protein+ Meal Plan Page" description="Research and redesign of service page that tailored for its target audience"
                from="Company" company="Fresh N Lean" date="May 2019" role1="• UX Research" role2="• Design" role3="• Launch AB Test" role4=""
                />
                <PostContent classes="" image={content1} title="What is Performance meal?" body="Fresh n’ Lean provides performance meal plan that specifically targets fitness enthusiast and professional athlets who want nutrient dense and high-protein meal that fits their diet." h3="" p=""/>
                <ThreeColumn title="UX Research" image1={icon1} image2={icon2} title2={"Keyword Research"} body2={"Find search terms to figure out which marketing funnel stage the users are from and serve them with right contents"} image3={icon3}/>

                <PostContentList classes="flex-row-reverse" image={targetA} title="Target Audience" 
                text={'• Age group : 25 – 40yrs \n • Professionals who don’t have time to cook \n • Fitness enthusiast who are health conscious \n • people who are tired of eating prepped meals \n • Who wants good source of energy'} />
                
                <PostContentList classes="" image={content1} title="Value props" 
                text={'• Macro breakdown to keep track of calories \n • Easy to customize meal by adding bulk sides \n • Nutrient dense meal for high performance \n • Easy to eat and carry around (heat and eat) \n • Weekly delivered to their gym'} />
                
                <PostContent classes="flex-row-reverse" image={content1} title="Design solution :" 
                body="
                Increase credibility of brand using social proofs.
                Show a example of professional athlets to make the content relatable to potential users. 
                Showing photos people excersizing to show an end result of consuming the product. 
                Show value prop in a layout design that user can understand easily."
                 h3="" p=""/>
                <PostGallery image1={content1} image2={content1} image3={Hero_protein_plus} title="Final Design System" body="Fresh n Lean is a meal delivery service that provides chef prepared, organic" button="This is Button"/>
                <PostOutcome image={content1} title="Final Design System" body="Fresh n Lean is a meal delivery service that provides chef prepared, organic" button="This is Button" classes="hidden"/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostProteinPlus