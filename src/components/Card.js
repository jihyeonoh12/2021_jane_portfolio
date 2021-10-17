import React from 'react'
import '../styles/general.css';
import '../styles/card.css';


class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <img src={this.props.image} className="card_image"/>
                <div className="card_text">
                    <h2>
                        {this.props.title}
                    </h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
    
}

export default Card