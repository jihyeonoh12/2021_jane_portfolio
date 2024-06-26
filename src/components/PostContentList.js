import React from 'react';

function PostContentList(props) {
    const title = props.title;
    const text = props.text;
    const image = props.image;
    const reverse = props.class
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return(

        <div className={"max-w-[1200px] w-full mx-auto my-[12px] block md:flex gap-2.5 container " + reverse}>
            <div className="w-full md:w-1/2">
                <img src={image} className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover"/>
            </div>
            <div className="m-auto py-[40px] px-[20px] md:px-[60px] text-left w-full md:w-1/2">
            <h2>{title}</h2>
                <div className="mt-6">
                {newText}
                </div>
                
            </div>
           </div>

        

    )
     
  }

export default PostContentList