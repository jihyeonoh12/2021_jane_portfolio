
import React from 'react';

class ThreeColumn extends React.Component {
    render() {
        return (
           <div className="max-w-[1200px] w-full mx-auto my-[12px] container">
            <h1 className="empty text-left md:text-center">{this.props.title}</h1>
            <p className="text-left md:text-center">We need to find who our audience is and where our product stands</p>
                <div className="flex space-between mb-10 mt-10">
                <div className="w-full block md:w-[30%] md:flex">
                    <img src={this.props.image1} className="min-w-[100px] h-[100px] md:min-w-[150px] md:h-[150px] mr-2.5 mb-10"/>
                    <div className="text-left md:text-center">
                        <h3>User/Product</h3>
                        <p>Using analytic tools to find out which demographic of user is using the service/page. Analyze user recording to find any ui errors</p>
                    </div>
                    </div>
                    
                <div className="w-full block md:w-[30%] md:flex">
                    <img src={this.props.image2} className="min-w-[100px] h-[100px] md:min-w-[150px] md:h-[150px] h-[150px] mr-2.5 mb-10"/>
                        <div className="text-left md:text-center">
                            <h3>{this.props.title2}</h3>
                             <p>{this.props.body2}</p>
                        </div>
                </div>
                <div className="w-full block md:w-[30%] md:flex">
                    <img src={this.props.image3} className="min-w-[100px] h-[100px] md:min-w-[150px] md:h-[150px] h-[150px] mr-2.5 mb-10"/>
                    <div className="text-left md:text-center">
                        <h3>Know your competition</h3>
                        <p>Research competitor with similar product/item/service. Come up with value props that sets us apart from competitors </p>
                        </div>
                </div>
                
                        
                </div>
           </div>
        )

    }
}

export default ThreeColumn