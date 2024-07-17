
import ModalImage from "react-modal-image";


const PostContent = ({ 
    classes,
    image,
    title,
    body,
    h3,
    p
 }) => {
    const domainUrl = window.location.origin;

        return (
           <div className={"max-w-[1200px] w-full mx-auto my-[60px] block md:flex gap-2.5 container " + classes} >
            <div className="w-full md:w-1/2">
                <img src={image} className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover"/>
                {/* <ModalImage
                    className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover"
                    small={domainUrl+image}
                    large={domainUrl+image}
                    hideDownload={true}
                    alt=''
                /> */}
            </div>
            <div className="m-auto py-[40px] px-[20px] md:px-[60px] text-left w-full md:w-1/2">
                <h2>{title}</h2>
                <p className="mt-6">{body}</p>
                <h3 className="empty">{h3}</h3>
                <p className="empty">{p}</p>
            </div>
           </div>
        )

}

export default PostContent