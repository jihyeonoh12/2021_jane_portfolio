import React from 'react';
import '../styles/general.css';

class PostHero extends React.Component {
    render() {
    return(
        <div className="max-width margin-tb container">
            <div className="top-40">
                <img src={this.props.image} className="img-mw top-40 "/>
                <div className="text-left flex">
                    <div className="flex-half right-10">
                    <h1>{this.props.title}</h1>
                    </div>
                    <div className="flex-half space-between flex-mobile">
                        <div className="flex-30">
                        <h3>Company</h3>
                        <p>{this.props.company}</p>
                        </div>
                        <div className="flex-30">
                        <h3>Date</h3>
                        <p>{this.props.date}</p>
                        </div>
                        <div className="flex-30">
                        <h3>Role</h3>
                        <p>{this.props.role1}</p>
                        <p className="empty">{this.props.role2}</p>
                        <p className="empty">{this.props.role3}</p>
                        <p className="empty">{this.props.role4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default PostHero