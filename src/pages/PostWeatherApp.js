
import React from 'react';
import PostHero from '../components/PostHero'
import PostContent from '../components/PostContent'
import PostOutcome from '../components/PostOutcome'
import PostFooter from '../components/PostFooter'
import PostContentList from '../components/PostContentList'


import hero_banner from '../images/weather_app/banner.jpg';
import content1 from '../images/weather_app/traveler.jpg';
import content2 from '../images/weather_app/OpenWeatherApp.jpg';
import content3 from '../images/weather_app/dev_tools.jpg';



class PostWeatherApp extends React.Component {
    render() {
        return (
            <div className="post_body">
            <div className="post_container">
                <PostHero image={hero_banner} title="Weather Dashboard" 
                    from="From" company="UCI Bootcamp" date="Nov. 2019" role1="• Retrieve data using API Calls" role2="• Use local Storage to store search history" role3="• Use jQuery to render the page" role4="• Page styling using Bootstrap" role5=""
                />
                <PostContent class="" image={content1} title="User Story" 
                body="
                As a traveler, I want to see the weather outlook for multiple cities so that I can plan a trip accordingly
                " h3="" p=""/>

                <PostContentList class="flex-row-reverse" image={content2} title="This project includes :" 
                text={'• Using the OpenWeather API to retrieve weather data  \n • Using AJAX to hook into the API to retrieve data in JSON format \n • Using jQuery to display retrieve data into HTML and CSS \n • Using localStorage to store search history'} />
            
                <PostOutcome image={content3} title="Results And Learnings" 
                body="
Through this project, I learned how to handle API Calls. I was able to use AJAX to hook into the API and render those data on the website.
                " button="View Website" url="https://jihyeonoh12.github.io/week6_hw/" class=""/>
                <PostFooter />
                </div>
            </div>
        )

    }
}

export default PostWeatherApp