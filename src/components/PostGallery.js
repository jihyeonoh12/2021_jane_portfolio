
import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

 
class PostGallery extends React.Component {
   
    render() {
        return (
           <div className="max-w-[1200px] w-full mx-auto my-[12px] container">
                <div className="flex gap-2.5 space-between mb-10">
                    <div className="text-left">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.body}</p>
                    </div>
                    <div className={this.props.class }>
                        <h4>{this.props.button}</h4>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2.5 w-full">
                    <div className="Zoom-img-container flex gap-2.5-half w-full">
                         <Zoom> 
                             <img src={this.props.image1} alt="Image"   className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover"/>
                        </Zoom>
                    </div>
                    <div className="Zoom-img-container flex gap-2.5-half w-full">
                         <Zoom> 
                             <img src={this.props.image2} alt="Image"   className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover" />
                        </Zoom>
                    </div>
                    </div>
                    
                    <div className="Zoom-img-container mt-2.5">
                    <Zoom>
                    <img src={this.props.image3} className="w-full h-auto mb-[40px]"/>
                    </Zoom>
                    </div>
                </div>
                {/* <script src="../js/zoom.js"></script> */}
           </div>
        )

    }
}

export default PostGallery