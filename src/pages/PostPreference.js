import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostOutcome from '../components/PostOutcome'
import PostCodeBlock from '../components/PostCodeBlock'
import PostFooter from '../components/PostFooter'

import content1 from '../images/preference/Preference banner.jpg';
import content2 from '../images/preference/preference content1.jpg';
import content3 from '../images/preference/preference content2.jpg';
import content4 from '../images/preference/preference content3.jpg';
import content6 from '../images/preference/Dashboard.jpg';
import preference_util from '../contents/preference_util';
import preference_update_value from '../contents/preference_update_value'


const PostPreference = () => {
    return (
        <div className="post_body">
            <div className="post_container">
            <PostHero image={content1} title="Implementing preference-based system in the dashboard" description=""
                    from="Company" company="Fresh N Lean" date="August 2022" role1="• Creating global promo ACF" role2="• Creating a CTA button function" role3="• Replacing static CTA buttons"
                />
            <PostContent classes="" image={content2} title="Project Objectives" 
            body="
            The objective of this project is to enable users to mix and match different meal plans and filter ingredients for their meal selections. The issue with the original meal plan system was that users could only choose meals from a single plan, which we found too restrictive. To address this, we transformed the meal plan subscription into a preference-based system, incorporating fields such as diet, protein, allergy, and exclusion." 
            h3="" p=""/>
             <PostContent classes="flex-row-reverse" image={content3} title="Backend Update" 
            body="
            The meal_plan field in the subscription query has been replaced with diet, protein, allergy, and exclusion fields. Additionally, a list of options for each category is returned.
            " h3="" p=""/>
            <PostCodeBlock classes="flex-row-reverse" code={preference_update_value} language={'ts'} fullContainer={true} 
            text={`
                <h2>Frontend Update</h2>
                <p className="mt-6">
                We began by updating the existing usePlan hook. The callback function that updated meal plan options was removed and replaced with an updatePreference callback. This new callback updates the subscription value when a new option is selected from the dropdown. Finally, when updatePreference is called, the checkPreferenceType function is invoked to return a list of protein, allergy, and exclusion ingredient options. </p>
            `}
            />
            <PostCodeBlock classes="" code={preference_util} language={'ts'} fullContainer={true}/>

            <PostContent classes="" image={content4} title="" 
            body="
            'checkPreferenceType' function issues a warning message to inform users if certain ingredients are excluded for specific diets.
            " h3="" p=""/>

            <PostOutcome image={content6} classes="hidden" title="Learning" body="
From this project, I learned how to enhance a meal plan subscription system by transitioning from a single meal plan model to a more flexible, preference-based model. This involved updating queries, restructuring subscription objects to include diet, protein, allergy, and exclusion fields, and making frontend updates, such as integrating dynamic dropdowns and validation functions.            " />
            <PostFooter />
            </div>
        </div>

    )
}

export default PostPreference;