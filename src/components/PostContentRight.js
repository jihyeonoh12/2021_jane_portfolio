
import React from 'react';
import '../styles/general.css';


class PostContentRight extends React.Component {
    render() {
        return (
           <div className="max-width flex column-reverse container">
            
            <div className="margin-a padding-tb text-left flex-half">
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
                <h3 className="empty">{this.props.h3}</h3>
                <p className="empty">{this.props.p}</p>
            </div>
            <div className="flex-half">
                <img src={this.props.image} className="img-half"/>
            </div>
           </div>
        )

    }
}

export default PostContentRight