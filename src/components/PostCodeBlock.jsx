
import { CopyBlock, nord } from 'react-code-blocks';


const PostContent = ({ 
   classes,
   text,
   language,
   code,
   fullContainer
 }) => {
    const containerClass = fullContainer ? '' + classes : 'md:flex gap-2.5 ' + classes;
    const codeBlockClass = !fullContainer ? 'md:w-1/2' : '';

        return (
           <div className={"max-w-[1200px] mx-auto my-[60px] w-full block container " + containerClass} >
             { text && fullContainer ? ( 
             <div className="m-auto py-[40px] text-left w-full">
                <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </div> 
            ) : null}
            <div className={'codeBlock w-full ' + codeBlockClass}>
            <CopyBlock
                text={code}
                language={language}
                showLineNumbers={true}
                wrapLines={true}
                theme={nord}
                codeBlock
                />
            </div>
            { text && !fullContainer ? (
            <div className="m-auto py-[40px] px-[20px] md:px-[60px] text-left w-full md:w-1/2">
                <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </div> 
            ) : null}
           </div>
        )
}

export default PostContent