
import React from 'react';
import PostHero from '../components/PostHero'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostContent from '../components/PostContent'

import hero_banner from '../images/meme/Meme_hero.jpg';
import content1 from '../images/meme/Meme_content1.jpg';
import content2 from '../images/meme/Meme_tool.jpg';

const PostMeme = () => {
    return (
        <div className="post_body">
        <div className="post_container">
            <PostHero image={hero_banner} title="Building websites for recipe search and grocery shopping" 
                from="From" company="Personal Project"  role1="• Retrieving data via API Calls" role2="• Testing the App with Jest" role3="•  Managing state using React Hook" 
            />
            <PostContent classes="" image={content1} title="Final Website/App" 
            body=""
            button="View Website" url="https://jihyeonoh12.github.io/meme_generator/"
            />
            <PostFooter />
            </div>
        </div>
    )
}



export default PostMeme