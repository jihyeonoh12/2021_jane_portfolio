
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
// import PostContentRight from '../components/PostContentRight'
import PostGallery from '../components/PostGallery'
import PostFooter from '../components/PostFooter'
import ThreeColumn from '../components/ThreeColumn'

import PostContentList from '../components/PostContentList'



import Hero_protein_plus from '../images/protein_plus/2020 Protein Plus - hero.jpg';
import content1 from '../images/protein_plus/2020 Protein Plus - content1.png';
import designSolution from '../images/protein_plus/designSolution.jpg';
import valueProp from '../images/protein_plus/Value Prop.jpg';
import gallery1 from '../images/protein_plus/Design Solution.jpg';
import gallery2 from '../images/protein_plus/2020 Protein Plus - body2.jpg';
import gallery3 from '../images/protein_plus/protein gallery desktop.jpg';


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
                from="Company" company="Fresh N Lean" date="May 2019" role1="• UX Research" role2="• Designing page" role3="" role4=""
                />
                <PostContent classes="" image={content1} title="What is Performance meal?" body="Fresh n’ Lean provides performance meal plan that specifically targets fitness enthusiast and professional athlets who want nutrient dense and high-protein meal that fits their diet." h3="" p=""/>
                <ThreeColumn title="UX Research" image1={icon1} image2={icon2} title2={"Keyword Research"} body2={"Find search terms to figure out which marketing funnel stage the users are from and serve them with right contents"} image3={icon3}/>

                <PostContentList classes="flex-row-reverse" image={targetA} title="Target Audience" 
                text={'• Age group : 25 – 40yrs \n • Professionals who don’t have time to cook \n • Fitness enthusiast who are health conscious \n • people who are tired of eating prepped meals \n • Who wants good source of energy'} />
                
                <PostContentList classes="" image={valueProp} title="Value props" 
                text={'• Macro breakdown to keep track of calories \n • Easy to customize meal by adding bulk sides \n • Nutrient dense meal for high performance \n • Easy to eat and carry around (heat and eat) \n • Weekly delivered to their gym'} />
                
                <PostContent classes="flex-row-reverse" image={designSolution} title="Design solution" 
                body="
                Enhance brand credibility with social proof. Feature examples of professional athletes to make the content relevant and relatable to potential users. Showcase photos of people exercising to illustrate the results of consuming the product. Present value propositions in a user-friendly layout for easy understanding.
                "
                 h3="" p=""/>
                <PostGallery image1={gallery1} image2={gallery2} image3={gallery3} title="Final Design System" body="Fresh n Lean is a meal delivery service that provides chef prepared, organic" />
                {/* <PostOutcome image={content1} title="Final Design" classes="hidden"/> */}
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostProteinPlus