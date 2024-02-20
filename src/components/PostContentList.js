import React from 'react';
import '../styles/general.css';


function PostContentList(props) {
    const title = props.title;
    const text = props.text;
    const image = props.image;
    const reverse = props.class
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return(

        <div className={"max-width flex container " + reverse}>
            <div className="flex-half">
                <img src={image} className="img-half"/>
            </div>
            <div className="margin-a padding-tb text-left flex-half">
            <h2>{title}</h2>
                <div className="top-25">
                {newText}
                </div>
                
            </div>
           </div>

        

    )
     
  }

export default PostContentList