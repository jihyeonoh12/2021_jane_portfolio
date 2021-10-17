import React from 'react';
import '../styles/general.css';

class PostFooter extends React.Component {
    render() {
    return(
        <div className="padding-tb-120 bg-color">
            <h2>Thank you for reading!</h2>
            <p>Please contact me for more info</p>
            <a href="mailto:jihyeonoh12@gmail.com">Send Email</a>
        </div>
    )
    }
}

export default PostFooter