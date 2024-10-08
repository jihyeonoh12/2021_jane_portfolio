import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostOutcome from '../components/PostOutcome'
import PostCodeBlock from '../components/PostCodeBlock'
import PostFooter from '../components/PostFooter'

import content1 from '../images/sitewide_cta/Sitewide_cta_banner.jpg';
import content2 from '../images/sitewide_cta/Sitewide cta components.jpg';
import content3 from '../images/sitewide_cta/Sitewide cta acf.jpg';
import content5 from '../images/flexible_content/programs.jpg';
import sitewide_code_shortcode from '../contents/sitewide_code_shortcode';
import sitewide_code_component from '../contents/sitewide_code_component';


const PostSitewideCTA = () => {
    return (
        <div className="post_body">
            <div className="post_container">
            <PostHero image={content1} title="Creating Automated CTA Buttons That Applies Promo Code" description=""
                    from="Company" company="Fresh N Lean" date="October 2023" role1="• Creating global promo ACF" role2="• Creating a CTA button function" role3="• Replacing static CTA buttons"
                />
            <PostContent classes="" image={content2} title="Project Objectives" 
            body="
            The goal of this project is to automate the updating of CTA copy and URLs during sitewide promotions. With numerous components and pages featuring CTA buttons linking to the order page, manually updating each URL would be time-consuming. Additionally, this approach aims to minimize code duplication for creating similar CTA buttons with slight variations in data." h3="" p=""/>
             <PostContent classes="flex-row-reverse" image={content3} title="Solution" 
            body="
            I completed this project by creating a shortcode function that generates CTA buttons. This function utilizes props to pass down CTA copy and URLs, allowing for flexibility with different data as needed. Additionally, the shortcode function includes logic to check for promo ACF, enabling automatic application of promo codes during site-wide promotions.
            " h3="" p=""/>
            <PostCodeBlock classes="flex-row-reverse" code={sitewide_code_shortcode} language={'php'} fullContainer={true}/>
            <PostCodeBlock classes="flex-row-reverse" code={sitewide_code_component} language={'php'} fullContainer={true}/>

            <PostOutcome image={content5} classes="hidden" title="Learning" body="
            From this project, I learned to create and deploy shortcode functions in WordPress for dynamically generating CTA buttons. I also explored using props to manage varied content efficiently within shortcodes, and automated promotional updates using Advanced Custom Fields (ACF)
            " />
            <PostFooter />
            </div>
        </div>

    )
}

export default PostSitewideCTA;