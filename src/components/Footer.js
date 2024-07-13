import React from 'react'
import '../styles/footer.css';
import resume from '../images/2020-JANENOH-RESUME2.pdf';


class Footer extends React.Component {
    render() {
        return (
            <div className="max-w-[1200px] md:flex w-full h-[80px] justify-between px-2.5 py-[20px] m-auto">
                <div className="flex gap-2.5 items-center justify-center">
                    <a href="#">Design</a>
                    <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    <a href="#">Coding</a>
                </div>
                <div className="text-center md:text-right">
                     <h5 className='font-bold'>Built with React JS © 2021 by Jane Noh</h5>
                </div>
            </div>

        )
    }
}

export default Footer