
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostGallery from '../components/PostGallery'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import Footer from '../components/Footer'
import PostContentList from '../components/PostContentList'


import hero_banner from '../images/rebrand/banner.jpeg';
import content1 from '../images/rebrand/unboxing.png';
import content2 from '../images/rebrand/old_logo.jpeg';
import content3 from '../images/rebrand/graph1.jpeg';
import content4 from '../images/meal_plan_menu/target_audience.jpg';
import content5 from '../images/rebrand/value_prop.png';
import content6 from '../images/rebrand/posts.jpeg';

import content7 from '../images/rebrand/leaf_icon.jpeg';
import content8 from '../images/rebrand/new_logo.jpeg';
import content9 from '../images/rebrand/colors_fonts-01.jpg';




class PostRebrand extends React.Component {
    render() {
        return (
            <div className="post_body">
            <div className="post_container">
                <PostHero image={hero_banner} title="Rebranding Corporate Identity" description="Re-designing logo, website, packaging for building strong corporate identity"
                    from="Company" company="Fresh N Lean" date="Feb. 2020" role1="• User Research" role2="• Creating Style Guide" role3="• Updating Website Assets" role4="Packaging design"
                />
                <PostContent class="" image={content1} title="Context" 
                body="Fresh N' Lean is a meal delivery service that provides chef prepared, organic, and nutrient dense food. Their meals are made entirely from scratch and delivered straight to your door. Ultimate goal with Fresh n’ Lean is to make Healthy eating easier for everyone." h3="" p=""/>

                <PostContent class="row-reverse" image={content2} title="Problem / Issue" 
                body="The first problem was that their online sales were heavily relied on SEO ranking and from time to time the the conversion rate went down when google updates their algorithm. Second problem was that their old logo and packaging didn’t look cohesive together. They got their logo and packaging design done from different designers and didn’t have a solid style guideline. Thus their branding seemed not strong to appeal to their potential target group." h3="" p=""/>

                <PostContent class="" image={content3} title="Research" 
                body="After doing research on google analytics and facebook (using facebook ads), we were able to gather data on current user demographics. By using this data as our foundation, we decided to make changes in marketing and design direction." h3="" p=""/>

                <PostContentList class="row-reverse" image={content4} title="Target Audience" 
                text={'• Location : California, New York, Washington \n • Age group : 25 – 40yrs \n • Salary: Upper Middle Class, Upper Class \n • people who are tired of eating prepped meals \n • Professional athlets who don’t have time to cook \n • Interested in weight loss meal plan \n • People who wants sustainable meal plan'} />

                <PostContentList class="" image={content5} title="Value Prop" 
                text={'• Pre-made ready to eat meal  \n• Free weekly delivery  \n • New seasonal menu every weeks \n • Macro calculation to keep track of caloriesk \n • Easy to customize meal by adding bulk sides \n • Nutrient dense meal that helps high performance'} />
                

                <PostContent class="row-reverse" image={content6} title="Design solution :" 
                body="
                From our data, we were able to find out that we get higher customer lifetime value out of male customer than female customer and we wanted to test our hypothesis by updating our brand into masculine design.
                "
                 h3="" p=""/>
                <PostGallery image1={content7} image2={content8} image3={content9} title="Final Design System" body="Fresh n Lean is a meal delivery service that provides chef prepared, organic" button="This is Button" class="dnone"/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostRebrand