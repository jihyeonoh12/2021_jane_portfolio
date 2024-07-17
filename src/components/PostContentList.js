const PostContentList = ({ title, text, image, classes }) => {
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return(
        <div className={"max-w-[1200px] w-full mx-auto my-[60px] block md:flex gap-2.5 container " + classes}>
            <div className="Zoom-img-container w-full md:w-1/2">
                <img alt='test' src={image} className="max-w-[800px] w-full max-h-[350px] md:max-h-[550px] h-[550px] object-cover"/>
            </div>
            <div className="m-auto py-[40px] px-[20px] md:px-[60px] text-left w-full md:w-1/2">
            <h2>{title}</h2>
                <div className="mt-6">
                {newText}
                </div>
                
            </div>
           </div>
    )
     
  }

export default PostContentList