
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
                    from="Company" company="Fresh N Lean" date="Apr. 2020" role1="• Research Competitors" role2="• Analyze user data from GA" role3="• Create Prototype" role4="• Launch AB testing"
                />
                <PostContent classes="" image={content1} title="Menu and Meal Plan Page" body="Fresh n’ Lean provides performance meal plan that specifically targets fitness enthusiast and professional athlets who want nutrient dense and high-protein meal that fits their diet." h3="" p=""/>
                <ThreeColumn title="UX Research" image1={icon1} image2={icon2} title2={"User Behavior"} body2={"Find out traffic, bounce rate, click rate, and coversion rate to study user behavior"} image3={icon3}/>

                <PostContentList classes="flex-row-reverse" image={content2} title="Target Audience" 
                text={'• Age group : 25 – 40yrs \n • Professionals who don’t have time to cook \n • Fitness enthusiast who are health conscious \n • people who are tired of eating prepped meals \n • Who wants good source of energy'} />
                
                <PostContent classes="" image={content3} title="UX Problem" body="Through research, we found out that there is huge drop off rate as the user enters the order funnel.
Our hypothesis was that current user flow into the order page is too abrupt for users." h3="" p=""/>

                <PostContent classes="flex-row-reverse" image={content4} title="UX solution" 
                body="
                As a solution, we want to revamp the menu page and build a separate page that educate our user on the meal plans and help them find what’s right plans before have them jump into the order funnel."
                 h3="" p=""/>
                 <PostContent classes="" image={content5} title="UI solution" 
                body="Give each meal plan a theme color and concept (ie paleo with rustic vibe)
To create a clear distinction between meal plans. Communicate / Educate the key value props of each meal plan with Icon and macro nutrient breakdown."
                 h3="" p=""/>
                <PostGallery image1={content6} image2={content7} image3={content8} title="Final Design" body="Final design implemented to the website" button="This is Button" class="hidden"/>
                <PostOutcome image={content9} title="Results And Learnings" 
                body="Launched the AB testing on VWO and we got 25% improvement with new flow. After 2 months after we roll out the new flow into the production site, we found out that there's 15% less bounce rate, 14% more on session duration, 20% more revenue and 12% more transation according to Google Analytics." button="This is Button" classes="hidden"/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostMealPlanMenu