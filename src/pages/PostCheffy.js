
import React from 'react';
import PostHero from '../components/PostHero'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostContent from '../components/PostContent'

import hero_banner from '../images/cheffy/cheffy_hero.jpg';
import content1 from '../images/cheffy/Cheffy_content1.jpg';
import content2 from '../images/cheffy/cheffy_tools.jpg';

const PostCheffy = () => {
    return (
        <div className="post_body">
        <div className="post_container">
            <PostHero image={hero_banner} title="Building websites for recipe search and grocery shopping" 
                from="From" company="UCI Bootcamp" date="January 2020" role1="• Retrieving data via API Calls" role2="• Implementing Whisk SDK" role3="• Rendering the page with jQuery" role4="• Styling the page using Bootstrap" role5=""
            />

            <PostContent classes="" image={content1} title="Project Objective" 
            body="The objective of this project is to build a website that suggests and allows users to search recipes, and assists with grocery shopping by automatically adding recipe ingredients to the nearest grocery store's website." />
        
            <PostOutcome image={content2} title="Results And Learnings" 
            body="
            After this project, I learned how to make API calls using Ajax and how to use the Whisk SDK.
            " button="View Website" url="https://jihyeonoh12.github.io/project-one/" classes=""/>
            <PostFooter />
            </div>
        </div>
    )
}



export default PostCheffy