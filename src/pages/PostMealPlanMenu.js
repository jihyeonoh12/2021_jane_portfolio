
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import ThreeColumn from '../components/ThreeColumn'
import PostGallery from '../components/PostGallery'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import Footer from '../components/Footer'
import PostContentList from '../components/PostContentList'

import hero_banner from '../images/meal_plan_menu/banner1.jpg';
import content1 from '../images/meal_plan_menu/meals.jpg';
import content2 from '../images/meal_plan_menu/target_audience.jpg';
import content3 from '../images/meal_plan_menu/problem.jpg';
import content4 from '../images/meal_plan_menu/solution.jpg';
import content5 from '../images/meal_plan_menu/desktop.jpg';
import content6 from '../images/meal_plan_menu/mobile.jpg';
import content7 from '../images/meal_plan_menu/menu.jpg';
import content8 from '../images/meal_plan_menu/desktops.jpg';
import content9 from '../images/meal_plan_menu/tools.jpg';

import icon1 from '../images/icons/User.png';
import icon2 from '../images/icons/Research.png';
import icon3 from '../images/icons/Competitor.png';

class PostMealPlanMenu extends React.Component {
    render() {
        return (
            <div className="post_body">
            <div className="post_container">
                <PostHero image={hero_banner} title="Minimizing Drop-off Rates by Enhancing User Flow" description="Design and building company page"
                    from="Company" company="Fresh N Lean" date="Apr. 2020" role1="• Conducting research" role2="• Analyzing Google Analytics data" role3="• Creating Prototype" role4="• Conducting A/B testing"
                />
                <PostContent classes="" image={content1} title="Menu and Meal Plan Page" body="
                Fresh N’ Lean provides a performance meal plan tailored for individuals seeking healthy food options and convenient meals, focusing on nutrient-dense, high-protein options that fit their dietary needs.
                " h3="" p=""/>
                <ThreeColumn title="UX Research" image1={icon1} image2={icon2} title2={"User Behavior"} body2={"Examining traffic, bounce rate, click-through rate, and conversion rate to study user behavior"} image3={icon3}/>

                <PostContentList classes="flex-row-reverse" image={content2} title="Target Audience" 
                text={'• Age group : 25 – 40yrs \n • Busy professionals who lack time to cook \n • Health-conscious fitness enthusiasts \n • Individuals tired of prepped meals \n • Seeking a good source of energy'} />
                
                <PostContent classes="" image={content3} title="UX Problem" body="
                Our research revealed a significant drop-off rate as users enter the order funnel. Our hypothesis suggests that the current user flow into the order page is too abrupt for users.
                " h3="" p=""/>

                <PostContent classes="flex-row-reverse" image={content4} title="UX solution" 
                body="
                To resolve this issue, our approach involves redesigning the menu page and creating a dedicated page to educate users about our meal plans, ensuring they can choose the right option before proceeding to the order funnel.                "
                 h3="" p=""/>
                 <PostContent classes="" image={content5} title="UI solution" 
                body="
                Assign each meal plan a thematic color and concept (e.g., paleo with a rustic vibe) to clearly differentiate them. Communicate and educate users on the key value propositions of each meal plan using icons and a breakdown of macro nutrients.
                "
                 h3="" p=""/>
                <PostGallery image1={content6} image2={content7} image3={content8} title="Final Design" body="Final design implemented to the website" button="This is Button" class="hidden"/>
                <PostOutcome image={content9} title="Results And Learnings" 
                body="
                We conducted AB testing on VWO and observed a 25% improvement with the new flow. Two months after implementing the new flow on the production site, we noted a 15% decrease in bounce rate, a 14% increase in session duration, a 20% rise in revenue, and a 12% increase in transactions, as reported by Google Analytics.
                " button="This is Button" classes="hidden"/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostMealPlanMenu