import React from 'react';

class PostFooter extends React.Component {
    render() {
    return(
        <div className="px-0 py-[120px] bg-background">
            <div className='max-w-[1200px] w-full m-auto text-center'>
                <h2>Thank you for reading!</h2>
                <p>Please contact me for more info</p>
                <a href="mailto:jihyeonoh12@gmail.com">Send Email</a>
            </div>
        </div>
    )
    }
}

export default PostFooter