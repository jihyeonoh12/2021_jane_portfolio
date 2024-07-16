
import React from 'react';
import PostHero from '../components/PostHero'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostContentList from '../components/PostContentList'

import hero_banner from '../images/weather_app/banner.jpg';
import content2 from '../images/weather_app/OpenWeatherApp.jpg';
import content3 from '../images/weather_app/dev_tools.jpg';

class PostWeatherApp extends React.Component {
    render() {
        return (
            <div className="post_body">
            <div className="post_container">
                <PostHero image={hero_banner} title="Weather Dashboard" 
                    from="From" company="UCI Bootcamp" date="November 2019" role1="• Retrieving data via API Calls" role2="• Storing search history in Local Storage" role3="• Rendering the page with jQuery" role4="• Styling the page using Bootstrap" role5=""
                />
                {/* <PostContent classes="" image={content1} title="User Story" 
                body="
                As a traveler, I want to see the weather outlook for multiple cities so that I can plan a trip accordingly
                " h3="" p=""/> */}

                <PostContentList classes="" image={content2} title="This project involves:" 
                text={'• Utilizing the OpenWeather API to fetch weather data  \n • Employing AJAX to interact with the API and retrieve data in JSON format \n • Using jQuery to dynamically display retrieved data in HTML \n • Utilizing localStorage to persist search history'} />
            
                <PostOutcome image={content3} title="Results And Learnings" 
                body="
                Through this project, I gained experience in managing API calls. I successfully utilized AJAX to interface with the API and display that data on the website.
                " button="View Website" url="https://jihyeonoh12.github.io/week6_hw/" classes=""/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostWeatherApp