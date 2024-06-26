
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostGallery from '../components/PostGallery'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import Footer from '../components/Footer'
import PostContentList from '../components/PostContentList'


import hero_banner from '../images/cdl/meal_box.jpg';
import content1 from '../images/cdl/product.jpg';
import content2 from '../images/cdl/target_audience.jpg';
import content3 from '../images/cdl/value_prop.jpg';
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
                <PostHero image={hero_banner} title="Rebranding and Rebuiding CDL website" description="Design and building company page"
                   from="Company"  company="CDL Meals" date="Jun. 2019" role1="• Redesign Logo" role2="• Update Package Design" role3="• Create Prototype" role4="• Build Php template" role5="• Page styling using SCSS"
                />
                <PostContent class="" image={content1} title="What is CDL Meals?" body="CDL Meals is a sub-brand of Fresh n' Lean. established in 2018
                CDL Meals is designed to provide a healthier on the go food option for the busy commercially licensed driver community" h3="" p=""/>

                <PostContentList class="flex-row-reverse" image={content2} title="Target Audience" 
                text={'• Age group : 25 – 62yrs \n • Commercially licensed driver \n • Drivers suffer from healthy problem due to unhealthy diet \n • Drivers who do not have time to cook but want to eat healthy food'} />
            
                {/* <PostContentList class="" image={content3} title="Value props" 
                text={'• Ready in 3 minutes. Easy to carry around. Also can purchase a potable food warmer. \n • Shipped free to your home or any specific terminal \n • Nutrient dense meal for high performance'} />
                 */}

                <PostContent class="" image={content9} title="Problem / Issue" 
                body="
                The brand creatives such as logo and websites are created back in 2018 and hadn't been updated since then.
                After the rebrand of Fresh N' Lean, we wanted udpate the design to make those two brand look cohesive. 
                Another issue is that the website is fully built in static code which won't allow other team members to update any contents.
                "
                 h3="" p=""/>
    
                <PostContent class="flex-row-reverse" image={content4} title="Design / developement solution :" 
                body="
               Redesign the logo that fits the style of new Fresh N' Lean branding. Rebuild the website using Php template and ACF so the website manager can easiler update the contents if needed.
                "
                 h3="" p=""/>
                <PostGallery image1={content5} image2={content6} image3={content7} title="Final Design And Development" body="The final design and screenshots of the website." button="This is Button" class="hidden"/>
                <PostOutcome class="hidden" image={content8} title="Results And Learnings" 
                body="We weren't able to measure the success since we didn't launch it on analytic program but it was certainly good learning experience for me. Through this project I was able to learn the basics of Php template and ACF fields which helped other team member to manage the content without updating contents on code side" button="This is Button"/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostCdl