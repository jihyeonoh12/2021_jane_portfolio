
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostGallery from '../components/PostGallery'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import Footer from '../components/Footer'
import PostContentList from '../components/PostContentList'


import hero_company from '../images/company/banner.jpg';
import content1 from '../images/company/phone.jpg';
import content2 from '../images/company/target_audience.jpg';
import content3 from '../images/company/building.jpg';
import content4 from '../images/company/design_solution.jpg';
import content5 from '../images/company/mobile.jpg';
import content6 from '../images/company/desktop.jpg';
import content7 from '../images/company/desktops.jpg';
import content8 from '../images/company/tools.jpg';



class PostCompany extends React.Component {
    render() {
        return (
            <div className="post_body">
            <div className="post_container">
                <PostHero image={hero_company} title="Designing and Building Company Page" description="Design and building company page"
                    from="Company" company="Fresh N Lean" date="Dec. 2020" role1="• Conducting competitor research" role2="• Creating Prototype" role3="• Creating the template using Php" role4="• Applying SCSS for page styling"
                />
                <PostContent classes="" image={content1} title="FNL Company Page" 
                body="
                We wanted to design and build company page where we can talk about the mission statment and the culture of the company. Main purpose of this page is to list out job posting and help future employees to understand what is like to be working at Fresh N Lean.
                Later down the project, the marketing team has decided to combine the company page with press page so user can easily access the latest news and media assets all in one place.
                " h3="" p=""/>

                <PostContentList classes="flex-row-reverse" image={content2} title="Target Audience / Main Users" 
                text={'• Job Applicant, future employee \n • Press Release Writers'} />
                
                <PostContentList classes="" image={content3} title="Key Contents" 
                text={'• Company mission statement \n • Company cultures (social events) \n • Careers page with job posting \n • Press related contents (Media Assets)'} />
                
                <PostContent classes="flex-row-reverse" image={content4} title="Design solution :" 
                body="
                Since we want to showcase more than one topic on this page, we decided to break the contents into 4 pages and a menu bar that connects those 4 pages.

                "
                 h3="" p=""/>
                <PostGallery image1={content5} image2={content6} image3={content7} title="Final Design System" body="Fresh n Lean is a meal delivery service that provides chef prepared, organic" button="" class="hidden"/>
                <PostOutcome image={content8} classes="hidden" title="Result / Learnings" body="
This project was great front-end development expereince for me because some of the page required using libraries such as 'Slick-Slider' to create history timeline component and popup modules. 
                " button=""/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostCompany