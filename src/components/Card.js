import React from 'react'
import '../styles/general.css';

const Card = (props) => {
    const { image, title, description } = props;
    return (
        <div className="pt-0 px-0 pb-[20px] mx-2.5 my-[40px]">
            <img src={image} className="object-cover shadow-card rounded-lg mb-2.5 w-full h-[350px]"/>
            <div className="p-2.5 text-left">
                <h2>
                    {title}
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
  };

export default Card