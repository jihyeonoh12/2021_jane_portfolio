
import ModalImage from "react-modal-image";

 
const PostGallery = (props) => {
    const { title, body, button, image1, image2, image3, url, button2, url2 } = props;
    const domainUrl = window.location.origin;

   console.log(image1);
    return (
        <div className="max-w-[1200px] w-full mx-auto my-[12px] container">
            { title && (
                <div className="flex-col md:flex-row flex gap-2.5 justify-between mb-10 md:items-center">
                    <div className="text-left px-[20px]">
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                    <div className="flex gap-2.5">
                    {button && (
                        <a className="rounded bg-themeColor hover:bg-themeDark text-white px-5 py-4 btn min-w-[150px] w-full text-center text-nowrap" href={url} target="_blank" rel="noreferrer">{button}</a>
                    )}
                    {button2 && (
                        <a className="rounded bg-themeColor hover:bg-themeDark text-white px-5 py-4 btn min-w-[150px] w-full text-center text-nowrap" href={url2} target="_blank" rel="noreferrer">{button2}</a>
                    )}
                    </div>
                </div>
            )}
            <div>
                {image1 && image2 ? (
                <div className="flex gap-2.5 w-full">
                    <div className="Zoom-img-container flex gap-2.5-half w-full">
                        <ModalImage
                            className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover object-top"
                            small={domainUrl+image1}
                            large={domainUrl+image1}
                            hideDownload={true}
                            alt=''
                        />
                    </div>
                    <div className="Zoom-img-container flex gap-2.5-half w-full">
                        <ModalImage
                            className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover object-top"
                            small={domainUrl+image2}
                            large={domainUrl+image2}
                            hideDownload={true}
                            alt=''
                        />
                    </div>
                </div>
                ) : null}
                <div className=" mt-2.5">
                    {image3 && (
                        <ModalImage
                            className="w-full mb-[40px] object-top max-h-[350px] md:max-h-[550px] h-[550px] object-cover"
                            small={domainUrl+image3}
                            large={domainUrl+image3}
                            hideDownload={true}
                            alt=''
                        />
                    )}
                </div>
            </div>
        </div>
    )

}


export default PostGallery