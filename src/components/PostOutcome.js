
import React from 'react';

const PostOutcome = ({ image, title, body, url, classes, button }) => {
        return (
           <div className="max-w-[1200px] w-full mx-auto my-[60px] container">
                {/* <div className="flex gap-2.5 space-between mb-10">
                    <div className="text-left">
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                    <div className="button">
                        <h4>{button}</h4>
                    </div>
                </div> */}
                <div className="outcome-cotent flex gap-2.5 space-between">
                    <div className="w-[30%]">
                        <img src={image} className="w-[800px] w-full max-h-[300px] h-full"/>
                    </div>
                    <div className="m-auto py-[40px] px-[20px] md:px-[60px] text-left w-[70%]">
                        <h2>{title}</h2>
                        <p>{body}</p>
                        <div className={"button button330 " + classes}>
                        <a href={url} target="_blank" rel="noreferrer noopener">{button}</a>
                    </div>
                    </div>
                </div>
           </div>
        )
}

export default PostOutcome