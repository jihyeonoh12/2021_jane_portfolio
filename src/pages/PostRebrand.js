
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
                    from="Company" company="Fresh N Lean" date="Feb. 2020" role1="• Conducting User Research" role2="• Creating Style Guide" role3="• Updating Website Assets" role4="• Designing Packaging"
                />
                <PostContent classes="" image={content1} title="Context" 
                body="
                Fresh N' Lean is a meal delivery service offering chef-prepared, organic, and nutrient-dense food. Each meal is crafted from scratch and conveniently delivered to your doorstep. The ultimate goal of Fresh n' Lean is to make healthy eating accessible and effortless for everyone.
                " h3="" p=""/>

                <PostContent classes="flex-row-reverse" image={content2} title="Problem / Issue" 
                body="
                Their online sales heavily relied on SEO rankings, leading to fluctuating conversion rates with Google algorithm updates. Additionally, their logo and packaging, designed separately without a unified style guideline, lacked cohesion, weakening their brand appeal to the target audience.
                " h3="" p=""/>

                <PostContent classes="" image={content3} title="Research" 
                body="
                After researching Google Analytics and Facebook (via Facebook Ads), we gathered valuable data on current user demographics. Using this data as our foundation, we made strategic changes in marketing and design direction.
                " 
                h3="" p=""/>

                <PostContentList classes="flex-row-reverse" image={content4} title="Target Audience" 
                text={'• Major Location : California, New York, Washington \n • Age group : 25 – 40yrs \n • Salary: Upper Middle Class, Upper Class \n • Individuals tired of prepped meals \n • Professional athletes lacking time to cook \n • Interested in weight-loss meal plans \n • Seeking sustainable meal options'} />

                <PostContentList classes="" image={content5} title="Value Prop" 
                text={'• Pre-made ready to eat meal  \n• Free weekly delivery  \n • New seasonal menu every weeks \n • Macro calculation to keep track of caloriesk \n • Easy to customize meal by adding bulk sides \n • Nutrient dense meal that helps high performance'} />
                

                <PostContent classes="flex-row-reverse" image={content6} title="Design solution :" 
                body="
                Based on our data, we discovered that male customers have a higher customer lifetime value compared to female customers. To test this hypothesis, we decided to update our brand with a more masculine design.
                "
                 h3="" p=""/>
                <PostGallery image1={content7} image2={content8} image3={content9} title="Final Design System" body="Logo, Typography, and Color Scheme" />
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostRebrand