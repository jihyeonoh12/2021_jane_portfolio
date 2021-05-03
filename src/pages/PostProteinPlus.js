
import React from 'react';
import PostHero from '../components/PostHero'
import Hero_protein_plus from '../images/protein_plus/2020 Protein Plus - hero.jpg';

class PostProteinPlus extends React.Component {
    render() {
        return (
            <div className="post_body">
            <div className="post_container">
                <PostHero image={Hero_protein_plus} title="Protein+ Meal Plan Page" description="Research and redesign of service page that tailored for its target audience"/>
                </div>
            </div>
        )

    }
}

export default PostProteinPlus