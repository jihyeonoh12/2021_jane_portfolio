import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostOutcome from '../components/PostOutcome'
import PostCodeBlock from '../components/PostCodeBlock'
import PostFooter from '../components/PostFooter'
import PostGallery from '../components/PostGallery'

import content1 from '../images/snack_popup/popup banner.jpg';
import content2 from '../images/snack_popup/Snack_popup_content1.jpg';
import content3 from '../images/rewards/Rewards page.jpg';
import content4 from '../images/rewards/Referral page.jpg';
import content5 from '../images/rewards/Rewards features.jpg';
import content6 from '../images/preference/Dashboard.jpg';
import snack_popup_code1 from '../contents/snack_popup';
import snack_popup_code2 from '../contents/snack_popup_component';
import snack_popup_code3 from '../contents/snack_popup_vwo';


const PostSnackPopup = () => {
    return (
        <div className="post_body">
            <div className="post_container">
            <PostHero image={content1} title="A/B testing a popup modal for upselling add-ons" description=""
                    from="Company" company="Fresh N Lean" date="May 2024" role2="• Managing data with React Hooks
                    " role1="• Creating a component to match the design"
                    role3="• Conducting A/B tests using VWO"
                />
            <PostContent classes="" image={content2} title="Project Overview" 
            body="
            The aim of this project is to test a popup module that prompts users to add a snack to their cart before saving their meal selection. The popup should only appear when the user has not added any additional items, and it will not display if the user has already seen it once before.
            "
            h3="" p=""/>
            <PostCodeBlock code={snack_popup_code1} language={'ts'} fullContainer={true}
            text={`
            <h2>Adding AddonModal Component</h2>
            <p className="mt-6">
            I began this project by adding a test button below the original 'save meal selection' button, initially hidden using the 'hidden' class. The test button includes an onclick function that triggers the addonModal component. Additionally, I implemented two useState hooks: one to track whether the user has seen the popup and another to activate the addonModal.            
            `}
            />
            <PostCodeBlock classes="" code={snack_popup_code2} language={'ts'} fullContainer={true}/>
            <PostCodeBlock 
            text={`
            <h2>Script for VWO</h2>
            <p className="mt-6">
            I completed the project by removing the 'hidden' class from the test button and deleting the original button on VWO.
            `}
            classes="" code={snack_popup_code3} language={'js'} fullContainer={true}/>
            <PostOutcome image={content6} classes="hidden" title="Learning" body="
            The AddonModal was successfully launched and tested on VWO. However, the variant showed a 30% decrease in click rate for the 'save meal selection' button, leading us to halt testing after a few days.            " />
            <PostFooter />
            </div>
        </div>

    )
}

export default PostSnackPopup;