import React from 'react';
import '../styles/general.css';


class PostHero extends React.Component {
    render() {
    return(
        <div className="post-hero">
            <div className="post-hero_container">
                <img className="post-hero_image" scr={this.props.image}/>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        </div>
    )
    }
}

export default PostHero