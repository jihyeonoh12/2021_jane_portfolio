
import React from 'react';
import PostContent from '../components/PostContent';
import content1  from '../images/about/Hiking-at-Sierra-Madre.jpeg'

function About () {
    return (
    <div className="about">
      <PostContent className="" image={content1} title="Hello!👋 my name is Jane" 
                body="
                My passion for design started when I drew illustrations as a child. As I grew up, I wanted to learn more design skills, so I studied studio art at CSULB. After graduation, I gained significant graphic design and web design experience working in the beauty and food industry for three years. Through this experience, I found my true love to be the interaction designer. I am currently polishing my motion graphic and UI/UX design skills to deliver beautiful and easy-to-use user interfaces. I like to work on redesigning web and app designs, suggesting creative solutions that not only are visually appealing but also deliver a great user experience.
                "
                 h3="" p=""/>
    </div>
    )
}

export default About