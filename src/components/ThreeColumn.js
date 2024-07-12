
import React from 'react';

const ThreeColumn = ({ 
    title,
    image1,
    image2,
    title2,
    body2,
    image3
 }) => {
        return (
           <div className="max-w-[1200px] w-full mx-auto my-[60px] container">
            <h1 className="empty text-left md:text-center">{title}</h1>
            <p className="text-left md:text-center">We need to find who our audience is and where our product stands</p>
                <div className="md:flex justify-between mb-10 mt-10">
                    <div className="w-full md:block md:w-[30%] flex">
                        <img src={image1} className="w-[100px] h-[100px] md:min-w-[150px] md:h-[150px] mx-auto object-contain saturate-[70]"/>
                        <div className="text-left md:text-center">
                            <h3>User/Product</h3>
                            <p>Using analytic tools to find out which demographic of user is using the service/page. Analyze user recording to find any ui errors</p>
                        </div>
                    </div>
                    <div className="w-full md:block md:w-[30%] flex">
                        <img src={image2} className="w-[100px] h-[100px] md:min-w-[150px] md:h-[150px] mx-auto object-contain saturate-[70]"/>
                            <div className="text-left md:text-center">
                                <h3>{title2}</h3>
                                <p>{body2}</p>
                            </div>
                    </div>
                    <div className="w-full md:block md:w-[30%] flex">
                        <img src={image3} className="w-[100px] h-[100px] md:min-w-[150px] md:h-[150px] mx-auto object-contain saturate-[70]"/>
                        <div className="text-left md:text-center">
                            <h3>Know your competition</h3>
                            <p>Research competitor with similar product/item/service. Come up with value props that sets us apart from competitors </p>
                        </div>
                    </div>          
                </div>
           </div>
        )

    }

export default ThreeColumn