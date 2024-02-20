import React from 'react'
import '../styles/general.css';
import '../styles/card.css';

const Card = (props) => {
    const { image, title, description } = props;
    return (
        <div className="card">
            <img src={image} className="card_image"/>
            <div className="card_text">
                <h2>
                    {title}
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
  };

export default Card