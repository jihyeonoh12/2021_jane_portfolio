import React from 'react';
import '../styles/herobanner.css';

function Herobanner () {
    return(
        <div className="hero">
            <div className="hero_container text-center">
                {/* <h1>
                Hello I’m Jane. Welcome to my portfolio.
                </h1> */}
                <h1 className="mt-10  animate-fade">
                Former UIUX Designer,
                </h1>
                <h1 className='animate-fade'>
                Now Mastering Software Engineering✨‍ 
                </h1>
                <p className='animate-fade'>
                Combining my passion for sleek, user-friendly design with the power of code to create beautiful and functional apps.
                </p>
            </div>
        </div>
    )
}

export default Herobanner