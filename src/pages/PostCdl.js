
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostGallery from '../components/PostGallery'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostContentList from '../components/PostContentList'


import hero_banner from '../images/cdl/meal_box.jpg';
import content1 from '../images/cdl/product.jpg';
import content2 from '../images/cdl/target_audience.jpg';
// import content3 from '../images/cdl/value_prop.jpg';
import content4 from '../images/cdl/design_solution.jpg';
import content5 from '../images/cdl/logo.jpg';
import content6 from '../images/cdl/mobile.jpg';
import content7 from '../images/cdl/desktops.jpg';
import content8 from '../images/cdl/tools.jpg';
import content9 from '../images/cdl/old_logo.jpg';



class PostCdl extends React.Component {
    render() {
        return (
            <div className="post_body">
            <div className="post_container">
                <PostHero image={hero_banner} title="Rebranding and Rebuiding CDL website"
                   from="Company"  company="CDL Meals" date="Jun. 2019" role1="• Redesigning Logo" role2="• Updating Package Design" role3="• Creating Prototypes" role4="• Developing PHP Templates" role5="• Page Styling with SCSS"
                />
                <PostContent classes="" image={content1} title="What is CDL Meals?" body="CDL Meals is a sub-brand of Fresh n' Lean. established in 2018.
                CDL Meals is designed to provide a healthier on-the-go food option for the busy commercially licensed driver community" h3="" p=""/>

                <PostContentList classes="flex-row-reverse" image={content2} title="Target Audience" 
                text={'• Age group : 25 – 62yrs \n • Commercially licensed driver \n • Drivers suffer from healthy problem due to unhealthy diet \n • Drivers who do not have time to cook but want to eat healthy food'} />

                <PostContent classes="" image={content9} title="Problem / Issue" 
                body="
                The brand's creatives, such as the logo and websites, were created back in 2018 and hadn't been updated since then. Following the rebranding of Fresh N' Lean, our goal was to update the designs to ensure both brands appeared cohesive.
                Additionally, the website is entirely built in static code, posing challenges for other team members who need to update content.
                "
                 h3="" p=""/>
    
                <PostContent classes="flex-row-reverse" image={content4} title="Design / developement solution :" 
                body="
                Redesign the logo to align with the new Fresh N' Lean branding style. Rebuild the website using a PHP template and ACF (Advanced Custom Fields) for simplified content management by the website manager.
                "
                 h3="" p=""/>
                <PostGallery image1={content5} image2={content6} image3={content7} title="Final Design And Page" body="The final design and screenshots of the website." button="Go To CDL website" url="https://www.cdlmeals.com/" />
                <PostOutcome classes="hidden" image={content8} title="Results And Learnings" 
                body="
                We were unable to measure success as we did not launch it on an analytics program, but it was a valuable learning experience for me. This project allowed me to grasp the fundamentals of PHP templates and ACF fields, enabling other team members to manage content without needing to update code directly.                " button="This is Button"/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostCdl