
import React from 'react';
import PostContent from '../components/PostContent';
import content1  from '../images/about/Hiking-at-Sierra-Madre.jpeg'

function About () {
    return (
    <div className="about">
      <PostContent className="" image={content1} title="Hello!👋 my name is Jane" 
                body="
                Blending design finesse with coding prowess 

                Ever since I was a kid, I loved to draw, which led me to study studio art at CSULB. After graduating, I kicked off my career as a graphic designer and eventually found my way into UI/UX design. Working closely with web developers got me curious about coding, so I took a coding bootcamp at UCI while still working as a UI/UX designer. Learning to code was a game-changer, bridging the gap between design and development for me. I got hooked on building apps and eventually made the leap to become a software developer, blending my design skills with my newfound coding abilities.
                "
                 h3="" p=""/>
    </div>
    )
}

export default About