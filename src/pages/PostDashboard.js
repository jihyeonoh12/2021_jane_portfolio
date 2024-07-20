import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostCodeBlock from '../components/PostCodeBlock'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostGallery from '../components/PostGallery'

import content1 from '../images/dashboard/Dashboard_hero.jpg';
import content2 from '../images/dashboard/dashboard_before.jpg';
import content3 from '../images/dashboard/Dashboard_sitemap.jpg';
import content4 from '../images/dashboard/dashboard_lofi.jpg';
import content4_2 from '../images/dashboard/dashboard_userTesting.jpg';

import content5 from '../images/dashboard/dashboard_prototypes.jpg';
import content6 from '../images/dashboard/dashboard-programs.jpg';



const PostDashboard = () => {
    return (
        <div className="post_body">
            <div className="post_container">
            <PostHero image={content1} title="Designing and User-Testing Dashboard Prototypes" description=""
                    from="Company" company="Fresh N Lean" date="Feb 2021" role1="• Creating sitemaps and flowcharts" role2="• Developing Prototype" role3="• Conducting Usability Tests for Feedback
                    "
                />
            <PostContent classes="" image={content2} title="Project Objectives" 
                body="
                The goal of this project was to revamp the customer dashboard to enhance user-friendliness and add more features, aiming to reduce customer service tickets and increase retention. The problem with Fresh N' Lean's existing dashboard is that it was from a default Magento template and had significant styling and feature limitations."
                h3="" p=""/>
            
            <PostContent classes="flex-row-reverse" image={content3} title="Approach" 
                body="
                I initiated the project by developing a sitemap, which I reviewed with stakeholders, the development team, and customer service to ensure we addressed all required functionalities and features for the new dashboard."
                 h3="" p=""/>
            
            <PostContent classes="flex-row-reverse" image={content4} title="" 
                body="After confirming the required functionalities and features, I created a low-fidelity prototype to ensure the flow of each page was smooth and intuitive for users.
                " h3="" p=""/>

                
             <PostContent classes="" image={content4_2} title="Usability Tests" 
                body="
                Given the complex page flow of this project, I aimed to ensure it was intuitive for first-time users. To achieve this, I conducted a usability test on UsabilityHub with participants matching our target demographic. I then refined the design based on the feedback before handing it off to developers.
                "
                h3="" p=""
                button='View Test Feedback'
                url='https://xd.adobe.com/view/1325aefa-2c8f-40eb-a066-aca4ec5ec4e5-4676/?hints=off'
                />
            <PostGallery title="Final Design" image3={content5}  button='Desktop'
                url='https://xd.adobe.com/view/ff2d2791-2e32-4079-8265-fc59a64b5bcb-aa7e/?hints=off'
                button2='Mobile'
                url2='https://xd.adobe.com/view/04d96d5e-a67e-41e3-a39e-0c34f4f3f5fb-518a/?hints=off'
                />
            <PostOutcome image={content6} classes="hidden" title="Learning" body="
            From this project, I learned how to design intuitive interfaces by incorporating user feedback through prototypes and usability tests. I also gained experience in collaborating with stakeholders and managing complex design requirements, refining my ability to iterate on designs and ensure successful outcomes.
            " 
                />
            <PostFooter />
            </div>
        </div>

    )
}

export default PostDashboard;