
import React from 'react';

class PostOutcome extends React.Component {
    render() {
        return (
           <div className="max-w-[1200px] w-full mx-auto my-[12px] container">
                {/* <div className="flex gap-2.5 space-between mb-10">
                    <div className="text-left">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.body}</p>
                    </div>
                    <div className="button">
                        <h4>{this.props.button}</h4>
                    </div>
                </div> */}
                <div className="outcome-cotent flex gap-2.5 space-between">
                    <div className="w-[30%]">
                        <img src={this.props.image} className="w-[800px] w-full max-h-[300px] h-full"/>
                    </div>
                    <div className="m-auto py-[40px] px-[20px] md:px-[60px] text-left w-[70%]">
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