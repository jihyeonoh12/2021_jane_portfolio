import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostOutcome from '../components/PostOutcome'
import PostCodeBlock from '../components/PostCodeBlock'
import PostFooter from '../components/PostFooter'
import PostGallery from '../components/PostGallery'

import content1 from '../images/rewards/rewards_hero.jpg';
import content2 from '../images/rewards/Rewards content1.jpg';
import content3 from '../images/rewards/Rewards page.jpg';
import content4 from '../images/rewards/Referral page.jpg';
import content5 from '../images/rewards/Rewards features.jpg';
import content6 from '../images/preference/Dashboard.jpg';
import rewards_hook from '../contents/rewards_hook';
import rewards_ms_hook from '../contents/rewards_ms_hook';


const PostRewards = () => {
    return (
        <div className="post_body">
            <div className="post_container">
            <PostHero image={content1} title="Developing the Rewards and Referral Page and Its Features" description=""
                    from="Company" company="Fresh N Lean" date="January 2024" 
                    role1="• Retrieving data via GraphQL queries
                    " role2="• Managing data with React Hooks
                    " role3="• Sending data via dispatch functions"
                    role4="• Creating a component to match the design"
                />
            <PostContent classes="" image={content2} title="Project Objectives" 
            body="
            This project aims to boost customer retention by letting users earn reward points for orders, referrals, and meal reviews. Additionally, feedback on meals will help us identify which types to focus on manufacturing."
            h3="" p=""/>
            <PostCodeBlock code={rewards_hook} language={'ts'} fullContainer={true}
            text={`
            <h2>Data Fetching and Dispatch</h2>
            <p className="mt-6">
            GraphQL calls for rewards and referrals were made to fetch data, which were then stored in variables and rendered across various pages and components. Below is a simplified example of how the GraphQL call, variable update, and dispatch submit were implemented            `}
            />
            <PostCodeBlock classes="flex-row-reverse" code={rewards_ms_hook} language={'ts'} fullContainer={true}/>
            <PostGallery image1={content3} image2={content4} image3={content5} 
            title="Visual Results Showcase" 
            />
            <PostOutcome image={content6} classes="hidden" title="Learning" body="
            Through this project, I've learned how to implement GraphQL calls to fetch data for rewards and referrals, manage and store fetched data efficiently, update state using dispatch actions, and handle form submissions or related functionalities. These experiences have deepened my understanding of frontend development practices, particularly in managing data flow and state within React or similar frameworks.
            " />
            <PostFooter />
            </div>
        </div>

    )
}

export default PostRewards;