
import React from 'react';
import PostHero from '../components/PostHero'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostContent from '../components/PostContent'

import content1 from '../images/note/NoteApp_content1.jpg';
import content2 from '../images/meme/Meme_tool.jpg';

const PostNote = () => {
    return (
        <div className="post_body">
        <div className="post_container">
            <PostHero title="Building note-taking app" 
                from="From" company="Personal Project"  role1="•  Managing state using React Hook" role2="• Styling page using Bootstrap" 
            />
            <PostContent classes="" image={content1} title="Final Website/App" 
            body="" 
            button="View Website"
            url="https://jihyeonoh12.github.io/note-app/"
            />
            <PostFooter />
            </div>
        </div>
    )
}



export default PostNote