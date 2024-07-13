import React from 'react';

// class PostHero extends React.Component {

const PostHero = (props) => {
        const { image, company, date, title, role1, role2, role3, role4, role5 } = props;


    return(
        <div className="max-w-[1200px] w-full mx-auto mt-[12px] mb-[40px] container">
            <div className="mt-10">
                {image ? (
                <img src={image} className="w-full h-auto mb-[40px] mt-10 "/>
                ) :  null}
                <div className="text-left block md:flex gap-2.5 mb-2">
                    <div className=" w-full box-border mr-2.5 md:border-r-2 md:border-blue pb-3">
                    <h1 className='mr-10'>{title}</h1>
                    <div className='flex'>
                <h5>{company}</h5>
                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                <h5>{date}</h5>
                </div>
                    </div>
                    <div className="md:w-fit w-full box-border justify-end block md:flex gap-2.5 md:mx-5">

                        {/* <div className='md:w-1/2'>
                            <div className="mb-8 w-full flex justify-between border-dashed border-t border-black pt-2.5 md:block md:border-none md:pt-0">
                            <h3>{from}</h3>
                            <p>{company}</p>
                            </div>

                            <div className="w-full flex justify-between border-dashed border-t border-black pt-2.5 md:block md:border-none md:pt-0">
                            <h3>Date</h3>
                            <p>{date}</p>
                            </div>
                        </div> */}
                        <div className="w-full md:w-fit border-t border-blue pt-2.5 md:border-none md:pt-0 text-nowrap">
                        <h3>Responsibilities</h3>
                        <p>{role1}</p>
                        <p className="empty">{role2}</p>
                        <p className="empty">{role3}</p>
                        <p className="empty">{role4}</p>
                        <p className="empty">{role5}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default PostHero