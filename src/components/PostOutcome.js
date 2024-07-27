
import React from 'react';

const PostOutcome = ({ image, title, body, url, classes, button }) => {
        return (
           <div className="max-w-[1200px] w-full mx-auto my-[60px] container">
                <div className="outcome-cotent md:flex gap-2.5 space-between">
                    <div className="md:w-[30%]">
                        <img src={image} className="w-[800px] md:max-h-[300px] h-full"/>
                    </div>
                    <div className="m-auto py-[40px] px-[20px] md:px-[60px] text-left md:w-[70%]">
                        <h2>{title}</h2>
                        <p>{body}</p>
                        {url && button ? (
                            <a href={url} target="_blank" rel="noreferrer noopener" className='rounded bg-themeColor hover:bg-themeDark text-white px-5 py-4 btn w-fit text-cente text-nowrap my-5'>{button}</a>
                        ) : null}
                    </div>
                </div>
           </div>
        )
}

export default PostOutcome