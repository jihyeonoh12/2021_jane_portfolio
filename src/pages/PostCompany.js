
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostGallery from '../components/PostGallery'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
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
                    from="Company" company="Fresh N Lean" date="Dec. 2020" role1="• Conducting competitor research" role2="• Creating Prototype" role3="• Developing PHP Templates" role4="• Page Styling with SCSS"
                />
                <PostContent classes="" image={content1} title="FNL Company Page" 
                body="
                We aimed to create a company page showcasing our mission statement and company culture. This page primarily serves to list job postings and offer prospective employees insights into life at Fresh N Lean. As the project progressed, our marketing team opted to integrate this company page with a press page, allowing users convenient access to the latest news and media assets in a unified location.
                " h3="" p=""/>

                <PostContentList classes="flex-row-reverse" image={content2} title="Target Audience / Main Users" 
                text={'• Job Applicants and future employees \n • Press Release Writers'} />
                
                <PostContentList classes="" image={content3} title="Key Contents" 
                text={'• Company mission statement \n • Company cultures (social events) \n • Careers page with job postings \n • Press related contents (Media Assets)'} />
                
                <PostContent classes="flex-row-reverse" image={content4} title="Design solution :" 
                body="
                To feature multiple topics on this page, we've chosen to divide the content into four separate pages accessible through a menu bar.
                "
                 h3="" p=""/>
                <PostGallery image1={content5} image2={content6} image3={content7} title="Final design / pages" body="" button="" class="hidden"/>
                <PostOutcome image={content8} classes="hidden" title="Result / Learnings" body="
This project provided valuable front-end development experience for me, especially in utilizing libraries like 'Slick Slider' for creating a history timeline component and popup modules.                " button=""/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostCompany