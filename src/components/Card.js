import React from 'react'

const Card = (props) => {
    const { image, title, description, preheader } = props;

    let preheaderTag = '';
    switch(preheader) {
        case 'coding':
            preheaderTag = 'bg-blue text-white';
        break;
        case 'design':
            preheaderTag = 'bg-yellow';
        break;
        case 'coding, design':
            preheaderTag = 'bg-green';
        break;
        default:
            preheaderTag = '';
    }

    return (
        <div className="pt-0 px-0 pb-[20px] mx-2.5 my-[40px] relative">
            <h5 className={'absolute top-1 left-1 p-1 px-2 rounded capitalize ' + preheaderTag}>{preheader}</h5>
            <img src={image} alt="card" className="object-cover shadow-card rounded-lg mb-2.5 w-full h-[350px]"/>
            <div className="p-2.5 text-left">
                <h3>
                    {title}
                </h3>
                <p>{description}</p>
            </div>
        </div>
    );
  };

export default Card