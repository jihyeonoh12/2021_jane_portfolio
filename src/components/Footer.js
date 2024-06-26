import React from 'react'
import '../styles/footer.css';
import resume from '../images/2020-JANENOH-RESUME2.pdf';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="flex gap-2.5 items-center">
                    <a href="#">Digital Design</a>
                    <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    <a href="#">Print Design</a>
                    <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    <a href="#">Coding</a>
                </div>
                <div className="flex gap-2.5 items-center">
                     <a href={resume} target="_blank" rel="noreferrer noopener">Resume</a>
                     <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                     <h4>Built with React JS © 2021 by Jane Noh</h4>
                </div>
            </div>

        )
    }
}

export default Footer