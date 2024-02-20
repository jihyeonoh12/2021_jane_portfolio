
import React from 'react';
import '../styles/general.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

 
class PostGallery extends React.Component {
   
    render() {
        return (
           <div className="max-width container">
                <div className="flex space-between bottom-40">
                    <div className="text-left">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.body}</p>
                    </div>
                    <div className={this.props.class }>
                        <h4>{this.props.button}</h4>
                    </div>
                </div>
                <div>
                    <div className="flex">
                    <div className="flex-half">
                         <Zoom> 
                             <img src={this.props.image1} alt="Image"   className="img-half"/>
                        </Zoom>
                    </div>
                    <div className="flex-half">
                         <Zoom> 
                             <img src={this.props.image2} alt="Image"   className="img-half" />
                        </Zoom>
                    </div>
                    </div>
                    
                    <div className="top-10">
                    <Zoom>
                    <img src={this.props.image3} className="img-mw"/>
                    </Zoom>
                    </div>
                </div>
                {/* <script src="../js/zoom.js"></script> */}
           </div>
        )

    }
}

export default PostGallery