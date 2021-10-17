
import React from 'react';
import '../styles/general.css';

class ThreeColumn extends React.Component {
    render() {
        return (
           <div className="max-width container">
            <h1 className="empty t-center-left">{this.props.title}</h1>
            <p className="t-center-left">We need to find who our audience is and where our product stands</p>
                <div className="flex space-between bottom-40 top-40">
                <div className="flex-30 flex-mobile-only">
                    <img src={this.props.image1} className="img-icon right-10 bottom-40"/>
                    <div className="t-center-left">
                        <h3>User/Product</h3>
                        <p>Using analytic tools to find out which demographic of user is using the service/page. Analyze user recording to find any ui errors</p>
                    </div>
                    </div>
                    
                <div className="flex-30 flex-mobile-only">
                    <img src={this.props.image2} className="img-icon right-10 bottom-40"/>
                        <div className="t-center-left">
                            <h3>Keyword Research</h3>
                             <p>Find search terms to figure out which marketing funnel stage the users are from and serve them with right contents</p>
                        </div>
                </div>
                <div className="flex-30 flex-mobile-only">
                    <img src={this.props.image3} className="img-icon right-10 bottom-40"/>
                    <div className="t-center-left">
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