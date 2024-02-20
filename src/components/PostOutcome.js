
import React from 'react';
import '../styles/general.css';

class PostOutcome extends React.Component {
    render() {
        return (
           <div className="max-width container">
                {/* <div className="flex space-between bottom-40">
                    <div className="text-left">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.body}</p>
                    </div>
                    <div className="button">
                        <h4>{this.props.button}</h4>
                    </div>
                </div> */}
                <div className="outcome-cotent flex-mobile space-between">
                    <div className="flex-30">
                        <img src={this.props.image} className="img-small"/>
                    </div>
                    <div className="margin-a padding-tb text-left flex-70">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.body}</p>
                        <div className={"button button330 " + this.props.class}>
                        <a href={this.props.url} target="_blank" rel="noreferrer noopener">{this.props.button}</a>
                    </div>
                    </div>
                </div>
           </div>
        )

    }
}

export default PostOutcome