import React from 'react';
import '../styles/general.css';
import '../styles/post_hero.css';

class PostHero extends React.Component {
    render() {
    return(
        <div className="post-hero">
            <div className="post-hero_container">
                <img scr={this.props.image} className="post-hero_image"/>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        </div>
    )
    }
}

export default PostHero