
import React from 'react';
import '../styles/general.css';


class PostContentRight extends React.Component {
    render() {
        return (
           <div className="max-w-[1200px] w-full mx-auto my-[12px] flex gap-2.5 flex-col md:flex-row container">
            
            <div className="m-auto py-[40px] px-[20px] md:px-[60px] text-left w-full md:w-1/2">
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
                <h3 className="empty">{this.props.h3}</h3>
                <p className="empty">{this.props.p}</p>
            </div>
            <div className="w-full md:w-1/2">
                <img src={this.props.image} className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover"/>
            </div>
           </div>
        )

    }
}

export default PostContentRight